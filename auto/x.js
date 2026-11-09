/* Source d'inscription (1re visite) */(function(){try{if(localStorage.getItem('adm_src'))return;var q=new URLSearchParams(location.search),o={},k=['utm_source','utm_medium','utm_campaign','utm_term','utm_content','ad_id','placement'];k.forEach(function(x){var v=q.get(x);if(v)o[x]=v.slice(0,120)});if(q.get('fbclid'))o.fbclid=1;if(q.get('ttclid'))o.ttclid=1;var r=document.referrer;if(r&&r.indexOf(location.host)<0)o.ref=r.slice(0,120);o.ua=/FBAN|FBAV|FB_IAB|Instagram/i.test(navigator.userAgent)?'fb':/BytedanceWebview|musical_ly|TikTok|trill/i.test(navigator.userAgent)?'tiktok':'';o.t=new Date().toISOString();localStorage.setItem('adm_src',JSON.stringify(o))}catch(e){}})();
/* ADM Auto — extensions : contrat imprimable (PDF / impression), champs supplémentaires */
(function(){
document.title='ADM Auto — كراء السيارات';
const AG=()=>{S.ag=S.ag||{name:'',tel1:'',tel2:'',logo:''};return S.ag};
/* Marque */
const CAR='<g fill="#C25E14"><path d="M10 60 L30 25 Q36 15 50 15 H110 Q124 15 132 25 L150 50 Q170 52 170 68 V80 H0 V70 Q0 60 10 60Z"/><path d="M45 25 H75 V48 H33Z M85 25 H112 L128 48 H85Z" fill="#14202C"/><circle cx="38" cy="82" r="17" fill="#14202C"/><circle cx="38" cy="82" r="8" fill="#fff"/><circle cx="132" cy="82" r="17" fill="#14202C"/><circle cx="132" cy="82" r="8" fill="#fff"/></g>';
let LOGO_PNG='',LOGO_FOR=null;
const xe=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function makeLogo(name){name=(name||'كراء السيارات').trim();if(LOGO_FOR===name)return;LOGO_FOR=name;
  const fs=Math.max(26,Math.min(54,Math.floor(760/Math.max(6,name.length))));
  const svg='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200" width="600" height="200"><rect width="600" height="200" rx="28" fill="#14202C"/><g transform="translate(400,48)"><rect x="-6" y="-8" width="182" height="120" rx="16" fill="#fff"/>'+CAR+'</g><text x="370" y="'+(100+fs/3)+'" direction="rtl" text-anchor="start" font-family="Tahoma,Arial,sans-serif" font-weight="700" font-size="'+fs+'" fill="#fff">'+xe(name)+'</text><text x="370" y="168" direction="rtl" text-anchor="start" font-family="Tahoma,Arial,sans-serif" font-weight="700" font-size="22" fill="#F0A060">كراء السيارات</text></svg>';
  LOGO_PNG='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svg);
  const im=new Image();im.onload=()=>{try{const c=document.createElement('canvas');c.width=1200;c.height=400;c.getContext('2d').drawImage(im,0,0,1200,400);if(LOGO_FOR===name)LOGO_PNG=c.toDataURL('image/png')}catch(e){}};im.src=LOGO_PNG}
function applyBrand(){const n=(S.ag&&S.ag.name)||'';makeLogo(n);
  document.title=(n?n+' — ':'')+'ADM Auto';
  const b=document.querySelector('.brand b');if(b)b.innerHTML='<svg viewBox="0 0 172 100" width="40" height="24" style="vertical-align:-3px;margin-inline-end:6px" aria-hidden="true">'+CAR+'</svg>'+(n?xe(n):'ADM <i>Auto</i>');
  const sp=document.querySelector('.brand span');if(sp)sp.textContent='ADM Auto · برنامج تسيير كراء السيارات'}
(function(){const ic=document.createElement('link');ic.rel='icon';ic.href='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="-6 -10 184 112"><rect x="-6" y="-10" width="184" height="112" rx="20" fill="#14202C"/>'+CAR+'</svg>');document.head.appendChild(ic)})();
const st=document.createElement('style');
st.textContent=`
.ct{background:#fff;color:#111;width:100%;max-width:794px;margin:0 auto;padding:28px 34px;font-family:'Cairo',Tahoma,sans-serif;direction:rtl;font-size:14px;line-height:1.6;box-shadow:0 2px 12px rgba(0,0,0,.12);border:1px solid #ddd}
.ct .hd{display:flex;justify-content:space-between;align-items:flex-start;gap:16px}
.ct .hd .t1{font-size:22px;font-weight:700}.ct .hd .t2{font-size:18px;font-weight:700}
.ct .tels{direction:ltr;font-weight:700;font-size:16px;text-align:left;white-space:nowrap}
.ct .logo{text-align:center;margin-bottom:8px}.ct .logo img{max-height:95px;max-width:60%}
.ct table{width:100%;border-collapse:collapse;margin:6px 0;font-size:14px}
.ct td,.ct th{border:1.5px solid #222;padding:8px 10px;text-align:start;white-space:normal;vertical-align:top;background:#fff!important;color:#111}
.ct th{font-weight:700;background:#f2f2f2!important;font-size:14px}
.ct td b{font-weight:700;margin-inline-end:6px}
.ct .v{font-weight:600}
.ct .sec{text-align:center;font-weight:700;text-decoration:underline;margin-top:12px}
.ct .cond{border:1.5px solid #222;padding:10px 14px;font-weight:600}
.ct .cond p{margin:0 0 8px}
.ct .sig{display:flex;justify-content:space-between;margin-top:14px;font-weight:700;min-height:90px}
.ct .meta{display:flex;justify-content:space-between;font-size:12px;color:#555;margin-top:6px}
.ltrv{direction:ltr;unicode-bidi:isolate;display:inline-block}
@media screen and (max-width:700px){.ct{padding:16px 12px;font-size:12px}.ct td,.ct th{padding:5px 6px;font-size:12px}.ct .hd .t1{font-size:17px}.ct .hd .t2{font-size:15px}.ct .tels{font-size:13px}}
.ct.pdf{box-shadow:none;border:0;max-width:none;width:794px;padding:36px 40px;font-size:14px}
.ct.pdf td,.ct.pdf th{padding:8px 10px;font-size:14px}.ct.pdf .hd .t1{font-size:22px}.ct.pdf .hd .t2{font-size:18px}.ct.pdf .tels{font-size:16px}
`;
document.head.appendChild(st);

const APP=(()=>{try{return !!(window.LocaParcApp&&LocaParcApp.isApp())}catch(e){return false}})();
const dd=s=>{if(!s)return '';const [y,m,d]=s.split('-');return `<span class="ltrv">${d}/${m}/${y}</span>`};
const L=v=>`<span class="ltrv">${esc(v||'')}</span>`;
function contractHTML(k){
  const c=car(k.carId),p=cli(k.clientId),a=AG(),j=nbJ(k.debut,k.fin);makeLogo(a.name);
  const prenom=p.lnom?p.prenom:p.nom, lnom=p.lnom||'';
  return `<div class="ct" id="ctDoc">
  <div class="logo"><img src="${a.logo||LOGO_PNG}" alt=""></div>
  <div class="hd"><div><div class="t1">${esc(a.name||'كراء السيارات')}</div><div class="t2">عقد تأجير السيارات</div></div>
  <div class="tels">${esc(a.tel1||'')}${a.tel2?'<br>'+esc(a.tel2):''}</div></div>
  <div class="meta"><span>رقم العقد: ${L(k.num)}</span><span>تاريخ التحرير: ${dd(TODAY)}</span></div>
  <table>
   <tr><td><b>الإسم :</b><span class="v">${esc(prenom)}</span></td><td><b>اللقب:</b><span class="v">${esc(lnom)}</span></td></tr>
   <tr><td><b>تاريخ ومكان الازدياد:</b><span class="v">${dd(p.dob)}</span></td><td><b>ب:</b><span class="v">${esc(p.pob||'')}</span></td></tr>
   <tr><td><b>رخصة السياقة رقم :</b><span class="v">${L(p.permis)}</span></td><td><b>سلمت بتاريخ :</b><span class="v">${dd(p.permisDate)}</span></td></tr>
   <tr><td><b>الساكن:</b><span class="v">${esc(p.adresse||'')}</span></td><td><b>رقم الهاتف:</b><span class="v">${L(p.tel)}</span></td></tr>
  </table>
  <div class="sec">بيانات المركبة</div>
  <table><tr><th>الصنف</th><th>الطراز</th><th>الرقم التسلسلي في الطراز</th><th>رقم التسجيل</th></tr>
   <tr><td class="v">${L(c.marque)}</td><td class="v">${L(c.modele)}</td><td class="v">${L(c.vin||'')}</td><td class="v">${L(c.plaque)}</td></tr></table>
  <table>
   <tr><td><b>اجرة يوم :</b><span class="v">${dd(k.debut)}</span></td><td><b>على الساعة:</b><span class="v">${L(k.heure||'')}</span></td></tr>
   <tr><td><b>الى غاية :</b><span class="v">${dd(k.fin)}</span></td><td><b>على الساعة:</b><span class="v">${L(k.heureFin||k.heure||'')}</span></td></tr>
   <tr><td><b>بمبلغ قدره :</b><span class="v">${money(totalK(k))}</span> <small>(${j} يوم × ${money(k.prix)})</small></td><td><b>رقم العداد:</b><span class="v">${L(fmtN(k.kmDepart||0))}</span></td></tr>
   <tr><td><b>التسبيق:</b><span class="v">${money(k.acompte||0)}</span></td><td><b>الضمان:</b><span class="v">${money(k.caution||0)}</span></td></tr>
  </table>
  <div class="sec">الشروط العامة</div>
  <div class="cond">
   <p>يجب على المستأجر ان يقوم بمعاينة السيارة فور استلامها والتأكد من خلوها من الاضرار الخارجية</p>
   <p>السيارة المسموح لها السير لمسافة ${k.kmJour||RULES.kmJour} كلم في 24 ساعة في اليوم وكل تجاوز لهذه المسافة ستكون هناك زيادة تقدر ب ${RULES.prixKm} دينار للكلم الواحد</p>
   <p>يجب على المستأجر إعادة السيارة بالحالة التي كانت عليها عند الاستلام</p>
   <p>ليس مسموح للمستأجر ان يأجر السيارة للغير او السماح بقيادتها</p>
   <p>في حالة تواجد السيارة خارج الجزائر دون وكالة وإذن مسبق من المؤجر فهي تعتبر مسروقة</p>
  </div>
  ${(k.dmgDepart||[]).length?`<p style="margin:6px 0 0;font-size:13px"><b>أضرار موجودة عند الاستلام:</b> ${k.dmgDepart.map(esc).join('، ')}</p>`:''}
  <p style="text-align:center;font-weight:700;margin:12px 0 0">انا الممضي أسفله وبعد إطلاعي على الشروط لوكالة السيارات أتحمل كامل مسؤوليتي</p>
  <div class="sig"><span>إمضاء المؤجر</span><span>إمضاء المستأجر</span></div>
  </div>`;
}

function shrink(src,cb){const im=new Image();im.onload=()=>{const s=Math.min(1,600/im.width),c=document.createElement('canvas');c.width=Math.round(im.width*s);c.height=Math.round(im.height*s);c.getContext('2d').drawImage(im,0,0,c.width,c.height);cb(c.toDataURL('image/jpeg',.85))};im.onerror=()=>cb(src);im.src=src}

function mPrint(id){
  const k=S.contracts.find(x=>x.id===id),a=AG();
  openModal('📄 عقد التأجير — جاهز للطباعة',`
  <details ${a.tel1?'':'open'}><summary style="cursor:pointer;font-weight:700">⚙ معلومات الوكالة في رأس العقد (تُكتب مرة واحدة فقط)</summary>
   <div class="g" style="margin-top:10px">${fld('اسم الوكالة',inp('ag_name','text',a.name))}${fld('الهاتف 1',inp('ag_t1','tel',a.tel1,'dir="ltr"'))}${fld('الهاتف 2',inp('ag_t2','tel',a.tel2,'dir="ltr"'))}${fld('تغيير الشعار (اختياري)','<input id="ag_logo" type="file" accept="image/*">')}</div></details>
  <div id="ctWrap" style="overflow-x:auto">${contractHTML(k)}</div>`,
  `<button class="btn" data-act="close">إغلاق</button><button class="btn" data-act="doprint" data-id="${id}">🖨 طباعة</button><button class="btn primary" data-act="dlpdf" data-id="${id}">⬇ تحميل PDF</button>`);
  const re=()=>{document.getElementById('ctWrap').innerHTML=contractHTML(k)};
  ['ag_name','ag_t1','ag_t2'].forEach(i=>document.getElementById(i).addEventListener('input',()=>{const a=AG();a.name=val('ag_name');a.tel1=val('ag_t1');a.tel2=val('ag_t2');save();re()}));
  document.getElementById('ag_logo').addEventListener('change',e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>shrink(r.result,ok=>{AG().logo=ok;save();re()});r.readAsDataURL(f)});
}

