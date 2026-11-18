(function(){
  var buttons = document.querySelectorAll('.toggle button');
  var cards = document.querySelectorAll('.card');
  function render(cycle){
    buttons.forEach(function(b){ b.setAttribute('aria-pressed', String(b.dataset.cycle === cycle)); });
    cards.forEach(function(card){
      var amount = card.querySelector('.amount');
      var m = Number(amount.dataset.monthly), y = Number(amount.dataset.yearly);
      amount.textContent = '$' + (cycle === 'yearly' ? y : m);
      card.querySelector('.period').textContent = cycle === 'yearly' ? 'per year' : 'per month';
      card.querySelector('.note').textContent = cycle === 'yearly'
        ? 'Save $' + (m * 12 - y) + ' a year compared with monthly'
        : 'Billed monthly, cancel anytime';
    });
  }
  buttons.forEach(function(b){ b.addEventListener('click', function(){ render(b.dataset.cycle); }); });
  render('monthly');
})();
