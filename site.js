$(function () {

  $('nav ul li').click(function () {

    $('.random').each(function () {
      $(this).toggle(false)
    })

    $('#' + this.classList[0]).toggle(true)

  })

})