function printDoc(id){
  const k=S.contracts.find(x=>x.id===id),el=document.getElementById('ctDoc');if(!el)return;
  const PH=`<!doctype html><html dir="rtl" lang="ar"><head><meta charset="utf-8"><title>${esc(k.num)}</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap"><style>${st.textContent}@page{size:A4;margin:10mm}body{margin:0;background:#fff}.ct{box-shadow:none;border:0;max-width:none;padding:0}</style></head><body>${el.outerHTML}</body></html>`;
  if(APP){try{LocaParcApp.printHtml(PH,'عقد '+k.num);return}catch(e){}}
  const f=document.createElement('iframe');f.style.cssText='position:fixed;left:-10000px;top:0;width:800px;height:1200px;border:0';document.body.appendChild(f);
  const w=f.contentWindow;w.document.open();
  w.document.write(`<!doctype html><html dir="rtl" lang="ar"><head><meta charset="utf-8"><title>${esc(k.num)}</title><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700&display=swap"><style>${st.textContent}@page{size:A4;margin:10mm}body{margin:0;background:#fff}.ct{box-shadow:none;border:0;max-width:none;padding:0}</style></head><body>${el.outerHTML}</body></html>`);
  w.document.close();
  let done=false;const go=()=>{if(done)return;done=true;try{w.focus();w.print()}catch(e){toast('تعذّرت الطباعة')}setTimeout(()=>f.remove(),60000)};
  try{w.document.fonts.ready.then(()=>setTimeout(go,300))}catch(e){}
  setTimeout(go,2500);
}

