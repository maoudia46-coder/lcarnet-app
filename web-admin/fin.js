/* ADM Digital — Finances (onglet de l'admin). Données : tables fin_* du projet ADM, lisibles seulement par les admins. */
(function(){
const BIZ={
  sponsoring:{n:'Sponsoring',i:'📣',c:'#1f6bff',g:'sponsoring'},
  lcarnet:{n:'L’Carnet',i:'📒',c:'#0F6E4F',g:'logiciels',prod:'carnet'},
  admauto:{n:'ADM Auto',i:'🚗',c:'#C25E14',g:'logiciels',prod:'auto'},
  ecommerce:{n:'ADM E-commerce',i:'🧩',c:'#7A3FD1',g:'boutique'},
  boutique:{n:'Création de boutiques',i:'🛍️',c:'#7A3FD1',g:'boutique'},
  ugc:{n:'Vidéos UGC',i:'🎬',c:'#5b6788',g:'autres'},
  landing:{n:'Landing pages',i:'📄',c:'#5b6788',g:'autres'},
  autre:{n:'Autre',i:'•',c:'#5b6788',g:'autres'},
  global:{n:'Frais communs',i:'🧾',c:'#0d1b3e',g:'global'}
};
const INC_BIZ=['lcarnet','admauto','ecommerce','boutique','ugc','landing','autre'];
const SUB_BIZ=['global','sponsoring','lcarnet','admauto','ecommerce','boutique'];
const MOIS=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
const nf=new Intl.NumberFormat('fr-FR',{maximumFractionDigits:0}),nf2=new Intl.NumberFormat('fr-FR',{maximumFractionDigits:2});
const da=n=>nf.format(Math.round(n||0)).replace(/ | /g,' ')+' DA';
const usd=n=>nf2.format(n||0).replace(/ | /g,' ')+' $';
const ymNow=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')};
const today=()=>new Date().toISOString().slice(0,10);
const mLabel=k=>{const[y,m]=k.split('-').map(Number);return MOIS[m-1][0].toUpperCase()+MOIS[m-1].slice(1)+' '+y};
const addDays=(iso,n)=>{const[y,m,d]=iso.split('-').map(Number);return new Date(Date.UTC(y,m-1,d+n)).toISOString().slice(0,10)};
const frD=iso=>iso?iso.split('-').reverse().join('/'):'—';
let D=null,PER=ymNow(),TAB='bord',SQ='',SF='all';

async function q(t,sel='*',order){let r=sb.from(t).select(sel);if(order)r=r.order(order,{ascending:false});const{data,error}=await r.limit(20000);if(error)throw error;return data||[]}
async function loadAll(){
  const[sp,inc,subs,spend,set]=await Promise.all([q('fin_sponsos','*','debut'),q('fin_income','*','day'),q('fin_subs','*','start_date'),q('fin_spend','day,platform,campaign_id,campaign_name,business,spend_usd,updated_at'),q('fin_settings')]);
  const S={};set.forEach(x=>S[x.key]=x.value);
  D={sp,inc,subs,spend,S,rate:{USD:+S.usd_dzd||260,EUR:+S.eur_dzd||280,DZD:1},soft:{}};
  for(const p of PRODUCTS.filter(ready)){try{const d=await api('list',{},p);const c={active:0,trial:0,expired:0};d.rows.forEach(a=>{const s=state(a);if(c[s]!=null)c[s]++});D.soft[p.id]=c}catch(e){D.soft[p.id]=null}}
}
const toDA=(a,c)=>(+a||0)*(D.rate[c]||1);
function months(){
  if(/^\d{4}-\d{2}$/.test(PER))return[PER];
  const cur=ymNow();let from;
  if(/^\d{4}$/.test(PER))from=PER+'-01';
  else{const all=[...D.sp.map(r=>r.debut),...D.inc.map(r=>r.day),...D.subs.map(r=>r.start_date),...D.spend.map(r=>r.day)].filter(Boolean).sort();from=(all[0]||cur).slice(0,7)}
  const out=[];let[y,m]=from.split('-').map(Number);
  while(true){const k=y+'-'+String(m).padStart(2,'0');if(k>cur||(/^\d{4}$/.test(PER)&&!k.startsWith(PER)))break;out.push(k);m++;if(m>12){m=1;y++}}
  return out;
}
const inP=d=>!!d&&(PER==='all'||d.startsWith(PER));
function subMonth(s,k){const st=(s.start_date||'').slice(0,7),en=s.end_date?s.end_date.slice(0,7):null;
  if(s.period==='once')return st===k?toDA(s.amount,s.currency):0;
  if(k<st||(en&&k>en))return 0;
  if(s.period==='year')return st.slice(5)===k.slice(5)?toDA(s.amount,s.currency):0;
  return toDA(s.amount,s.currency)}
function calc(){
  const ms=months(),R={};const b=k=>R[k]||(R[k]={rev:0,pub:0,subs:0,promo:0,ctrl:0,n:0,due:0});
  D.sp.forEach(r=>{if(!inP(r.debut))return;const x=b('sponsoring');x.rev+=+r.prix||0;x.pub+=(+r.budget_usd||0)*(+r.taux||0);x.n++;x.due+=Math.max(0,(+r.prix||0)-(+r.montant_paye||0))});
  D.inc.forEach(r=>{if(!inP(r.day))return;b(r.business).rev+=toDA(r.amount,r.currency);b(r.business).n++});
  D.spend.forEach(r=>{if(!inP(r.day))return;const v=(+r.spend_usd||0)*D.rate.USD;
    if(r.business==='client')b('sponsoring').ctrl+=v;else if(r.business==='sponsoring')b('sponsoring').promo+=v;else b(r.business).pub+=v});
  D.subs.forEach(s=>{const v=ms.reduce((a,k)=>a+subMonth(s,k),0);if(v)b(s.business||'global').subs+=v});
  Object.values(R).forEach(x=>{x.cost=x.pub+x.subs+x.promo;x.net=x.rev-x.cost});
  return R;
}
const Z={rev:0,pub:0,subs:0,promo:0,ctrl:0,n:0,due:0,cost:0,net:0};
function sumG(R,keys){const o={...Z};keys.forEach(k=>{const x=R[k];if(x)for(const f in Z)o[f]+=x[f]||0});return o}
const keysOf=g=>Object.keys(BIZ).filter(k=>BIZ[k].g===g);

function css(){if(document.getElementById('fincss'))return;const st=document.createElement('style');st.id='fincss';st.textContent=`
.ftabs{display:flex;gap:4px;overflow-x:auto;border-bottom:1px solid var(--line);margin:4px 0 18px}
.ftabs button{border:0;background:none;padding:10px 14px;font-weight:700;color:var(--muted);border-bottom:3px solid transparent;cursor:pointer;white-space:nowrap}
.ftabs button[aria-selected=true]{color:var(--navy);border-bottom-color:var(--acc)}
.fhead{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:20px 0 6px}.fhead h1{margin:0;flex:1}
.fhead select{padding:9px 12px;border:1px solid var(--line);border-radius:10px;background:#fff;font-weight:600}
.big{display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:18px}
.bk{background:#fff;border:1px solid var(--line);border-radius:14px;padding:16px}.bk span{color:var(--muted);font-size:13px;font-weight:700}.bk b{display:block;font-size:24px;font-weight:800;margin-top:4px;font-variant-numeric:tabular-nums}
.bk.hero{background:linear-gradient(135deg,var(--navy),#16306e);color:#fff;border:0}.bk.hero span{color:#9db8e8}
.pos,.ln b.pos{color:var(--ok)}.neg,.ln b.neg{color:var(--bad)}.bk.hero .pos{color:#7ff0bd}.bk.hero .neg{color:#ff9a9f}
.grp{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:14px}
.gc{background:#fff;border:1px solid var(--line);border-radius:16px;padding:18px;border-top:5px solid var(--gc)}
.gc h3{margin:0 0 2px;font-size:18px;display:flex;gap:8px;align-items:center}.gc .sub{color:var(--muted);font-size:13px;margin-bottom:12px}
.ln{display:flex;justify-content:space-between;gap:10px;padding:5px 0;font-size:14px;color:var(--muted)}.ln b{color:var(--ink);font-variant-numeric:tabular-nums}
.ln.tot{border-top:1px solid var(--line);margin-top:6px;padding-top:9px;font-weight:800;color:var(--ink)}
.sl{background:var(--bg);border-radius:10px;padding:10px 12px;margin-top:10px}.sl .t{font-weight:800;font-size:14px;display:flex;justify-content:space-between}
.oth{background:#fff;border:1px solid var(--line);border-radius:12px;padding:12px 16px;display:flex;gap:18px;flex-wrap:wrap;align-items:center;font-size:14px;color:var(--muted);margin-bottom:24px}.oth b{color:var(--ink)}
.tw{overflow-x:auto;background:#fff;border:1px solid var(--line);border-radius:14px;margin-bottom:30px}
.tw table{border-collapse:collapse;width:100%;min-width:760px;font-size:14px}.tw th,.tw td{padding:9px 12px;border-bottom:1px solid var(--line);text-align:left;white-space:nowrap}
.tw th{background:#f6f8fc;color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.05em}.tw td.r,.tw th.r{text-align:right}.tw tr.cl{cursor:pointer}.tw tr.cl:hover{background:#f6f8fc}
.chipb{border:1px solid var(--line);background:#fff;border-radius:999px;padding:6px 12px;font-weight:700;font-size:13px;cursor:pointer}.chipb[aria-pressed=true]{background:var(--navy);color:#fff;border-color:var(--navy)}
.fg{display:grid;grid-template-columns:1fr 1fr;gap:0 12px}.fg .w{grid-column:1/-1}
.mini{font-size:12px;color:var(--muted)}
.pay{display:inline-block;border-radius:999px;padding:2px 9px;font-size:12px;font-weight:700}.pay.oui{background:var(--ok-s);color:var(--ok)}.pay.non{background:var(--bad-s);color:var(--bad)}.pay.partiel{background:var(--warn-s);color:var(--warn)}
@media(max-width:900px){.big{grid-template-columns:repeat(2,1fr)}.grp{grid-template-columns:1fr}}
@media(max-width:480px){.big{grid-template-columns:1fr 1fr}.bk b{font-size:19px}.fg{grid-template-columns:1fr}}`;document.head.appendChild(st)}

function periods(){
  const ks=new Set([ymNow()]);[...D.sp.map(r=>r.debut),...D.inc.map(r=>r.day),...D.spend.map(r=>r.day)].forEach(d=>d&&ks.add(d.slice(0,7)));
  const L=[...ks].sort().reverse(),years=[...new Set(L.map(k=>k.slice(0,4)))];
  return `<option value="all"${PER==='all'?' selected':''}>Tout l'historique</option>`+years.map(y=>`<optgroup label="${y}"><option value="${y}"${PER===y?' selected':''}>Année ${y}</option>${L.filter(k=>k.startsWith(y)).map(k=>`<option value="${k}"${PER===k?' selected':''}>${mLabel(k)}</option>`).join('')}</optgroup>`).join('');
}
const sg=v=>`<b class="${v<0?'neg':'pos'}">${da(v)}</b>`;
const ln=(l,v,cls='')=>`<div class="ln ${cls}"><span>${l}</span><b>${v}</b></div>`;

async function show(){
  VIEW='fin';$('#bSet').hidden=true;$('#bBack').hidden=true;$('#bOut').hidden=false;$('#crumb').textContent='Finances';css();
  if(!D){app.innerHTML='<p style="padding:40px;text-align:center;color:var(--muted)">Chargement des finances…</p>';
    try{await loadAll()}catch(e){app.innerHTML=`<div class="err" style="margin:30px 0">Erreur : ${esc(e.message||e)} <button class="btn sm" id="fre">Réessayer</button></div>`;$('#fre').onclick=()=>{D=null;show()};return}}
  draw();
}
function draw(){
  const tabs=[['bord','Vue d’ensemble'],['sponsos','Sponsos'],['enc','Encaissements'],['abos','Abonnements'],['pub','Pub (auto)'],['reg','Réglages']];
  app.innerHTML=`<div class="fhead"><h1>Finances ADM Digital</h1><select id="fper">${periods()}</select><button class="btn" id="frl">↻</button></div>
  <nav class="ftabs">${tabs.map(([k,l])=>`<button data-t="${k}" aria-selected="${TAB===k}">${l}</button>`).join('')}</nav><div id="fv"></div>`;
  $('#fper').onchange=e=>{PER=e.target.value;draw()};$('#frl').onclick=async()=>{D=null;await show();toast('Données à jour')};
  app.querySelectorAll('.ftabs button').forEach(b=>b.onclick=()=>{TAB=b.dataset.t;draw()});
  ({bord,sponsos,enc,abos,pub,reg})[TAB]();
}
function bord(){
  const R=calc(),all=sumG(R,Object.keys(BIZ));
  const S=R.sponsoring||{...Z},L=sumG(R,keysOf('logiciels')),B=sumG(R,keysOf('boutique')),A=sumG(R,keysOf('autres')),G=R.global||{...Z};
  const due=D.sp.filter(r=>r.debut>=addDays(today(),-365)).reduce((a,r)=>a+Math.max(0,(+r.prix||0)-(+r.montant_paye||0)),0);
  const soft=k=>{const c=D.soft[BIZ[k].prod];return c?`<span class="mini">${c.active} abonné${c.active>1?'s':''} · ${c.trial} en essai</span>`:''};
  const sl=k=>{const x=R[k]||{...Z};return `<div class="sl"><div class="t"><span>${BIZ[k].i} ${BIZ[k].n}</span>${sg(x.net)}</div>${soft(k)}
    ${ln('Revenus',da(x.rev))}${ln('Pub (auto)',da(x.pub))}${x.subs?ln('Abonnements',da(x.subs)):''}</div>`};
  $('#fv').innerHTML=`<div class="big">
   <div class="bk hero"><span>Bénéfice net</span>${sg(all.net)}</div>
   <div class="bk"><span>Revenus</span><b>${da(all.rev)}</b></div>
   <div class="bk"><span>Frais</span><b>${da(all.cost)}</b></div>
   <div class="bk"><span>À encaisser (sponsoring, 12 mois)</span><b style="color:var(--warn)">${da(due)}</b></div></div>
  <div class="grp">
   <div class="gc" style="--gc:${BIZ.sponsoring.c}"><h3>📣 Sponsoring</h3><div class="sub">${S.n} sponso${S.n>1?'s':''} sur la période</div>
    ${ln('Chiffre d’affaires',da(S.rev))}${ln('Budget pub clients',da(S.pub))}${S.promo?ln('Pub ADM Digital (auto)',da(S.promo)):''}${S.subs?ln('Abonnements',da(S.subs)):''}
    <div class="ln tot"><span>Bénéfice</span>${sg(S.net)}</div>${S.ctrl?`<div class="mini" style="margin-top:6px">Contrôle : dépense Meta réelle des campagnes clients ${da(S.ctrl)}</div>`:''}</div>
   <div class="gc" style="--gc:#0F6E4F"><h3>💻 Logiciels</h3><div class="sub">L’Carnet · ADM Auto</div>
    ${ln('Revenus',da(L.rev))}${ln('Frais',da(L.cost))}<div class="ln tot"><span>Bénéfice</span>${sg(L.net)}</div>${sl('lcarnet')}${sl('admauto')}</div>
   <div class="gc" style="--gc:${BIZ.boutique.c}"><h3>🛍️ Boutique en ligne</h3><div class="sub">Création de boutiques · ADM E-commerce</div>
    ${ln('Revenus',da(B.rev))}${ln('Frais',da(B.cost))}<div class="ln tot"><span>Bénéfice</span>${sg(B.net)}</div>${sl('boutique')}${sl('ecommerce')}</div></div>
  <div class="oth"><b>Autres services</b><span>🎬 UGC ${da((R.ugc||Z).rev)}</span><span>📄 Landing ${da((R.landing||Z).rev)}</span><span>• Autre ${da((R.autre||Z).rev)}</span><span style="margin-left:auto">Bénéfice ${sg(A.net)}</span></div>
  <div class="oth"><b>🧾 Frais communs</b><span>Abonnements (Supabase, Vercel, outils…) ${da(G.subs)}</span><span class="mini">Taux : 1 $ = ${D.rate.USD} DA</span>
   <span style="margin-left:auto">${D.spend.length?'Pub mise à jour '+ago(D.spend.reduce((a,r)=>r.updated_at>a?r.updated_at:a,'')):'Pub : pas encore importée'}</span></div>`;
}
/* ---------- sponsos ---------- */
function sponsos(){
  let rs=D.sp.filter(r=>inP(r.debut));const k=s=>String(s||'').toLowerCase();
  if(SF==='non')rs=rs.filter(r=>(+r.prix||0)>(+r.montant_paye||0));if(SF==='run')rs=rs.filter(r=>r.jours&&addDays(r.debut,r.jours)>today());
  if(SQ)rs=rs.filter(r=>k([r.client,r.page,r.campagne,r.note].join(' ')).includes(k(SQ)));
  const t=rs.reduce((a,r)=>(a.p+=+r.prix||0,a.c+=(+r.budget_usd||0)*(+r.taux||0),a),{p:0,c:0});
  $('#fv').innerHTML=`<div class="bar"><input id="fsq" placeholder="Chercher un client, une page…" value="${esc(SQ)}">
   ${[['all','Tous'],['run','En cours'],['non','Non payés']].map(([v,l])=>`<button class="chipb" data-f="${v}" aria-pressed="${SF===v}">${l}</button>`).join('')}<button class="btn p" id="fadd">+ Nouveau sponso</button></div>
   <div class="tw"><table><thead><tr><th>Début</th><th>Client</th><th class="r">Jours</th><th class="r">$/jour</th><th class="r">Budget</th><th class="r">Coût</th><th class="r">Prix</th><th class="r">Bénéfice</th><th>Paiement</th></tr></thead><tbody>
   ${rs.slice(0,400).map(r=>{const c=(+r.budget_usd||0)*(+r.taux||0),b=(+r.prix||0)-c;return `<tr class="cl" data-id="${esc(r.id)}"><td>${frD(r.debut)}</td><td><b>${esc(r.client)}</b><div class="mini">${esc([r.page,r.campagne].filter(Boolean).join(' · '))}</div></td><td class="r">${r.jours??'—'}</td><td class="r">${r.usd_jour!=null?nf2.format(r.usd_jour):'—'}</td><td class="r">${usd(r.budget_usd)}</td><td class="r">${da(c)}</td><td class="r">${da(r.prix)}</td><td class="r">${sg(b)}</td><td><span class="pay ${r.paye}">${r.paye==='oui'?'Payé':r.paye==='partiel'?'Avance '+nf.format(r.montant_paye):'Non payé'}</span></td></tr>`}).join('')||'<tr><td colspan="9" style="text-align:center;color:var(--muted);padding:30px">Aucun sponso sur cette période.</td></tr>'}
   </tbody></table></div><p class="mini" style="margin-top:-20px">${rs.length} sponso${rs.length>1?'s':''} · CA ${da(t.p)} · bénéfice ${da(t.p-t.c)}</p>`;
  $('#fsq').oninput=e=>{SQ=e.target.value;const p=e.target.selectionStart;sponsos();const i=$('#fsq');i.focus();i.setSelectionRange(p,p)};
  app.querySelectorAll('[data-f]').forEach(b=>b.onclick=()=>{SF=b.dataset.f;sponsos()});
  $('#fadd').onclick=()=>spForm(null);app.querySelectorAll('tr[data-id]').forEach(tr=>tr.onclick=()=>spForm(D.sp.find(r=>r.id===tr.dataset.id)));
}
function spForm(r){
  const v=r||{client:'',page:'',campagne:'',compte:'Mhd 1',plateforme:'Facebook',debut:today(),jours:'',usd_jour:'',taux:D.S.usd_dzd||255,prix:'',paye:'non',montant_paye:'',note:''};
  const m=modal(`<h3>${r?'Modifier le sponso':'Nouveau sponso'}</h3><form id="spf"><div class="fg">
   <div><label>Client</label><input class="in" name="client" required value="${esc(v.client)}"></div><div><label>Page</label><input class="in" name="page" value="${esc(v.page||'')}"></div>
   <div class="w"><label>Campagne</label><input class="in" name="campagne" value="${esc(v.campagne||'')}"></div>
   <div><label>Plateforme</label><select class="in" name="plateforme">${['Facebook','Instagram','Facebook + Instagram','TikTok','Google','Autre'].map(o=>`<option${o===v.plateforme?' selected':''}>${o}</option>`).join('')}</select></div>
   <div><label>Début</label><input class="in" type="date" name="debut" required value="${v.debut}"></div>
   <div><label>Jours</label><input class="in" type="number" min="1" name="jours" value="${v.jours??''}"></div><div><label>$ par jour</label><input class="in" type="number" step="0.01" name="usd_jour" value="${v.usd_jour??''}"></div>
   <div><label>Taux (DA/$)</label><input class="in" type="number" step="0.5" name="taux" value="${v.taux}"></div><div><label>Prix client (DA)</label><input class="in" type="number" name="prix" value="${v.prix??''}"></div>
   <div><label>Paiement</label><select class="in" name="paye">${[['non','Non payé'],['partiel','Avance'],['oui','Payé']].map(([a,l])=>`<option value="${a}"${a===v.paye?' selected':''}>${l}</option>`).join('')}</select></div>
   <div><label>Montant reçu (DA)</label><input class="in" type="number" name="montant_paye" value="${v.paye==='partiel'?v.montant_paye:''}"></div>
   <div class="w"><label>Note</label><input class="in" name="note" value="${esc(v.note||'')}"></div></div>
   <div class="row">${r?'<button type="button" class="btn d" id="spdel">Supprimer</button><span class="sp"></span>':''}<button type="button" class="btn" data-x>Annuler</button><button class="btn p">Enregistrer</button></div></form>`);
  const f=$('#spf');f.onsubmit=async e=>{e.preventDefault();const o=Object.fromEntries(new FormData(f));
    const j=+o.jours||null,u=+o.usd_jour||0,prix=+o.prix||0;
    const row={client:o.client.trim(),page:o.page||null,campagne:o.campagne||null,plateforme:o.plateforme,debut:o.debut,jours:j,usd_jour:u,budget_usd:+(u*(j||0)).toFixed(2),taux:+o.taux||255,prix,paye:o.paye,
      montant_paye:o.paye==='oui'?prix:o.paye==='partiel'?(+o.montant_paye||0):0,note:o.note||null,updated_at:new Date().toISOString()};
    const res=r?await sb.from('fin_sponsos').update(row).eq('id',r.id):await sb.from('fin_sponsos').insert({id:'a'+Date.now().toString(36),compte:'Mhd 1',lance_par:'Mohamed',src:'admin',...row});
    if(res.error)return toast('Erreur : '+res.error.message);m.remove();D=null;await show();toast(r?'Sponso modifié':'Sponso ajouté')};
  if(r)$('#spdel').onclick=async e=>{if(!e.target.dataset.a){e.target.dataset.a=1;e.target.textContent='Confirmer la suppression';return}
    const{error}=await sb.from('fin_sponsos').delete().eq('id',r.id);if(error)return toast('Erreur : '+error.message);m.remove();D=null;await show();toast('Sponso supprimé')};
}
/* ---------- encaissements ---------- */
function enc(){
  const rs=D.inc.filter(r=>inP(r.day));
  $('#fv').innerHTML=`<div class="bar"><span class="mini" style="flex:1">Paiements reçus pour les logiciels, la boutique en ligne et les autres services. Les sponsos se gèrent dans l’onglet Sponsos.</span><button class="btn p" id="iadd">+ Encaissement</button></div>
  <div class="tw"><table><thead><tr><th>Date</th><th>Activité</th><th>Client</th><th class="r">Montant</th><th>Note</th></tr></thead><tbody>
  ${rs.map(r=>`<tr class="cl" data-id="${r.id}"><td>${frD(r.day)}</td><td>${BIZ[r.business]?.i||''} ${esc(BIZ[r.business]?.n||r.business)}</td><td>${esc(r.client||'')}</td><td class="r"><b>${r.currency==='DZD'?da(r.amount):nf2.format(r.amount)+' '+r.currency}</b></td><td class="mini">${esc(r.note||'')}</td></tr>`).join('')||'<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:30px">Aucun encaissement sur cette période.</td></tr>'}</tbody></table></div>`;
  $('#iadd').onclick=()=>incForm(null);app.querySelectorAll('tr[data-id]').forEach(tr=>tr.onclick=()=>incForm(D.inc.find(r=>r.id===tr.dataset.id)));
}
function incForm(r){const v=r||{day:today(),business:'lcarnet',client:'',amount:'',currency:'DZD',note:''};
  const m=modal(`<h3>${r?'Modifier':'Nouvel'} encaissement</h3><form id="inf"><div class="fg">
  <div><label>Date</label><input class="in" type="date" name="day" required value="${v.day}"></div>
  <div><label>Activité</label><select class="in" name="business">${INC_BIZ.map(k=>`<option value="${k}"${k===v.business?' selected':''}>${BIZ[k].i} ${BIZ[k].n}</option>`).join('')}</select></div>
  <div class="w"><label>Client</label><input class="in" name="client" value="${esc(v.client||'')}"></div>
  <div><label>Montant</label><input class="in" type="number" step="0.01" name="amount" required value="${v.amount}"></div>
  <div><label>Devise</label><select class="in" name="currency">${['DZD','USD','EUR'].map(c=>`<option${c===v.currency?' selected':''}>${c}</option>`).join('')}</select></div>
  <div class="w"><label>Note</label><input class="in" name="note" value="${esc(v.note||'')}"></div></div>
  <div class="row">${r?'<button type="button" class="btn d" id="indel">Supprimer</button><span class="sp"></span>':''}<button type="button" class="btn" data-x>Annuler</button><button class="btn p">Enregistrer</button></div></form>`);
  const f=$('#inf');f.onsubmit=async e=>{e.preventDefault();const o=Object.fromEntries(new FormData(f));o.amount=+o.amount;
    const res=r?await sb.from('fin_income').update(o).eq('id',r.id):await sb.from('fin_income').insert(o);if(res.error)return toast('Erreur : '+res.error.message);m.remove();D=null;await show();toast('Enregistré')};
  if(r)$('#indel').onclick=async e=>{if(!e.target.dataset.a){e.target.dataset.a=1;e.target.textContent='Confirmer la suppression';return}
    const{error}=await sb.from('fin_income').delete().eq('id',r.id);if(error)return toast('Erreur : '+error.message);m.remove();D=null;await show()}}
/* ---------- abonnements ---------- */
function abos(){
  const act=s=>!s.end_date||s.end_date>=today();const per={month:'/ mois',year:'/ an',once:'une fois'};
  const monthly=D.subs.filter(act).reduce((a,s)=>a+(s.period==='month'?toDA(s.amount,s.currency):s.period==='year'?toDA(s.amount,s.currency)/12:0),0);
  $('#fv').innerHTML=`<div class="bar"><span style="flex:1"><b>${da(monthly)}</b> <span class="mini">par mois en abonnements actifs (Supabase, Vercel, Voice213, domaine…). Ils sont comptés chaque mois automatiquement.</span></span><button class="btn p" id="sadd">+ Abonnement</button></div>
  <div class="tw"><table><thead><tr><th>Nom</th><th>Activité</th><th class="r">Montant</th><th>Depuis</th><th>Statut</th></tr></thead><tbody>
  ${D.subs.map(s=>`<tr class="cl" data-id="${s.id}"><td><b>${esc(s.name)}</b><div class="mini">${esc(s.note||'')}</div></td><td>${BIZ[s.business]?.n||s.business}</td><td class="r">${nf2.format(s.amount)} ${s.currency} ${per[s.period]}</td><td>${frD(s.start_date)}</td><td>${act(s)?'<span class="pay oui">Actif</span>':'<span class="pay non">Arrêté le '+frD(s.end_date)+'</span>'}</td></tr>`).join('')||'<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:30px">Aucun abonnement. Ajoute Supabase, Vercel, Voice213… avec « + Abonnement ».</td></tr>'}</tbody></table></div>`;
  $('#sadd').onclick=()=>subForm(null);app.querySelectorAll('tr[data-id]').forEach(tr=>tr.onclick=()=>subForm(D.subs.find(r=>r.id===tr.dataset.id)));
}
function subForm(r){const v=r||{name:'',business:'global',amount:'',currency:'USD',period:'month',start_date:today(),end_date:'',note:''};
  const m=modal(`<h3>${r?'Modifier':'Nouvel'} abonnement</h3><form id="suf"><div class="fg">
  <div class="w"><label>Nom</label><input class="in" name="name" required placeholder="Supabase Pro, Vercel, Voice213…" value="${esc(v.name)}"></div>
  <div><label>Activité</label><select class="in" name="business">${SUB_BIZ.map(k=>`<option value="${k}"${k===v.business?' selected':''}>${BIZ[k].n}</option>`).join('')}</select></div>
  <div><label>Fréquence</label><select class="in" name="period">${[['month','Mensuel'],['year','Annuel'],['once','Paiement unique']].map(([a,l])=>`<option value="${a}"${a===v.period?' selected':''}>${l}</option>`).join('')}</select></div>
  <div><label>Montant</label><input class="in" type="number" step="0.01" name="amount" required value="${v.amount}"></div>
  <div><label>Devise</label><select class="in" name="currency">${['USD','DZD','EUR'].map(c=>`<option${c===v.currency?' selected':''}>${c}</option>`).join('')}</select></div>
  <div><label>Début</label><input class="in" type="date" name="start_date" required value="${v.start_date}"></div>
  <div><label>Fin (si arrêté)</label><input class="in" type="date" name="end_date" value="${v.end_date||''}"></div>
  <div class="w"><label>Note</label><input class="in" name="note" value="${esc(v.note||'')}"></div></div>
  <div class="row">${r?'<button type="button" class="btn d" id="sudel">Supprimer</button><span class="sp"></span>':''}<button type="button" class="btn" data-x>Annuler</button><button class="btn p">Enregistrer</button></div></form>`);
  const f=$('#suf');f.onsubmit=async e=>{e.preventDefault();const o=Object.fromEntries(new FormData(f));o.amount=+o.amount;o.end_date=o.end_date||null;
    const res=r?await sb.from('fin_subs').update(o).eq('id',r.id):await sb.from('fin_subs').insert(o);if(res.error)return toast('Erreur : '+res.error.message);m.remove();D=null;await show();toast('Enregistré')};
  if(r)$('#sudel').onclick=async e=>{if(!e.target.dataset.a){e.target.dataset.a=1;e.target.textContent='Confirmer la suppression';return}
    const{error}=await sb.from('fin_subs').delete().eq('id',r.id);if(error)return toast('Erreur : '+error.message);m.remove();D=null;await show()}}
/* ---------- pub (import auto) ---------- */
const PB={client:'Sponsoring · client',sponsoring:'Pub ADM Digital',lcarnet:'L’Carnet',admauto:'ADM Auto',ecommerce:'ADM E-commerce',boutique:'Boutique en ligne',autre:'Autre'};
function pub(){
  const g={};D.spend.filter(r=>inP(r.day)).forEach(r=>{const k=r.platform+'|'+r.campaign_id;const x=g[k]||(g[k]={...r,usd:0,d1:r.day,d2:r.day});x.usd+=+r.spend_usd||0;if(r.day<x.d1)x.d1=r.day;if(r.day>x.d2)x.d2=r.day});
  const L=Object.values(g).sort((a,b)=>b.usd-a.usd);
  $('#fv').innerHTML=`<p class="mini" style="margin:0 0 12px">Dépenses récupérées automatiquement chaque jour (Meta « Mhd 1 » et TikTok « vvv »). Change l’activité d’une campagne si elle est mal rangée : les prochains imports suivront.</p>
  <div class="tw"><table><thead><tr><th>Campagne</th><th>Plateforme</th><th>Période</th><th class="r">Dépense</th><th class="r">En DA</th><th>Activité</th></tr></thead><tbody>
  ${L.map(x=>`<tr><td><b>${esc(x.campaign_name||x.campaign_id)}</b></td><td>${esc(x.platform)}</td><td class="mini">${frD(x.d1)} → ${frD(x.d2)}</td><td class="r">${usd(x.usd)}</td><td class="r">${da(x.usd*D.rate.USD)}</td>
   <td><select class="in" style="padding:5px 8px" data-c="${esc(x.campaign_id)}" data-pf="${esc(x.platform)}">${Object.entries(PB).map(([k,l])=>`<option value="${k}"${k===x.business?' selected':''}>${l}</option>`).join('')}</select></td></tr>`).join('')||'<tr><td colspan="6" style="text-align:center;color:var(--muted);padding:30px">Aucune dépense importée sur cette période.</td></tr>'}</tbody></table></div>`;
  app.querySelectorAll('select[data-c]').forEach(s=>s.onchange=async()=>{const c=s.dataset.c,b=s.value;
    const r1=await sb.from('fin_spend').update({business:b}).eq('campaign_id',c).eq('platform',s.dataset.pf);
    const r2=await sb.from('fin_rules').insert({pattern:'id:'+c,business:b});
    if(r1.error||r2.error)return toast('Erreur : '+(r1.error||r2.error).message);D.spend.forEach(r=>{if(r.campaign_id===c)r.business=b});toast('Campagne rangée dans « '+PB[b]+' »')});
}
/* ---------- réglages ---------- */
function reg(){
  $('#fv').innerHTML=`<div class="bk" style="max-width:520px"><form id="rgf"><label>Taux du dollar (DA pour 1 $)</label><input class="in" type="number" step="0.5" name="usd_dzd" value="${esc(D.S.usd_dzd||'')}">
   <label>Taux de l’euro (DA pour 1 €)</label><input class="in" type="number" step="0.5" name="eur_dzd" value="${esc(D.S.eur_dzd||'')}">
   <p class="mini">Le taux sert à convertir la pub et les abonnements en dinars. Chaque sponso garde son propre taux.</p><div class="row"><button class="btn p">Enregistrer</button></div></form></div>`;
  $('#rgf').onsubmit=async e=>{e.preventDefault();const o=Object.fromEntries(new FormData(e.target));
    const{error}=await sb.from('fin_settings').upsert(Object.entries(o).map(([key,value])=>({key,value:String(value)})));if(error)return toast('Erreur : '+error.message);D=null;await show();toast('Réglages enregistrés')};
}
window.FIN={show};
})();
