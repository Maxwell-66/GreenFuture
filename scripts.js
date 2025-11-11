document.addEventListener('DOMContentLoaded',()=>{
  ['year','year2','year3','year4','year5'].forEach(id=>{const el=document.getElementById(id); if(el) el.textContent=new Date().getFullYear();});
  const form=document.getElementById('contactForm'); if(form){ form.addEventListener('submit',e=>{ e.preventDefault(); document.getElementById('formMsg').textContent='Thank you — demo form (no email sent).'; form.reset(); }); }

  // simple parallax on hero
  const hero = document.getElementById('hero');
  if(hero){
    window.addEventListener('scroll', ()=>{
      const sc = window.scrollY;
      hero.style.backgroundPositionY = `${sc * 0.2}px`;
    });
  }
});