function loadH2P(){return new Promise((res,rej)=>{if(window.html2pdf)return res();const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';s.onload=res;s.onerror=rej;document.head.appendChild(s)})}
async function pdfDoc(id){
  const k=S.contracts.find(x=>x.id===id),src=document.getElementById('ctDoc');if(!src)return;
  toast('جاري تحضير ملف PDF…');
  let box;
  try{
    await loadH2P();
    box=document.createElement('div');box.style.cssText='position:fixed;left:0;top:0;width:794px;z-index:-1;background:#fff';
    const clone=src.cloneNode(true);clone.removeAttribute('id');clone.classList.add('pdf');box.appendChild(clone);document.body.appendChild(box);
    try{await document.fonts.ready}catch(e){}
    const W=html2pdf().set({margin:0,filename:`عقد-${k.num}.pdf`,image:{type:'jpeg',quality:.96},html2canvas:{scale:2,useCORS:true,backgroundColor:'#ffffff',scrollY:0,windowWidth:794},jsPDF:{unit:'mm',format:'a4',orientation:'portrait'},pagebreak:{mode:['avoid-all']}}).from(clone);
    if(APP){const uri=await W.outputPdf('datauristring');LocaParcApp.saveFile(`عقد-${k.num}.pdf`,uri,'application/pdf');return}
    await W.save();
    toast('✔ تم تحميل العقد PDF');
  }catch(e){toast('تعذّر إنشاء PDF — اضغط «طباعة» ثم اختر «حفظ كـ PDF»')}
  finally{if(box)box.remove()}
}

document.addEventListener('click',e=>{
  const t=e.target.closest('[data-act="print"],[data-act="doprint"],[data-act="dlpdf"]');if(!t)return;
  e.preventDefault();const a=t.dataset.act,id=t.dataset.id;
  if(a==='print')mPrint(id);else if(a==='doprint')printDoc(id);else pdfDoc(id);
});

const node=h=>{const d=document.createElement('div');d.innerHTML=h.trim();return d.firstElementChild};
const after=(id,h)=>{const e=document.getElementById(id);if(e&&e.closest('label'))e.closest('label').after(node(h))};
const relabel=(id,txt)=>{const e=document.getElementById(id);const l=e&&e.closest('label');if(l&&l.firstChild&&l.firstChild.nodeType===3)l.firstChild.nodeValue=txt};

/* Contrat : prénom / nom séparés, naissance, heure de retour */
const _mNC=mNewContract;
mNewContract=function(o){
  _mNC(o);if(!document.getElementById('nc_nom'))return;
  relabel('nc_nom','الإسم *');
  after('nc_nom',fld('اللقب',inp('nc_lnom','text','','autocomplete="off"')));
  relabel('nc_pdate','الرخصة سلمت بتاريخ');
  after('nc_cni',fld('تاريخ الازدياد',inp('nc_dob','date','')));
  after('nc_dob',fld('مكان الازدياد',inp('nc_pob','text','')));
  relabel('nc_h','ساعة الخروج');
  after('nc_d2',fld('ساعة الرجوع',inp('nc_h2','time','09:00')));
};
const _sC=saveContract;
saveContract=function(){
  const ex={cid:val('nc_cli'),pre:val('nc_nom'),ln:val('nc_lnom'),dob:val('nc_dob'),pob:val('nc_pob'),h2:val('nc_h2')};
  const n=S.contracts.length;
  if(ex.cid==='__new'&&ex.ln)set('nc_nom',ex.pre+' '+ex.ln);
  _sC();
  if(S.contracts.length===n){if(document.getElementById('nc_nom'))set('nc_nom',ex.pre);return}
  const k=S.contracts[S.contracts.length-1],p=cli(k.clientId);
  k.heureFin=ex.h2;
  if(ex.cid==='__new'&&ex.ln){p.prenom=ex.pre;p.lnom=ex.ln}
  if(ex.dob)p.dob=ex.dob;if(ex.pob)p.pob=ex.pob;
  save();mPrint(k.id);
};

/* Contrat existant : bouton d'impression */
const _mC=mContract;
mContract=function(id){_mC(id);const f=MB.querySelector('.mf');if(f){const b=document.createElement('button');b.className='btn primary';b.dataset.act='print';b.dataset.id=id;b.textContent='📄 طباعة العقد / PDF';f.prepend(b)}};

/* Véhicule : numéro de châssis */
const _mAC=mAddCar;
mAddCar=function(){_mAC();after('ac_plaque',fld('الرقم التسلسلي (رقم الهيكل)',inp('ac_vin','text','','dir="ltr" placeholder="ZFACF8AP9PU049827"')))};
const _sNC=saveNewCar;
saveNewCar=function(){const v=val('ac_vin'),n=S.cars.length;_sNC();if(S.cars.length>n){S.cars[S.cars.length-1].vin=v;save()}};
const _mCar=mCar;
mCar=function(id){_mCar(id);const c=car(id);after('cr_km',fld('الرقم التسلسلي (رقم الهيكل)',inp('cr_vin','text',c.vin||'','dir="ltr"')))};
const _sCar=saveCar;
saveCar=function(id){const v=document.getElementById('cr_vin')?val('cr_vin'):null;_sCar(id);if(v!==null){car(id).vin=v;save()}};

/* ===== Modifier / supprimer / réglages / sauvegarde ===== */
if(S.rules)Object.assign(RULES,S.rules);
let _yes=null;
function mConfirm(title,msg,yesTxt,fn){_yes=fn;openModal(title,`<div class="alert bad">${msg}</div>`,`<button class="btn" data-act="close">إلغاء</button><button class="btn primary" style="background:var(--bad);border-color:var(--bad)" data-act="xyes">${yesTxt}</button>`)}
const dl=(id,arr)=>`<datalist id="${id}">${arr.map(x=>`<option value="${esc(x)}">`).join('')}</datalist>`;
const openOf=f=>S.contracts.filter(k=>isOpen(k)&&f(k));
const BR=()=>typeof BRANDS!=='undefined'?BRANDS:{};
const CARS_OPTS=()=>S.cars.map(c=>[c.id,carName(c)+' · '+c.plaque]);

/* Voiture */
function mEditCar(id){const c=car(id);
  openModal('✏ تعديل السيارة',`<div class="g">
  ${fld('العلامة *',inp('ec_marque','text',c.marque,'list="dlBrands" dir="ltr"'))}${fld('الطراز *',inp('ec_modele','text',c.modele,'list="dlModels" dir="ltr"'))}
  ${fld('السنة',inp('ec_annee','number',c.annee))}${fld('الترقيم *',inp('ec_plaque','text',c.plaque,'dir="ltr"'))}${fld('الرقم التسلسلي (رقم الهيكل)',inp('ec_vin','text',c.vin||'','dir="ltr"'))}
  ${fld('الوقود',sel('ec_carbu',['بنزين','مازوت','GPL','هجين','كهربائي'],c.carbu))}${fld('علبة السرعة',sel('ec_boite',['عادي','أوتوماتيك'],c.boite))}
  ${fld('اللون',inp('ec_coul','text',c.couleur,'list="dlColors"'))}${fld('سعر اليوم (دج)',inp('ec_prix','number',c.prix))}</div>
  <fieldset><legend>🔔 للتنبيهات</legend><div class="g">${fld('العداد الحالي',inp('ec_km','number',c.km))}${fld('تغيير الزيت القادم عند (كم)',inp('ec_vid','number',c.vidangeKm))}${fld('تغيير الزيت كل (كم)',inp('ec_int','number',c.interval||10000))}
  ${fld('المراقبة التقنية حتى',inp('ec_ct','date',c.ct))}${fld('القسيمة حتى',inp('ec_vig','date',c.vignette))}${fld('التأمين حتى',inp('ec_ass','date',c.assurance))}</div></fieldset>
  ${dl('dlBrands',Object.keys(BR()))}${dl('dlModels',[])}${dl('dlColors',typeof COLORS!=='undefined'?COLORS:[])}`,
  `<button class="btn danger" data-act="xdelcar" data-id="${id}">🗑 حذف</button><button class="btn" data-act="close">إلغاء</button><button class="btn primary" data-act="xsavecar" data-id="${id}">حفظ التعديلات</button>`);
  const upd=()=>{document.getElementById('dlModels').innerHTML=(BR()[val('ec_marque')]||[]).map(m=>`<option value="${esc(m)}">`).join('')};
  document.getElementById('ec_marque').addEventListener('input',upd);upd();
}
function xSaveCar(id){const c=car(id);if(!val('ec_marque')||!val('ec_modele')||!val('ec_plaque'))return toast('العلامة والطراز والترقيم إجبارية.');
  Object.assign(c,{marque:val('ec_marque'),modele:val('ec_modele'),annee:num('ec_annee'),plaque:val('ec_plaque'),vin:val('ec_vin'),carbu:val('ec_carbu'),boite:val('ec_boite'),couleur:val('ec_coul')||'—',prix:num('ec_prix'),km:num('ec_km'),vidangeKm:num('ec_vid'),interval:num('ec_int')||10000,ct:val('ec_ct'),vignette:val('ec_vig'),assurance:val('ec_ass')});
  save();closeModal();render();toast('✔ تم تعديل السيارة')}
function xDelCar(id){const c=car(id);
  if(openOf(k=>k.carId===id).length)return toast('لا يمكن الحذف: السيارة مؤجرة أو محجوزة. أغلق العقد أو ألغِه أولاً.');
  const nk=S.contracts.filter(k=>k.carId===id).length,nm=S.maint.filter(m=>m.carId===id).length;
  mConfirm('🗑 حذف السيارة',`هل تريد حذف ${esc(carName(c))} (${esc(c.plaque)}) نهائيًا؟${nk||nm?`<br>سيُحذف معها سجلها: ${nk} عقد و ${nm} صيانة.`:''}`,'نعم، احذف',()=>{
    S.cars=S.cars.filter(x=>x.id!==id);S.contracts=S.contracts.filter(k=>k.carId!==id);S.moves=S.moves.filter(m=>m.carId!==id);S.maint=S.maint.filter(m=>m.carId!==id);
    save();closeModal();render();toast('تم حذف السيارة')})}

/* Client */
function clientFields(p,pre){p=p||{};const fn=p.lnom?p.prenom:(p.nom||'');return `<div class="g">
  ${fld('الإسم *',inp(pre+'_pre','text',fn))}${fld('اللقب',inp(pre+'_ln','text',p.lnom||''))}${fld('الهاتف *',inp(pre+'_tel','tel',p.tel||''))}
  ${fld('رقم رخصة السياقة *',inp(pre+'_permis','text',p.permis||''))}${fld('الرخصة سلمت بتاريخ',inp(pre+'_pd','date',p.permisDate||''))}${fld('رقم بطاقة التعريف',inp(pre+'_cni','text',p.cni||''))}
  ${fld('تاريخ الازدياد',inp(pre+'_dob','date',p.dob||''))}${fld('مكان الازدياد',inp(pre+'_pob','text',p.pob||''))}${fld('العنوان',inp(pre+'_adr','text',p.adresse||''))}</div>`}
function readClient(pre){const pr=val(pre+'_pre'),ln=val(pre+'_ln');return {prenom:pr,lnom:ln,nom:(pr+' '+ln).trim(),tel:val(pre+'_tel'),permis:val(pre+'_permis'),permisDate:val(pre+'_pd')||'2015-01-01',cni:val(pre+'_cni'),dob:val(pre+'_dob'),pob:val(pre+'_pob'),adresse:val(pre+'_adr')}}
mAddClient=function(){openModal('زبون جديد',clientFields(null,'nc2'),`<button class="btn" data-act="close">إلغاء</button><button class="btn primary" data-act="xaddcli">إضافة</button>`)};
function xAddCli(){const d=readClient('nc2');if(!d.prenom||!d.tel||!d.permis)return toast('الإسم والهاتف ورقم الرخصة إجبارية.');
  S.clients.push(Object.assign({id:uid('p'),blacklist:false,note:''},d));save();closeModal();render();toast('تمت إضافة الزبون')}
function mEditCli(id){const p=cli(id);
  openModal('✏ تعديل الزبون',clientFields(p,'ecl')+`<fieldset><legend>القائمة السوداء</legend><label style="display:flex;gap:8px;align-items:center;font-weight:600"><input type="checkbox" id="ecl_bl" ${p.blacklist?'checked':''}> هذا الزبون في القائمة السوداء</label>${fld('السبب',inp('ecl_note','text',p.note||''))}</fieldset>`,
  `<button class="btn danger" data-act="xdelcli" data-id="${id}">🗑 حذف</button><button class="btn" data-act="close">إلغاء</button><button class="btn primary" data-act="xsavecli" data-id="${id}">حفظ التعديلات</button>`)}
function xSaveCli(id){const d=readClient('ecl');if(!d.prenom||!d.tel||!d.permis)return toast('الإسم والهاتف ورقم الرخصة إجبارية.');
  Object.assign(cli(id),d,{blacklist:document.getElementById('ecl_bl').checked,note:val('ecl_note')});save();closeModal();render();toast('✔ تم تعديل الزبون')}
function xDelCli(id){const p=cli(id);
  if(openOf(k=>k.clientId===id).length)return toast('لا يمكن الحذف: لهذا الزبون عقد جارٍ أو حجز.');
  const ks=S.contracts.filter(k=>k.clientId===id);
  mConfirm('🗑 حذف الزبون',`هل تريد حذف ${esc(p.nom)} نهائيًا؟${ks.length?`<br>سيُحذف معه ${ks.length} عقد من السجل.`:''}`,'نعم، احذف',()=>{
    const nums=ks.map(k=>k.num);S.contracts=S.contracts.filter(k=>k.clientId!==id);S.moves=S.moves.filter(m=>!nums.some(n=>(m.note||'').startsWith(n)));S.clients=S.clients.filter(x=>x.id!==id);
    save();closeModal();render();toast('تم حذف الزبون')})}

/* Contrat */
function mEditK(id){const k=S.contracts.find(x=>x.id===id),closed=k.status==='cloture';
  openModal(`✏ تعديل العقد ${ltr(k.num)}`,`<div class="g">
  ${fld('الزبون',sel('ek_cli',S.clients.map(p=>[p.id,p.nom+' · '+p.tel]),k.clientId))}${fld('السيارة',sel('ek_car',CARS_OPTS(),k.carId))}
  ${fld('تاريخ الخروج',inp('ek_d1','date',k.debut))}${fld('ساعة الخروج',inp('ek_h','time',k.heure||'09:00'))}
  ${fld('تاريخ الرجوع',inp('ek_d2','date',k.fin))}${fld('ساعة الرجوع',inp('ek_h2','time',k.heureFin||k.heure||'09:00'))}
  ${fld('سعر اليوم (دج)',inp('ek_prix','number',k.prix))}${fld('كم مسموحة / يوم',inp('ek_kmj','number',k.kmJour||RULES.kmJour))}
  ${fld('الضمان (دج)',inp('ek_cau','number',k.caution||0))}${fld('التسبيق (دج)',inp('ek_ac','number',k.acompte||0))}${fld('العداد عند الخروج',inp('ek_km','number',k.kmDepart||0))}
  ${closed?fld('العداد عند الرجوع',inp('ek_kmr','number',k.kmRetour||0))+fld('مصاريف الرجوع (دج)',inp('ek_supp','number',k.supp||0)):''}</div>
  ${closed?`<label style="display:flex;gap:8px;align-items:center;font-weight:600"><input type="checkbox" id="ek_paye" ${k.paye!==false?'checked':''}> تم دفع كل المبلغ</label>`:''}
  ${fld('ملاحظات',`<textarea id="ek_obs">${esc(k.obs||'')}</textarea>`)}
  ${k.status==='en_cours'?'<div class="alert info">لتمديد الكراء: غيّر «تاريخ الرجوع» ثم اضغط حفظ.</div>':''}`,
  `<button class="btn danger" data-act="xdelk" data-id="${id}">🗑 حذف العقد</button><button class="btn" data-act="close">إلغاء</button><button class="btn primary" data-act="xsavek" data-id="${id}">حفظ التعديلات</button>`)}
function xSaveK(id){const k=S.contracts.find(x=>x.id===id),d1=val('ek_d1'),d2=val('ek_d2'),carId=val('ek_car');
  if(!d1||!d2||d2<d1)return toast('تحقق من التواريخ: تاريخ الرجوع قبل تاريخ الخروج.');
  if(isOpen(k)&&overlaps(carId,d1,d2,id))return toast('السيارة غير متاحة في هذه التواريخ (عقد آخر).');
  Object.assign(k,{clientId:val('ek_cli'),carId,debut:d1,fin:d2,heure:val('ek_h'),heureFin:val('ek_h2'),prix:num('ek_prix'),kmJour:num('ek_kmj'),caution:num('ek_cau'),acompte:num('ek_ac'),kmDepart:num('ek_km'),obs:val('ek_obs')});
  if(k.status==='cloture'){k.kmRetour=num('ek_kmr');k.supp=num('ek_supp');k.paye=document.getElementById('ek_paye').checked}
  const j=nbJ(d1,d2);k.oExtra=0;k.oAssur=0;OPTS.forEach(([n,pr,t])=>{if((k.opts||[]).includes(n)){if(t==='a')k.oAssur+=pr*j;else k.oExtra+=pr*j}});
  save();closeModal();render();toast('✔ تم تعديل العقد')}
function xDelK(id){const k=S.contracts.find(x=>x.id===id);
  mConfirm('🗑 حذف العقد',`هل تريد حذف العقد ${ltr(k.num)} نهائيًا؟${k.status==='en_cours'?'<br>السيارة ستصبح متاحة.':''}`,'نعم، احذف',()=>{
    S.contracts=S.contracts.filter(x=>x.id!==id);S.moves=S.moves.filter(m=>!(m.note||'').startsWith(k.num));save();closeModal();render();toast('تم حذف العقد')})}

/* Entretien */
function mEditM(id){const m=S.maint.find(x=>x.id===id);
  openModal('✏ تعديل الصيانة',`<div class="g">${fld('السيارة',sel('em_car',CARS_OPTS(),m.carId))}${fld('النوع',sel('em_type',MTYPES,m.type))}${fld('التاريخ',inp('em_date','date',m.date))}${fld('العداد',inp('em_km','number',m.km))}${fld('التكلفة (دج)',inp('em_cout','number',m.cout||''))}${fld('الميكانيكي',inp('em_gar','text',m.garage||''))}</div>${fld('ملاحظة',`<textarea id="em_note">${esc(m.note||'')}</textarea>`)}`,
  `<button class="btn danger" data-act="xdelm" data-id="${id}">🗑 حذف</button><button class="btn" data-act="close">إلغاء</button><button class="btn primary" data-act="xsavem" data-id="${id}">حفظ</button>`)}
function xSaveM(id){Object.assign(S.maint.find(x=>x.id===id),{carId:val('em_car'),type:val('em_type'),date:val('em_date'),km:num('em_km'),cout:num('em_cout'),garage:val('em_gar'),note:val('em_note')});save();closeModal();render();toast('✔ تم التعديل')}
function xDelM(id){mConfirm('🗑 حذف الصيانة','حذف هذه العملية من السجل؟','نعم، احذف',()=>{S.maint=S.maint.filter(x=>x.id!==id);save();closeModal();render();toast('تم الحذف')})}

/* Réglages */
TABS.push(['settings','⚙ الإعدادات']);
function vSettings(){const a=AG();makeLogo(a.name);return `<div class="head"><div><h2>⚙ الإعدادات</h2><p>معلومات الوكالة، الأسعار، والنسخ الاحتياطي.</p></div></div>
  <section class="panel"><h3>معلومات الوكالة <small>تظهر في رأس العقد</small></h3><div class="g">${fld('اسم الوكالة',inp('st_name','text',a.name))}${fld('الهاتف 1',inp('st_t1','tel',a.tel1,'dir="ltr"'))}${fld('الهاتف 2',inp('st_t2','tel',a.tel2,'dir="ltr"'))}${fld('تغيير الشعار','<input id="st_logo" type="file" accept="image/*">')}</div>
  <div style="margin-top:10px;display:flex;gap:10px;align-items:center;flex-wrap:wrap"><img src="${a.logo||LOGO_PNG}" alt="" style="max-height:60px;border-radius:8px;border:1px solid var(--line)">${a.logo?'<button class="btn sm" data-act="xlogoreset">إرجاع الشعار التلقائي</button>':''}</div></section>
  <section class="panel"><h3>الأسعار والقواعد</h3><div class="g">${fld('كم مسموحة / يوم',inp('st_kmj','number',RULES.kmJour))}${fld('سعر الكيلومتر الزائد (دج)',inp('st_pkm','number',RULES.prixKm))}${fld('سعر ربع خزان ناقص (دج)',inp('st_pq','number',RULES.prixQuart))}${fld('الضمان الافتراضي (دج)',inp('st_cau','number',RULES.caution))}${fld('التنبيه قبل انتهاء الوثائق (يوم)',inp('st_ja','number',RULES.joursAlerte))}${fld('تنبيه الزيت قبل (كم)',inp('st_ka','number',RULES.kmAlerte))}</div>
  <div style="margin-top:12px"><button class="btn primary" data-act="xsaveset">حفظ الإعدادات</button></div></section>
  <section class="panel"><h3>💾 النسخ الاحتياطي</h3><p class="sm-m" style="margin:0 0 10px">المعلومات محفوظة في هذا الجهاز فقط. حمّل نسخة احتياطية بانتظام (مثلاً كل أسبوع)، ويمكنك استرجاعها في هذا الجهاز أو في جهاز آخر.</p>
  <div class="acts"><button class="btn" data-act="xbackup">⬇ تحميل نسخة احتياطية</button><label class="btn" style="cursor:pointer">⬆ استرجاع نسخة<input id="st_restore" type="file" accept=".json,application/json" hidden></label></div></section>
  <section class="panel" style="border-color:var(--bad)"><h3 style="color:var(--bad)">منطقة الخطر</h3><button class="btn danger" data-act="xwipe">🗑 مسح كل المعلومات</button></section>`}
function bindSettings(){
  const lg=document.getElementById('st_logo');if(lg)lg.addEventListener('change',e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>shrink(r.result,ok=>{AG().logo=ok;save();render();toast('✔ تم تغيير الشعار')});r.readAsDataURL(f)});
  const rs=document.getElementById('st_restore');if(rs)rs.addEventListener('change',e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>{let d;try{d=JSON.parse(r.result)}catch(_){return toast('الملف غير صالح.')}
    if(!d||!Array.isArray(d.cars)||!Array.isArray(d.contracts))return toast('الملف غير صالح.');
    mConfirm('⬆ استرجاع نسخة',`سيتم استبدال كل المعلومات الحالية بالنسخة (${d.cars.length} سيارة، ${d.contracts.length} عقد). متأكد؟`,'نعم، استرجع',()=>{S=d;if(S.rules)Object.assign(RULES,S.rules);save();closeModal();render();toast('✔ تم استرجاع النسخة')})};r.readAsText(f)});
}
function xSaveSet(){const a=AG();a.name=val('st_name');a.tel1=val('st_t1');a.tel2=val('st_t2');applyBrand();
  S.rules={kmJour:num('st_kmj')||300,prixKm:num('st_pkm'),prixQuart:num('st_pq'),caution:num('st_cau'),joursAlerte:num('st_ja')||30,kmAlerte:num('st_ka')||1500};Object.assign(RULES,S.rules);save();render();toast('✔ تم حفظ الإعدادات')}
function xBackup(){if(APP){try{const js=JSON.stringify(S,null,1);LocaParcApp.saveFile(`ADM-Auto-sauvegarde-${TODAY}.json`,btoa(unescape(encodeURIComponent(js))),'application/json');return}catch(e){}}try{const b=new Blob([JSON.stringify(S,null,1)],{type:'application/json'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download=`ADM-Auto-sauvegarde-${TODAY}.json`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),5000);toast('✔ تم تحميل النسخة الاحتياطية')}catch(e){toast('تعذّر التحميل')}}
function xWipe(){mConfirm('🗑 مسح كل المعلومات','سيتم حذف كل السيارات والزبائن والعقود نهائيًا. حمّل نسخة احتياطية قبل ذلك. متأكد؟','نعم، امسح كل شيء',()=>{const ag=S.ag,rules=S.rules;S={day:TODAY,seq:200,num:0,cars:[],clients:[],contracts:[],moves:[],maint:[],agency:S.agency,ag,rules};save();closeModal();UI.tab='dash';render();toast('تم مسح المعلومات')})}

/* Boutons dans les listes */
const BTN=(act,id,txt,cls)=>`<button class="btn sm ${cls||''}" data-act="${act}" data-id="${id}">${txt}</button>`;
function post(){
  const v=document.getElementById('view');
  if(UI.tab==='clients')v.querySelectorAll('[data-act="newContract"][data-client]').forEach(b=>{const id=b.dataset.client;b.parentElement.insertAdjacentHTML('beforeend',BTN('xeditcli',id,'✏ تعديل')+BTN('xdelcli',id,'🗑','danger'))});
  if(UI.tab==='contrats')v.querySelectorAll('.acts [data-act="contract"][data-id]').forEach(b=>{const id=b.dataset.id;b.parentElement.insertAdjacentHTML('beforeend',BTN('xeditk',id,'✏'))});
  if(UI.tab==='entretien'){const t=v.querySelectorAll('table.rt')[1];if(t&&S.maint.length){const hist=[...S.maint].sort((a,b)=>b.date.localeCompare(a.date));
    const hr=t.querySelector('thead tr');if(hr)hr.insertAdjacentHTML('beforeend','<th></th>');
    t.querySelectorAll('tbody tr').forEach((tr,i)=>{if(hist[i])tr.insertAdjacentHTML('beforeend',`<td><div class="acts">${BTN('xeditm',hist[i].id,'✏')}${BTN('xdelm',hist[i].id,'🗑','danger')}</div></td>`)})}}
  if(UI.tab==='guide')guideAccount(v);
  if(UI.tab==='flotte')v.querySelectorAll('button.car[data-id]').forEach(b=>{b.insertAdjacentHTML('beforeend','<div class="sm-m" style="text-align:center">اضغط للعرض · التعديل · الحذف</div>')});
  try{labelTables()}catch(e){}
}
const _render=render;
render=function(){
  if(UI.tab==='settings'){renderTabs();document.getElementById('view').innerHTML=vSettings();bindSettings();return}
  _render();post();
};
const _mCar2=mCar;
mCar=function(id){_mCar2(id);const f=MB.querySelector('.mf');if(f)f.insertAdjacentHTML('afterbegin',BTN('xdelcar',id,'🗑 حذف','danger')+BTN('xeditcar',id,'✏ تعديل كل المعلومات'))};
const _mC2=mContract;
mContract=function(id){_mC2(id);const k=S.contracts.find(x=>x.id===id),f=MB.querySelector('.mf');if(f)f.insertAdjacentHTML('afterbegin',BTN('xdelk',id,'🗑 حذف','danger')+BTN('xeditk',id,k&&k.status==='en_cours'?'✏ تعديل / تمديد':'✏ تعديل'))};

document.addEventListener('click',e=>{const t=e.target.closest('[data-act^="x"]');if(!t)return;const a=t.dataset.act,id=t.dataset.id;
  const F={xyes:()=>{const f=_yes;_yes=null;if(f)f()},xeditcar:()=>mEditCar(id),xsavecar:()=>xSaveCar(id),xdelcar:()=>xDelCar(id),xeditcli:()=>mEditCli(id),xsavecli:()=>xSaveCli(id),xdelcli:()=>xDelCli(id),xaddcli:xAddCli,
    xeditk:()=>mEditK(id),xsavek:()=>xSaveK(id),xdelk:()=>xDelK(id),xeditm:()=>mEditM(id),xsavem:()=>xSaveM(id),xdelm:()=>xDelM(id),xsaveset:xSaveSet,xbackup:xBackup,xwipe:xWipe,xlogoreset:()=>{AG().logo='';save();render()}};
  if(F[a]){e.preventDefault();F[a]()}});
/* ===== Comptes + sauvegarde en ligne (Supabase) ===== */
const SB_URL='https://bkpjgxsbkveyxeacktev.supabase.co';
const SB_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrcGpneHNia3ZleXhlYWNrdGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM4MTM5MTIsImV4cCI6MjEwOTM4OTkxMn0.0DeKYxtpUp8BaInXpJ5GrGEcTMjHBYXz1SgvZThrvRc';
const CKEY='locaparc-essai-v1';
let entering=false,sb=null,USER=null,ACC=null,pushT=null,ver=0,pending=false,lastSync=null,blocked=false,GOOGLE=false,inside=false,recovering=/type=recovery/.test(location.hash);
const PKEY=()=>'lp-pending-'+(USER?USER.id:'');
const lsGet=k=>{try{return localStorage.getItem(k)}catch(e){return null}};
const lsSet=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const lsDel=k=>{try{localStorage.removeItem(k)}catch(e){}};
const readCache=()=>{try{return JSON.parse(lsGet(CKEY)||'null')}catch(e){return null}};

const gst=document.createElement('style');gst.textContent=`
#gate{position:fixed;inset:0;z-index:100;background:#F4F6F8;overflow:auto;padding:32px 16px;direction:rtl}
#gate .card{background:#fff;border:1px solid var(--line);border-radius:16px;box-shadow:0 10px 40px rgba(20,32,44,.08);width:100%;max-width:420px;margin:0 auto;padding:26px 22px;box-sizing:border-box}
#gate .lg{text-align:center;margin-bottom:18px}#gate .lg b{font-size:30px;font-weight:800;letter-spacing:.5px}#gate .lg b i{font-style:normal;color:var(--accent)}#gate .lg p{margin:2px 0 0;color:var(--muted);font-size:14px}
#gate h2{font-size:19px;margin:0 0 4px}#gate .sub{color:var(--muted);font-size:14px;margin:0 0 6px}
#gate .tb{display:flex;background:var(--surface2);border-radius:10px;padding:4px;margin-bottom:16px}
#gate .tb button{flex:1;border:0;background:transparent;padding:9px;border-radius:8px;font:inherit;font-weight:700;color:var(--muted);cursor:pointer}
#gate .tb button[aria-pressed="true"]{background:#fff;color:var(--ink);box-shadow:0 1px 4px rgba(0,0,0,.1)}
#gate label{display:block;font-weight:600;font-size:14px;margin:12px 0 5px}
#gate input{width:100%;box-sizing:border-box;padding:11px 12px;border:1px solid var(--line);border-radius:10px;font:inherit;font-size:16px;background:#fff;color:var(--ink)}
#gate input:focus{outline:2px solid var(--accent);outline-offset:0;border-color:var(--accent)}
#gate .go{width:100%;margin-top:18px;padding:12px;font-size:16px;font-weight:700}
#gate .gg{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;padding:11px;border:1px solid var(--line);background:#fff;border-radius:10px;font:inherit;font-weight:700;cursor:pointer;color:var(--ink)}
#gate .gg .G{font-weight:800;font-size:18px;color:#4285F4}
#gate .or{display:flex;align-items:center;gap:10px;color:var(--muted);font-size:13px;margin:16px 0 4px}#gate .or:before,#gate .or:after{content:"";flex:1;height:1px;background:var(--line)}
#gate .lnk{background:none;border:0;color:var(--info);font:inherit;cursor:pointer;padding:0;font-size:14px;text-decoration:underline}
#gate .row{display:flex;justify-content:space-between;align-items:center;margin-top:12px;gap:10px;flex-wrap:wrap}
#gate .err{background:var(--bad-soft);color:var(--bad);border-radius:8px;padding:9px 12px;margin-top:12px;font-weight:600;font-size:14px}
#gate .okm{background:var(--ok-soft);color:var(--ok);border-radius:8px;padding:9px 12px;margin-top:12px;font-weight:600;font-size:14px}
#gate .spin{text-align:center;padding:30px 0;color:var(--muted);font-weight:600}
#gate .eye{position:relative}#gate .eye input{padding-left:42px}#gate .eye button{position:absolute;left:8px;top:50%;transform:translateY(-50%);border:0;background:none;cursor:pointer;font-size:16px;color:var(--muted)}
#gate .foot{text-align:center;color:var(--muted);font-size:12px;margin-top:16px}
#cloud{font-size:12px;font-weight:700;color:var(--muted);white-space:nowrap;border:1px solid var(--line);border-radius:999px;padding:3px 10px;background:#fff;cursor:pointer}
#cloud.ok{color:var(--ok)}#cloud.off,#cloud.blocked{color:var(--bad);border-color:var(--bad)}
#blockbar{background:var(--bad);color:#fff;text-align:center;font-weight:700;padding:8px 12px;font-size:14px}
`;document.head.appendChild(gst);

const gate=document.createElement('div');gate.id='gate';document.body.appendChild(gate);
const LG=`<div class="lg"><b>ADM <i>Auto</i></b><p>برنامج تسيير كراء السيارات</p></div>`;
const pw=(id,ph)=>`<div class="eye"><input id="${id}" type="password" autocomplete="${id==='g_pass'?'current-password':'new-password'}" placeholder="${ph||''}" dir="ltr"><button type="button" data-g="eye" data-for="${id}" aria-label="إظهار">👁</button></div>`;
const GBTN=()=>GOOGLE&&!APP?`<button class="gg" data-g="google" type="button"><span class="G">G</span> المتابعة بحساب Google</button><div class="or">أو</div>`:'';
function showGate(mode,msg,ok){
  gate.hidden=false;let h='';
  if(mode==='loading')h=`<div class="spin">⏳ جاري التحميل…</div>`;
  else if(mode==='login'||mode==='signup'){
    const su=mode==='signup';
    h=`<div class="tb"><button data-g="tab-login" aria-pressed="${!su}">تسجيل الدخول</button><button data-g="tab-signup" aria-pressed="${su}">إنشاء حساب جديد</button></div>
    ${su?'<div style="background:#E0EAF7;color:#1d4a80;border-radius:10px;padding:10px 12px;font-weight:700;font-size:14px;text-align:center;margin-bottom:14px">🎁 تجربة مجانية 3 أيام — بلا ما تخلص<br><small style="font-weight:600">ومن بعد <bdi dir="ltr">12 000</bdi> دج لعام كامل</small></div>':''}
    ${GBTN()}
    <form id="gform" data-mode="${mode}" novalidate>
    ${su?`<label for="g_ag">اسم الوكالة</label><input id="g_ag" type="text" placeholder="مثال: وكالة النور لكراء السيارات" autocomplete="organization">`:''}
    <label for="g_mail">البريد الإلكتروني</label><input id="g_mail" type="email" dir="ltr" autocomplete="email" placeholder="exemple@gmail.com">
    <label for="g_pass">كلمة المرور ${su?'<small style="color:var(--muted);font-weight:400">(6 أحرف أو أرقام على الأقل)</small>':''}</label>${pw(su?'g_pass1':'g_pass')}
    ${su?`<label for="g_pass2">أعد كتابة كلمة المرور</label>${pw('g_pass2')}`:''}
    <button class="btn primary go" type="submit">${su?'إنشاء الحساب':'دخول'}</button></form>
    ${su?'':`<div class="row"><button class="lnk" data-g="forgot" type="button">نسيت كلمة المرور؟</button><button class="lnk" data-g="tab-signup" type="button">ليس لديك حساب؟ أنشئ حسابًا</button></div>`}`;
  }else if(mode==='forgot'){
    h=`<h2>نسيت كلمة المرور</h2><p class="sub">اكتب بريدك الإلكتروني، وسنرسل لك رابطًا لتغيير كلمة المرور.</p>
    <form id="gform" data-mode="forgot" novalidate><label for="g_mail">البريد الإلكتروني</label><input id="g_mail" type="email" dir="ltr" autocomplete="email">
    <button class="btn primary go" type="submit">إرسال الرابط</button></form><div class="row"><button class="lnk" data-g="tab-login" type="button">← الرجوع لتسجيل الدخول</button></div>`;
  }else if(mode==='recovery'){
    h=`<h2>كلمة مرور جديدة</h2><p class="sub">اكتب كلمة المرور الجديدة مرتين.</p>
    <form id="gform" data-mode="recovery" novalidate><label for="g_pass1">كلمة المرور الجديدة</label>${pw('g_pass1')}<label for="g_pass2">أعد كتابتها</label>${pw('g_pass2')}
    <button class="btn primary go" type="submit">حفظ كلمة المرور</button></form>`;
  }
  gate.innerHTML=`<div class="card">${LG}${h}${msg?`<div class="${ok?'okm':'err'}">${msg}</div>`:''}</div><div class="foot">ADM Auto © ${new Date().getFullYear()}</div>`;
  const f=gate.querySelector('input');if(f&&window.innerWidth>700)f.focus();
}
const gv=id=>{const e=document.getElementById(id);return e?e.value.trim():''};
const busy=on=>{const b=gate.querySelector('.go');if(b){b.disabled=on;b.style.opacity=on?.6:1}};
const ERR=m=>{m=String(m||'');
  if(/banned/i.test(m))return 'تم حظر هذا الحساب. اتصل بصاحب البرنامج.';
  if(/Invalid login credentials/i.test(m))return 'البريد الإلكتروني أو كلمة المرور غير صحيحة.';
  if(/fetch|network|Failed/i.test(m))return 'لا يوجد اتصال بالإنترنت. تحقق من الاتصال وأعد المحاولة.';
  if(/rate|security purposes/i.test(m))return 'محاولات كثيرة. انتظر دقيقة ثم أعد المحاولة.';
  if(/same.*password|different from the old/i.test(m))return 'كلمة المرور الجديدة يجب أن تكون مختلفة عن القديمة.';
  if(/weak|at least/i.test(m))return 'كلمة المرور ضعيفة: 6 أحرف أو أرقام على الأقل.';
  return 'حدث خطأ: '+m};

gate.addEventListener('click',async e=>{const t=e.target.closest('[data-g]');if(!t)return;const g=t.dataset.g;
  if(g==='tab-login')showGate('login');else if(g==='tab-signup')showGate('signup');else if(g==='forgot')showGate('forgot');
  else if(g==='eye'){const i=document.getElementById(t.dataset.for);i.type=i.type==='password'?'text':'password'}
  else if(g==='google'){const{error}=await sb.auth.signInWithOAuth({provider:'google',options:{redirectTo:location.origin+location.pathname}});if(error)showGate('login',ERR(error.message))}
});
gate.addEventListener('submit',async e=>{e.preventDefault();const mode=e.target.dataset.mode;
  try{
  if(mode==='login'){const em=gv('g_mail'),p=document.getElementById('g_pass').value;
    if(!em||!p)return showGate('login','اكتب البريد الإلكتروني وكلمة المرور.');
    busy(true);const{error}=await sb.auth.signInWithPassword({email:em,password:p});
    if(error){showGate('login',ERR(error.message));document.getElementById('g_mail').value=em}}
  else if(mode==='signup'){const ag=gv('g_ag'),em=gv('g_mail'),p1=document.getElementById('g_pass1').value,p2=document.getElementById('g_pass2').value;
    const keep=()=>{document.getElementById('g_ag').value=ag;document.getElementById('g_mail').value=em};
    if(!ag){showGate('signup','اكتب اسم الوكالة.');return keep()}
    if(!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)){showGate('signup','البريد الإلكتروني غير صحيح.');return keep()}
    if(p1.length<6){showGate('signup','كلمة المرور قصيرة: 6 أحرف أو أرقام على الأقل.');return keep()}
    if(p1!==p2){showGate('signup','كلمتا المرور غير متطابقتين.');return keep()}
    busy(true);
    const r=await fetch(SB_URL+'/functions/v1/signup',{method:'POST',headers:{'Content-Type':'application/json',apikey:SB_KEY,Authorization:'Bearer '+SB_KEY},body:JSON.stringify({email:em,password:p1,agency:ag})});
    const d=await r.json().catch(()=>({}));
    if(!r.ok){showGate('signup',d.error==='banned'?'لا يمكن إنشاء حساب بهذا البريد.':d.error==='exists'?'هذا البريد مسجّل من قبل. اضغط «تسجيل الدخول».':ERR(d.error));return keep()}
    const{error}=await sb.auth.signInWithPassword({email:em,password:p1});if(error)showGate('login',ERR(error.message));else try{const _s=localStorage.getItem('adm_src');await sb.rpc('set_src',{s:_s?JSON.parse(_s):{direct:1}})}catch(e){}}
  else if(mode==='forgot'){const em=gv('g_mail');if(!em)return showGate('forgot','اكتب البريد الإلكتروني.');
    busy(true);const{error}=await sb.auth.resetPasswordForEmail(em,{redirectTo:location.origin+location.pathname});
    showGate('login',error?ERR(error.message):'📩 أرسلنا لك رسالة. افتح بريدك الإلكتروني (وتحقق من «Spam») واضغط على الرابط.',!error)}
  else if(mode==='recovery'){const p1=document.getElementById('g_pass1').value,p2=document.getElementById('g_pass2').value;
    if(p1.length<6)return showGate('recovery','كلمة المرور قصيرة: 6 أحرف أو أرقام على الأقل.');
    if(p1!==p2)return showGate('recovery','كلمتا المرور غير متطابقتين.');
    busy(true);const{error}=await sb.auth.updateUser({password:p1});
    if(error)return showGate('recovery',ERR(error.message));
    recovering=false;history.replaceState(null,'',location.pathname);toast('✔ تم تغيير كلمة المرور');const{data}=await sb.auth.getSession();if(data.session)enter(data.session.user)}
  }catch(err){busy(false);showGate(mode==='signup'?'signup':mode==='recovery'?'recovery':'login',ERR(err.message))}
});

