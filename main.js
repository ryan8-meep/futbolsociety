// highlight active nav link
(function(){
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a=>{
    const href = a.getAttribute('href');
    if ((here === '' && href === 'index.html') || href === here) {
      a.classList.add('active');
    }
  });
})();
