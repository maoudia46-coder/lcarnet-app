import { createClient } from "npm:@supabase/supabase-js@2";
const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!, { auth: { persistSession: false } });
const j = (b: unknown, s = 200) => new Response(JSON.stringify(b), { status: s, headers: { "Content-Type": "application/json" } });
/* Import des dépenses pub (appelé par la tâche planifiée). Protégé par la clé fin_key de private.config. */
Deno.serve(async (req) => {
  if (req.method !== "POST") return j({ error: "method" }, 405);
  const { data: k } = await sb.schema("private").from("config").select("value").eq("key", "fin_key").maybeSingle();
  if (!k?.value || req.headers.get("x-fin-key") !== k.value) return j({ error: "forbidden" }, 403);
  const body = await req.json().catch(() => ({}));
  const rows: any[] = Array.isArray(body.rows) ? body.rows : [];
  if (!rows.length || rows.length > 2000) return j({ error: "rows" }, 400);
  const { data: rules } = await sb.from("fin_rules").select("pattern,business");
  const byId = new Map((rules || []).filter((r: any) => r.pattern.startsWith("id:")).map((r: any) => [r.pattern.slice(3), r.business]));
  const pats = (rules || []).filter((r: any) => !r.pattern.startsWith("id:"));
  const { data: old } = await sb.from("fin_spend").select("campaign_id,business").in("campaign_id", [...new Set(rows.map((r) => String(r.campaign_id)))]);
  const known = new Map((old || []).map((r: any) => [r.campaign_id, r.business]));
  const biz = (r: any) => {
    const id = String(r.campaign_id), n = String(r.campaign_name || "").toLowerCase();
    if (byId.has(id)) return byId.get(id);
    if (known.has(id)) return known.get(id);
    for (const p of pats) if (n.includes(p.pattern.toLowerCase())) return p.business;
    if (/adm digital|admdigital|promo adm|sponsoring adm/.test(n)) return "sponsoring";
    return r.platform === "tiktok" ? "autre" : "client";
  };
  const up = rows.filter((r) => /^\d{4}-\d{2}-\d{2}$/.test(String(r.day)) && r.campaign_id).map((r) => ({
    day: r.day, platform: String(r.platform || "meta"), account_id: String(r.account_id || ""), campaign_id: String(r.campaign_id),
    campaign_name: r.campaign_name ? String(r.campaign_name).slice(0, 300) : null, business: biz(r), spend_usd: Math.round((+r.spend_usd || 0) * 100) / 100, updated_at: new Date().toISOString(),
  }));
  const { error } = await sb.from("fin_spend").upsert(up, { onConflict: "day,platform,campaign_id" });
  if (error) return j({ error: error.message }, 500);
  return j({ ok: true, n: up.length });
});