/* compte bloqué / expiré */
const accState=a=>!a?'ok':a.status==='banned'?'banned':(a.status==='suspended'||a.active===false)?'suspended':(a.expires_at&&new Date(a.expires_at)<new Date())?'expired':'ok';
async function showBlocked(kind){inside=false;closeModal();gate.hidden=false;
  let c={};try{const r=await sb.rpc('get_contact');c=r.data||{}}catch(e){}
  const T={banned:['⛔','تم حظر هذا الحساب','لم يعد بإمكانك استعمال البرنامج بهذا الحساب.'],suspended:['🔒','حسابك موقوف مؤقتًا','تم إيقاف حسابك. معلوماتك محفوظة ولن تضيع. اتصل بنا لإعادة تفعيله.'],expired:ACC&&ACC.plan==='paid'?['⏰','انتهى اشتراكك السنوي','شكرًا لثقتك. معلوماتك محفوظة ولن تضيع. جدّد اشتراكك (<bdi dir="ltr">12 000</bdi> دج لعام كامل) وواصل العمل من حيث توقفت.']:['⏰','انتهت الفترة التجريبية','شكرًا لتجربتك للبرنامج. معلوماتك محفوظة. فعّل اشتراكك بـ <bdi dir="ltr">12 000</bdi> دج لعام كامل وواصل العمل بنفس المعلومات.']}[kind];
  const ph=(c.phone||'').trim(),wa=(c.whatsapp||'').replace(/\D/g,'');
  gate.innerHTML=`<div class="card">${LG}<div style="text-align:center;font-size:64px;line-height:1">${T[0]}</div><h2 style="text-align:center;margin-top:10px">${T[1]}</h2><p class="sub" style="text-align:center">${T[2]}</p>
  ${wa?`<a class="btn primary go" style="display:flex;text-decoration:none" href="https://wa.me/${wa.replace(/^0/,'213')}" target="_blank" rel="noopener">💬 راسلنا على WhatsApp</a>`:''}
  ${ph?`<a class="btn go" style="display:flex;text-decoration:none;color:var(--ink)" href="tel:${xe(ph)}">📞 <span class="ltr">${xe(ph)}</span></a>`:''}
  <div class="row" style="justify-content:center"><button class="lnk" data-g="logout" type="button">تسجيل الخروج</button></div></div><div class="foot">ADM Auto © ${new Date().getFullYear()}</div>`}
