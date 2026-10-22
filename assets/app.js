document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>document.querySelector('.nav').classList.remove('open')));
document.querySelectorAll('.faq details').forEach(d=>d.addEventListener('toggle',()=>{const s=d.querySelector('summary span');if(s)s.textContent=d.open?'−':'+';}));