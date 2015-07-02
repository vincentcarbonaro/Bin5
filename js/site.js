$(function () {

  $('nav ul li').click(function () {
    $('.content').children().each(function () {
      $(this).toggle(false);
    });

    $('#' + this.classList[0]).toggle(true);
    if(this.classList[0] == "about") {
      $('.parallax-mirror').toggle(true);
    } else {
      $('.parallax-mirror').toggle(false);
    }
  });

});