gate.addEventListener('click',async e=>{const t=e.target.closest('[data-g="logout"]');if(!t)return;try{await sb.auth.signOut()}catch(_){}lsDel(CKEY);lsDel(PKEY());location.reload()});

/* bandeau essai / abonnement */
let CONTACT=null;
async function planBar(){const old=document.getElementById('planbar');if(!inside||!ACC||!ACC.expires_at||accState(ACC)!=='ok'){if(old)old.remove();return}
  const d=Math.max(0,Math.ceil((new Date(ACC.expires_at)-Date.now())/864e5)),paid=ACC.plan==='paid';
  if(paid&&d>15){const ds=new Date(ACC.expires_at).toLocaleDateString('fr-FR',{timeZone:'Africa/Algiers'});const g='<div id="planbar" style="background:#E3F5EC;color:#14653F;padding:5px 12px;font-weight:700;font-size:13px;text-align:center">✅ اشتراك سنوي مفعّل حتى <bdi dir="ltr">'+ds+'</bdi></div>';if(old)old.outerHTML=g;else{const c=document.querySelector('.chrome');if(c)c.insertAdjacentHTML('afterbegin',g)}return}
  if(!CONTACT){try{const r=await sb.rpc('get_contact');CONTACT=r.data||{}}catch(e){CONTACT={}}}
  const wa=(CONTACT.whatsapp||'').replace(/\D/g,'').replace(/^0/,'213');
  const txt=paid?`⏰ اشتراكك ينتهي ${d<=1?'غدًا':'بعد '+d+' يوم'} — جدّده بـ <bdi dir="ltr">12 000</bdi> دج لعام كامل`:`🎁 تجربة مجانية — باقي لك ${d<=1?'آخر يوم':d+' أيام'} · اشترك بـ <bdi dir="ltr">12 000</bdi> دج لعام كامل`;
  const msg=encodeURIComponent(paid?'سلام، نحب نجدّد اشتراك ADM Auto ('+(USER?USER.email:'')+')':'سلام، نحب نشترك في ADM Auto ('+(USER?USER.email:'')+')');
  const h=`<div id="planbar" style="background:${paid?'var(--warn-soft,#FBF0D3)':'#E0EAF7'};color:${paid?'#7a4f00':'#1d4a80'};display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap;padding:8px 12px;font-weight:700;font-size:14px;text-align:center"><span>${txt}</span>${wa?`<a href="https://wa.me/${wa}?text=${msg}" target="_blank" rel="noopener" style="background:#1C7A52;color:#fff;border-radius:999px;padding:4px 12px;text-decoration:none;white-space:nowrap">💬 ${paid?'جدّد الآن':'اشترك الآن'}</a>`:''}</div>`;
  if(old)old.outerHTML=h;else{const c=document.querySelector('.chrome');if(c)c.insertAdjacentHTML('afterbegin',h)}}
