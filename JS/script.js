$('.main').click(function() {
  $(this).children('.hide').slideToggle(1200);
  $(this).children('.show').toggle(1500);
});

$("button").click(function (kami) {
  var client = document.getElementById('client').value;
  alert( client +' we have received your message' +'Thank you');
  kami.preventDefault();
});

$("button").on('click', function() {
  $('form').each(function() {
    this.reset();
  });
});

$(document).ready( function() {

  $('.what').hover( function() {
      $(this).find('.img-fluid').fadeTo(300);
  }, function() {
      $(this).find('.img-fluid').fadeTo(100);
  });
  
});

// $(".what").hover(function () {
//   $(this).children(".want").fadeToggle(1000, "linear");
// });


