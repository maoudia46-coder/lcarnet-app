/* ADM Auto — ajouts indépendants : sortie du navigateur intégré (Facebook/TikTok…), APK, installation, contact + rappels.
   Ne modifie rien dans le logiciel : lit seulement la page et ajoute des fenêtres par-dessus. */
(function(){try{
  var C={
    app:'ADM Auto',
    wa:'213550240283',                                /* repli ; la vraie valeur vient de l'admin (get_contact) */
    waTxt:'السلام عليكم، عندي سؤال على ADM Auto',
    fb:'https://m.me/102198542397576',
    ig:'https://www.instagram.com/admdigital.dz',
    tt:'https://www.tiktok.com/@admdigital.dz',
    apk:'https://github.com/maoudia46-coder/lcarnet-app/raw/main/ADMAuto.apk',
    rem:[1,3,6]                                       /* rappels « تواصل معنا » : jours après la 1re ouverture */
  };
  var REF='bkpjgxsbkveyxeacktev';
  var KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrcGpneHNia3ZleXhlYWNrdGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM4MTM5MTIsImV4cCI6MjEwOTM4OTkxMn0.0DeKYxtpUp8BaInXpJ5GrGEcTMjHBYXz1SgvZThrvRc';
  try{fetch('https://'+REF+'.supabase.co/rest/v1/rpc/get_contact',{method:'POST',headers:{apikey:KEY,Authorization:'Bearer '+KEY,'Content-Type':'application/json'},body:'{}'}).then(function(r){return r.ok?r.json():null}).then(function(d){var w=d&&(d.whatsapp||d.phone);if(w){w=String(w).replace(/\D/g,'');if(w.charAt(0)==='0')w='213'+w.slice(1);if(w.length>=11)C.wa=w}}).catch(function(){})}catch(e){}
  var ua=navigator.userAgent||'',and=/Android/i.test(ua),ios=/iPhone|iPad|iPod/i.test(ua);
  var inApp=/FBAN|FBAV|FB_IAB|FBIOS|Instagram|BytedanceWebview|musical_ly|TikTok|trill|ByteLocale|open_news|Snapchat|Line\/|; wv\)/i.test(ua)||(and&&/Version\/[\d.]+ Chrome\//.test(ua));
  var standalone=(window.matchMedia&&matchMedia('(display-mode: standalone)').matches)||navigator.standalone===true||document.referrer.indexOf('android-app://')===0;
  window.ADM_INAPP=inApp;
  function ls(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
  function ss(k,v){try{if(v===undefined)return sessionStorage.getItem(k);sessionStorage.setItem(k,v)}catch(e){return null}}
  function sess(){try{var s=JSON.parse(localStorage.getItem('sb-'+REF+'-auth-token'));return !!(s&&s.access_token)}catch(e){return false}}
  function inside(){var m=document.getElementById('modal');return !!document.getElementById('view')&&!!document.getElementById('cloud')&&sess()&&(!m||m.hidden)}
  function gateOpen(){var g=document.getElementById('gate');return !!(g&&!g.hidden)}
  var FONT='font-family:Tahoma,sans-serif;direction:rtl';
  function sheet(html){
    var bg=document.createElement('div');bg.className='adm-x';
    bg.style.cssText='position:fixed;inset:0;background:rgba(20,32,44,.55);z-index:99997;display:flex;align-items:flex-end;justify-content:center;'+FONT;
    bg.innerHTML='<div style="background:#fff;border-radius:20px 20px 0 0;max-width:460px;width:100%;padding:20px 18px calc(18px + env(safe-area-inset-bottom));text-align:center;color:#14202C;box-shadow:0 -6px 30px rgba(0,0,0,.15)">'+html+'</div>';
    bg.addEventListener('click',function(e){if(e.target===bg||e.target.closest('[data-x=close]'))bg.remove()});
    document.body.appendChild(bg);return bg}
  var B='display:block;width:100%;box-sizing:border-box;border:0;border-radius:12px;padding:13px;margin-top:9px;font:700 16px Tahoma,sans-serif;text-decoration:none;cursor:pointer;';
  var BP=B+'background:#C25E14;color:#fff;',BS=B+'background:#fff;color:#14202C;border:1px solid #E1E6EB;font-weight:600;',BG=B+'background:#1FA855;color:#fff;';
  function toast(t){var d=document.createElement('div');d.textContent=t;d.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#14202C;color:#fff;padding:11px 18px;border-radius:12px;font:600 15px Tahoma,sans-serif;z-index:99999;'+FONT;document.body.appendChild(d);setTimeout(function(){d.remove()},3000)}
  function copy(t){(navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(t):Promise.reject()).then(function(){toast('✔ تنسخ الرابط، افتحو في Chrome')}).catch(function(){prompt('انسخ الرابط وافتحو في Chrome:',t)})}

  /* ---------- 1. Sortir du navigateur intégré ---------- */
  function target(){return location.origin+'/'+(sess()?'?login=1':location.search)}
  function intent(u){var x=new URL(u);return 'intent://'+x.host+x.pathname+x.search+'#Intent;scheme=https;package=com.android.chrome;S.browser_fallback_url='+encodeURIComponent(u)+';end'}
  function escSheet(after){
    if(document.querySelector('.adm-esc'))return;
    var u=target();
    var h='<div style="font-size:40px">🚀</div><h3 style="margin:4px 0 6px;font-size:19px">'+(after?'باش توصلك التنبيهات':'افتح ADM Auto في Chrome')+'</h3>'+
      '<p style="margin:0 0 6px;color:#5A6878;line-height:1.7;font-size:14.5px">'+(after?'راك في متصفح فيسبوك/تيك توك، التنبيهات ما تخدمش هنا. ':'متصفح فيسبوك/تيك توك ناقص: التنبيهات ودخول Google ما يخدموش. ')+'ثبّت التطبيق ولا افتح في Chrome'+(sess()?'، وادخل بنفس البريد وكلمة السر (ما تعاودش تسجّل).':'.')+'</p>'+
      (and?'<a style="'+BP+'" href="'+C.apk+'">📲 حمّل تطبيق ADM Auto</a><a style="'+BS+'" href="'+intent(u)+'">🌐 افتح في Chrome</a>':'')+
      (ios?'<p style="margin:8px 0 0;font-size:14px;color:#5A6878">اضغط ⋯ فوق ← «فتح في Safari»</p>':'')+
      '<button style="'+BS+'" data-x="copy">📋 انسخ الرابط</button><button style="'+B+'background:none;color:#8A97A6;font-weight:600;font-size:14px" data-x="close">كمّل هنا</button>';
    var s=sheet(h);s.classList.add('adm-esc');s.querySelector('[data-x=copy]').onclick=function(){copy(u)};
  }
  if(inApp&&!standalone){
    if(and&&ss('adm-esc')!=='1'){ss('adm-esc','1');setTimeout(function(){location.href=intent(location.href)},200)}
    /* une fois au début (avant l'inscription), puis une fois quand il est dans le logiciel */
    var a1=false,a2=false,ti=0,tm=setInterval(function(){
      if(++ti>300){clearInterval(tm);return}
      if(!a1&&document.body&&ss('adm-esc1')!=='1'&&(gateOpen()||inside())){a1=true;ss('adm-esc1','1');setTimeout(function(){escSheet(false)},1500)}
      if(!a2&&inside()&&ss('adm-esc2')!=='1'){a2=true;ss('adm-esc2','1');setTimeout(function(){if(inside())escSheet(true)},4000)}
      if((a1||ss('adm-esc1')==='1')&&(a2||ss('adm-esc2')==='1'))clearInterval(tm);
    },1000);
  }

  /* ---------- 2. ?login=1 : ouvrir directement « تسجيل الدخول » ---------- */
  if(/[?&]login=1/.test(location.search)){
    var lt=0,lg=setInterval(function(){
      if(++lt>120){clearInterval(lg);return}
      var g=document.getElementById('gate');if(!g||g.hidden)return;
      var f=g.querySelector('#gform');if(!f)return;
      if(f.dataset.mode==='signup'){var b=g.querySelector('[data-g="tab-login"]');if(b)b.click();return}
      if(f.dataset.mode==='login'){clearInterval(lg);
        var m=document.createElement('div');m.style.cssText='background:#E6F4EA;color:#17663A;border-radius:10px;padding:10px 12px;font-weight:700;font-size:14px;text-align:center;margin:0 0 12px;'+FONT;
        m.textContent='✔ دوكا ادخل بنفس البريد وكلمة السر لي سجّلت بيهم (ما تعاودش تسجّل)';f.parentNode.insertBefore(m,f);
        try{history.replaceState(null,'',location.pathname)}catch(e){}}
    },500);
  }

  /* ---------- 2b. Notifications : redemander au maximum une fois par 24 h (push.js attend 3 jours) ---------- */
  try{var la=+ls('adm-push-ask')||0;if(la&&Date.now()-la>86400000&&Date.now()-la<3*86400000)ls('adm-push-ask',String(Date.now()-3*86400000-1000))}catch(e){}

  /* ---------- 3. Installer l'application (Chrome Android, hors appli) ---------- */
  var bip=null;window.addEventListener('beforeinstallprompt',function(e){e.preventDefault();bip=e});
  function installSheet(){
    var h='<div style="font-size:40px">📲</div><h3 style="margin:4px 0 6px;font-size:19px">ثبّت ADM Auto في تيليفونك</h3><p style="margin:0 0 6px;color:#5A6878;line-height:1.7;font-size:14.5px">تحلّو بضغطة وحدة كي تطبيق، وتوصلك التنبيهات كل صباح.</p>'+
      (bip?'<button style="'+BP+'" data-x="pwa">✔ ثبّت دوكا</button>':'')+'<a style="'+(bip?BS:BP)+'" href="'+C.apk+'">⬇️ حمّل التطبيق (APK)</a><button style="'+B+'background:none;color:#8A97A6;font-weight:600;font-size:14px" data-x="close">من بعد</button>';
    var s=sheet(h);var p=s.querySelector('[data-x=pwa]');if(p)p.onclick=function(){s.remove();bip.prompt();bip=null};
  }
  if(and&&!inApp&&!standalone){
    var it=0,iv=setInterval(function(){
      if(++it>120){clearInterval(iv);return}
      if(!inside()||document.querySelector('.adm-x'))return;
      if(window.Notification&&Notification.permission==='default'&&Date.now()-(+ls('adm-push-ask')||0)>86400000)return; /* la demande de notif passe d'abord */
      clearInterval(iv);if(Date.now()-(+ls('adm-inst')||0)<3*86400000)return;
      ls('adm-inst',String(Date.now()));setTimeout(function(){if(inside()&&!document.querySelector('.adm-x'))installSheet()},20000);
    },3000);
  }

  /* ---------- 4. Contact : bouton 💬 + écran de connexion + rappels ---------- */
  function contactSheet(rem){
    var wa=C.wa?'https://wa.me/'+C.wa+'?text='+encodeURIComponent(C.waTxt):'';
    var h='<div style="font-size:40px">💬</div><h3 style="margin:4px 0 6px;font-size:19px">'+(rem?'عندك سؤال؟ راحنا هنا':'تواصل معنا')+'</h3><p style="margin:0 0 6px;color:#5A6878;line-height:1.7;font-size:14.5px">لأي معلومة، مساعدة ولا اشتراك، تواصل مع فريق ADM Digital مباشرة.</p>'+
      (wa?'<a style="'+BG+'" href="'+wa+'" target="_blank" rel="noopener">🟢 واتساب</a>':'')+
      '<a style="'+(wa?BS:BP)+'" href="'+C.fb+'" target="_blank" rel="noopener">💬 ماسنجر — صفحة ADM Digital</a>'+
      '<div style="display:flex;gap:8px"><a style="'+BS+'flex:1" href="'+C.ig+'" target="_blank" rel="noopener">📸 إنستغرام</a><a style="'+BS+'flex:1" href="'+C.tt+'" target="_blank" rel="noopener">🎵 تيك توك</a></div>'+
      '<button style="'+B+'background:none;color:#8A97A6;font-weight:600;font-size:14px" data-x="close">غلق</button>';
    sheet(h).classList.add('adm-contact');
  }
  window.ADM_CONTACT=function(){contactSheet(false)};
  var ci=0,cb=setInterval(function(){
    if(++ci>600){clearInterval(cb);return}
    /* bouton dans la barre du haut du logiciel */
    var top=document.querySelector('.chrome .top');
    if(top&&!top.querySelector('.adm-cbtn')){
      var b=document.createElement('button');b.className='btn adm-cbtn';b.type='button';b.title='تواصل معنا';b.setAttribute('aria-label','تواصل معنا');b.textContent='💬';
      b.style.cssText='padding:8px 11px;font-size:18px;line-height:1;margin-inline-start:auto;margin-inline-end:8px';
      b.onclick=function(){contactSheet(false)};var nb=top.querySelector('[data-act="newContract"]');top.insertBefore(b,nb||null);
    }
    /* lien sous la carte de connexion / inscription */
    var g=document.getElementById('gate');
    if(g&&!g.hidden){var card=g.querySelector('.card');if(card&&!card.querySelector('.adm-glink')&&card.querySelector('#gform')){
      var l=document.createElement('button');l.type='button';l.className='lnk adm-glink';l.textContent='💬 عندك سؤال؟ تواصل معنا';
      l.style.cssText='display:block;margin:14px auto 0;background:none;border:0;color:#C25E14;font:700 14.5px Tahoma,sans-serif;cursor:pointer';
      l.onclick=function(){contactSheet(false)};card.appendChild(l)}}
  },1000);
  /* rappels : J+1, J+3, J+6 après la 1re ouverture du logiciel (une seule fois chacun) */
  var ri=0,rt=setInterval(function(){
    if(++ri>200){clearInterval(rt);return}
    if(!inside())return;clearInterval(rt);
    var f=+ls('adm-first')||0;if(!f){ls('adm-first',String(Date.now()));return}
    var days=(Date.now()-f)/86400000,done=(ls('adm-rem')||'').split(','),due=null;
    for(var i=0;i<C.rem.length;i++)if(days>=C.rem[i]&&done.indexOf(String(C.rem[i]))<0)due=C.rem[i];
    if(due===null)return;
    setTimeout(function(){if(!inside()||document.querySelector('.adm-x'))return;
      for(var j=0;j<C.rem.length;j++)if(C.rem[j]<=due&&done.indexOf(String(C.rem[j]))<0)done.push(String(C.rem[j]));
      ls('adm-rem',done.filter(Boolean).join(','));contactSheet(true)},45000);
  },3000);
}catch(e){}})();