/* statut de sauvegarde */
function setCloud(st){const c=document.getElementById('cloud');if(!c)return;c.className=st;
  c.textContent={ok:'☁ محفوظ',saving:'⏳ جاري الحفظ…',off:'⚠ غير متصل — سيُحفظ لاحقًا',blocked:'⛔ الحساب موقوف'}[st]||'';
  const bb=document.getElementById('blockbar');if(st==='blocked'&&!bb){document.querySelector('.chrome').insertAdjacentHTML('afterbegin','<div id="blockbar">⛔ حسابك موقوف: التغييرات لا تُحفظ. اتصل بصاحب البرنامج لتفعيله.</div>')}}
const _save=save;
save=function(){if(USER)S._uid=USER.id;_save();if(!USER||!inside)return;ver++;pending=true;lsSet(PKEY(),'1');setCloud('saving');clearTimeout(pushT);pushT=setTimeout(push,700)};
async function push(){if(!USER)return;if(blocked){setCloud('blocked');return}
  const v=ver;
  try{const{data,error}=await sb.from('app_data').upsert({user_id:USER.id,data:S},{onConflict:'user_id'}).select('updated_at');
    if(error){if(error.code==='42501'||/row-level security/i.test(error.message)){blocked=true;setCloud('blocked');return}throw error}
    if(data&&data[0])lastSync=data[0].updated_at;
    if(v===ver){pending=false;lsDel(PKEY());setCloud('ok')}
  }catch(e){setCloud('off');clearTimeout(pushT);pushT=setTimeout(push,15000)}}
