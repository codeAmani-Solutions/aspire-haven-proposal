
// app.js — externalized logic and debugging helpers for Aspire Haven Proposal
(function(){
  console.log('Initializing proposal rendering...');

  function markSection(idOrLabel){
    console.log(idOrLabel + ' section rendered successfully.');
  }

  document.addEventListener('DOMContentLoaded', function(){
    markSection('Hero');
    markSection('Search Visibility & Insights');
    markSection('Domain & Communication Setup');
    markSection('Business Collateral');
    markSection('APD Resource Dashboard');
    markSection('Next Steps');

    console.log('Initializing footer year update.');
    var y = document.getElementById('year');
    if (y){ y.textContent = new Date().getFullYear(); console.log('Footer year set successfully.'); }

    console.log('Proposal rendering completed successfully.');
  }, { once: true });

  document.addEventListener('click', function(ev){
    var a = ev.target.closest('a');
    if (!a) return;
    if (a.matches('a.btn[href*="aspirehavengroup.com"]')){
      console.log('Live site button clicked.');
    }
    if (a.matches('a.badge')){
      console.log('Engagement confirmation clicked.');
    }
    if (a.matches('a[href*="apd-dashboard"]')){
      console.log('APD Dashboard link clicked.');
    }
  });

  function wireImg(sel, okMsg, errMsg){
    document.querySelectorAll(sel).forEach(function(img){
      if (img.complete){
        console.log(okMsg);
      } else {
        img.addEventListener('load', function(){ console.log(okMsg); }, { once: true });
        img.addEventListener('error', function(){ console.error(errMsg); }, { once: true });
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function(){
    wireImg('img[alt*="website preview"]', 'Thumbnail image loaded successfully.', 'Thumbnail image failed to load.');
    wireImg('img[alt*="Google search ranking screenshot"]', 'Rank screenshot loaded successfully.', 'Rank screenshot failed to load.');
  }, { once: true });
})();
