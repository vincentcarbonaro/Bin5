$(function () {

  $('nav ul li').click(function () {

    $('.content').children().each(function () {
      $(this).toggle(false)
    })

    $('#' + this.classList[0]).toggle(true)

  })

})
