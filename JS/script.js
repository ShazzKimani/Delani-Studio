$('.main').click(function() {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});

$("button").click(function (kami) {
  var user = document.getElementById('user').value;
  alert( user+' we have received your message' + '. Thank you');
  kami.preventDefault();
});

$("button").on('click', function() {
  $('form').each(function() {
    this.reset();
  });
});

$(document).ready( function() {

  $('.portfolio-item').hover( function() {
      $(this).children('p').fadeToggle(500);
  })
  
});