async function pull(){if(!USER||!inside)return;
  try{const ac=await sb.from('accounts').select('status,active,expires_at,plan').eq('user_id',USER.id).maybeSingle();if(ac.data){ACC=Object.assign(ACC||{},ac.data);planBar();const k=accState(ac.data);if(k!=='ok'){if(pending)await push();return showBlocked(k)}}}catch(e){}
  if(pending||!M.hidden||blocked)return;
  try{const{data,error}=await sb.from('app_data').select('data,updated_at').eq('user_id',USER.id).maybeSingle();
    if(error||!data||pending)return;
    if(data.updated_at!==lastSync&&data.data&&Array.isArray(data.data.cars)){lastSync=data.updated_at;S=data.data;S._uid=USER.id;if(S.rules)Object.assign(RULES,S.rules);_save();applyBrand();render();toast('🔄 تم تحديث المعلومات من جهاز آخر')}
    setCloud('ok')}catch(e){}}
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')pull()});
window.addEventListener('online',()=>{if(pending)push();else pull()});
setInterval(pull,30000);
window.addEventListener('beforeunload',e=>{if(pending&&USER){e.preventDefault();e.returnValue=''}});

async function enter(user){
  if(recovering){showGate('recovery');return}
  if(USER&&USER.id===user.id&&(inside||entering))return;
  USER=user;entering=true;lsSet('lp-seen','1');showGate('loading');
  const cache=readCache();let remote=null,legacy=null;
  try{
    const[a,b]=await Promise.all([sb.from('accounts').select('*').eq('user_id',user.id).maybeSingle(),sb.from('app_data').select('data,updated_at').eq('user_id',user.id).maybeSingle()]);
    if(b.error)throw b.error;
    ACC=a.data;remote=b.data;
    blocked=!!(ACC&&(!ACC.active||(ACC.expires_at&&new Date(ACC.expires_at)<new Date())));
  }catch(e){
    if(cache&&cache._uid===user.id){S=cache;open();setCloud('off');pending=true;toast('لا يوجد اتصال — تعمل على النسخة المحفوظة في هذا الجهاز');return}
    showGate('login','لا يوجد اتصال بالإنترنت. تحقق من الاتصال وأعد المحاولة.');USER=null;entering=false;return}
  const stt=accState(ACC);if(stt!=='ok'){entering=false;if(cache&&cache._uid===user.id&&lsGet(PKEY())){S=cache}showBlocked(stt);return}
  let fresh=false;
  if(cache&&cache._uid===user.id&&lsGet(PKEY())){S=cache;pending=true}
  else if(remote&&remote.data&&Array.isArray(remote.data.cars)){S=remote.data;lastSync=remote.updated_at}
  else{fresh=true;S=blank();S.ag={name:(ACC&&ACC.agency_name)||(user.user_metadata&&(user.user_metadata.agency||user.user_metadata.full_name))||'',tel1:'',tel2:'',logo:''};
    if(cache&&!cache._uid&&((cache.cars||[]).length||(cache.contracts||[]).length||(cache.clients||[]).length))legacy=cache}
  open();
  if(pending)push();else if(fresh)save();
  if(legacy){mConfirm('📥 معلومات موجودة في هذا الجهاز',`وجدنا في هذا الجهاز معلومات من نسخة التجربة (${(legacy.cars||[]).length} سيارة، ${(legacy.clients||[]).length} زبون، ${(legacy.contracts||[]).length} عقد).<br>هل تريد نقلها إلى حسابك؟`,'نعم، انقلها إلى حسابي',()=>{const nm=S.ag.name;S=legacy;S.ag=S.ag||{name:'',tel1:'',tel2:'',logo:''};if(!S.ag.name)S.ag.name=nm;if(S.rules)Object.assign(RULES,S.rules);save();closeModal();applyBrand();render();toast('✔ تم نقل المعلومات إلى حسابك')});const mf=MB.querySelector('.mf .btn');if(mf)mf.textContent='لا، ابدأ من جديد'}
  else if(!S.ag.name)askAgency();
  else if(typeof allAlerts==='function'&&allAlerts().length&&lsGet('lp-alert-day-'+user.id)!==TODAY){lsSet('lp-alert-day-'+user.id,TODAY);mAlerts()}
}
function open(){inside=true;closeModal();if(S.rules)Object.assign(RULES,S.rules);S._uid=USER.id;_save();
  const top=document.querySelector('.top');if(top&&!document.getElementById('cloud'))top.querySelector('.brand').insertAdjacentHTML('afterend','<button id="cloud" data-act="xaccount" class="ok" title="حسابي">☁ محفوظ</button>');
  setCloud(blocked?'blocked':pending?'saving':'ok');
  applyBrand();if(UI.tab==='settings'||!TABS.some(t=>t[0]===UI.tab))UI.tab='dash';render();gate.hidden=true;gate.innerHTML='';planBar()}
function askAgency(){openModal('👋 مرحبًا بك',`<p>اكتب اسم وكالتك. سيظهر في أعلى البرنامج وفي رأس العقود.</p>${fld('اسم الوكالة',inp('xa_name','text','','placeholder="مثال: وكالة النور لكراء السيارات"'))}`,`<button class="btn primary" data-act="xagsave">حفظ</button>`)}

/* compte : mot de passe, déconnexion */
const _vS=vSettings;
vSettings=function(){const em=USER?USER.email:'';const google=USER&&(USER.app_metadata&&(USER.app_metadata.providers||[USER.app_metadata.provider]).includes('google'));
  const acc=`<section class="panel"><h3>👤 حسابي</h3>
  <p style="margin:0 0 6px">البريد الإلكتروني: <b class="ltr" dir="ltr">${esc(em)}</b>${google?' <small style="color:var(--muted)">(متصل بـ Google)</small>':''}</p>
  <p class="sm-m" style="margin:0 0 10px">ادخل بهذا البريد من الهاتف أو الحاسوب: نفس المعلومات في كل مكان.</p>
  <h4 style="margin:14px 0 4px">${google?'إنشاء كلمة مرور (للدخول بدون Google)':'تغيير كلمة المرور'}</h4>
  <div class="g">${fld('كلمة المرور الجديدة',inp('xp_1','password','','dir="ltr" autocomplete="new-password"'))}${fld('أعد كتابتها',inp('xp_2','password','','dir="ltr" autocomplete="new-password"'))}</div>
  <div class="acts" style="margin-top:10px"><button class="btn primary" data-act="xpwd">حفظ كلمة المرور</button><button class="btn danger" data-act="xlogout">🚪 تسجيل الخروج</button></div></section>`;
  return _vS().replace('<section class="panel">',acc+'<section class="panel">')
    .replace('المعلومات محفوظة في هذا الجهاز فقط. حمّل نسخة احتياطية بانتظام (مثلاً كل أسبوع)، ويمكنك استرجاعها في هذا الجهاز أو في جهاز آخر.','معلوماتك محفوظة تلقائيًا على الإنترنت في حسابك. يمكنك أيضًا تحميل نسخة احتياطية في ملف للاحتياط.')};
async function xPwd(){const a=val('xp_1'),b=val('xp_2');if(a.length<6)return toast('كلمة المرور قصيرة: 6 أحرف أو أرقام على الأقل.');if(a!==b)return toast('كلمتا المرور غير متطابقتين.');
  const{error}=await sb.auth.updateUser({password:a});if(error)return toast(ERR(error.message));set('xp_1','');set('xp_2','');toast('✔ تم حفظ كلمة المرور الجديدة')}
async function xLogout(){mConfirm('🚪 تسجيل الخروج','هل تريد الخروج من حسابك في هذا الجهاز؟ معلوماتك تبقى محفوظة في حسابك.','نعم، خروج',async()=>{
  if(pending)await push();try{await sb.auth.signOut()}catch(e){}lsDel(CKEY);lsDel(PKEY());location.reload()})}
document.addEventListener('click',e=>{const t=e.target.closest('[data-act="xpwd"],[data-act="xlogout"],[data-act="xaccount"],[data-act="xagsave"]');if(!t)return;e.preventDefault();const a=t.dataset.act;
  if(a==='xpwd')xPwd();else if(a==='xlogout')xLogout();else if(a==='xaccount'){UI.tab='settings';render();scrollTo(0,0)}
  else if(a==='xagsave'){const n=val('xa_name');if(!n)return toast('اكتب اسم الوكالة.');AG().name=n;save();closeModal();applyBrand();render()}});

/* guide */
function guideAccount(v){const g=v.querySelector('.guide');if(!g||g.querySelector('[data-acc]'))return;
  g.querySelectorAll('details').forEach(d=>{if(/نسخة التجربة/.test(d.querySelector('summary').textContent))d.remove()});
  g.insertAdjacentHTML('afterbegin',`<details data-acc open><summary><span class="n">🔐</span>الحساب، كلمة المرور والحفظ على الإنترنت</summary><div class="gb">
  <p><b>1) إنشاء الحساب (مرة واحدة فقط):</b> افتح البرنامج ← اضغط <span class="k">إنشاء حساب جديد</span> ← اكتب اسم الوكالة، بريدك الإلكتروني، وكلمة مرور (6 أحرف أو أرقام على الأقل) مرتين ← اضغط <span class="kb">إنشاء الحساب</span>.${GOOGLE?' أو اضغط <span class="kb">المتابعة بحساب Google</span> واختر حسابك.':''}</p>
  <p><b>2) الدخول من الهاتف أو الحاسوب:</b> افتح نفس الرابط ← <span class="k">تسجيل الدخول</span> ← نفس البريد ونفس كلمة المرور. ستجد نفس السيارات والعقود والزبائن في كل الأجهزة.</p>
  <p><b>3) الحفظ تلقائي:</b> كل تغيير يُحفظ وحده على الإنترنت. في أعلى الشاشة ترى: <span class="kb">☁ محفوظ</span> = كل شيء محفوظ. <span class="kb">⏳ جاري الحفظ…</span> = انتظر ثانية. <span class="kb">⚠ غير متصل</span> = لا يوجد إنترنت، التغييرات تبقى في الجهاز وتُرسل وحدها عند رجوع الإنترنت (لا تغلق البرنامج قبل ذلك).</p>
  <p><b>4) تغيير كلمة المرور:</b> اضغط <span class="kb">☁ محفوظ</span> في الأعلى (أو قسم <span class="k">⚙ الإعدادات</span>) ← «حسابي» ← اكتب كلمة المرور الجديدة مرتين ← <span class="kb">حفظ كلمة المرور</span>. إذا دخلت بـ Google يمكنك هنا إنشاء كلمة مرور للدخول بالبريد أيضًا.</p>
  <p><b>5) نسيت كلمة المرور؟</b> في صفحة الدخول اضغط <span class="k">نسيت كلمة المرور؟</span> ← اكتب بريدك ← افتح الرسالة في بريدك (تحقق من Spam) ← اضغط الرابط ← اكتب كلمة المرور الجديدة.</p>
  <p><b>6) تسجيل الخروج:</b> ⚙ الإعدادات ← حسابي ← <span class="kb">🚪 تسجيل الخروج</span>. افعل ذلك دائمًا إذا استعملت جهازًا ليس لك.</p>
  <div class="tip">العامل في الوكالة يمكنه الدخول بنفس الحساب من هاتفه. لا تعطِ كلمة المرور إلا لشخص تثق فيه، وغيّرها إذا غادر العمل.</div></div></details>`)}

/* démarrage */
(async function boot(){showGate('loading');
  try{await new Promise((res,rej)=>{if(window.supabase)return res();const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js';s.onload=res;s.onerror=rej;document.head.appendChild(s)});
  }catch(e){const c=readCache();showGate('login','لا يوجد اتصال بالإنترنت. تحقق من الاتصال ثم أعد تحميل الصفحة.');return}
  sb=window.supabase.createClient(SB_URL,SB_KEY,{auth:{persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
  fetch(SB_URL+'/auth/v1/settings',{headers:{apikey:SB_KEY}}).then(r=>r.json()).then(d=>{GOOGLE=!!(d&&d.external&&d.external.google);const m=gate.querySelector('#gform');if(m&&!gate.querySelector('.gg')&&GOOGLE)showGate(m.dataset.mode)}).catch(()=>{});
  sb.auth.onAuthStateChange((ev,session)=>{
    if(ev==='PASSWORD_RECOVERY'){recovering=true;showGate('recovery');return}
    if(session&&session.user)setTimeout(()=>enter(session.user),0);
  });
  const{data}=await sb.auth.getSession();
  if(data.session)enter(data.session.user);else if(!recovering)showGate(/signup|inscription/i.test(location.search+location.hash)||!lsGet('lp-seen')?'signup':'login');
})();

})();
