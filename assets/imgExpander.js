$(document).ready(function() {

  $("td #thumbnailImage").on("click", function() {
    var src = $(this).attr('src')
    var img = "<img class='expanded' src='" + src + "' ></img>"
    $('.largeImage-container').append(img)
    $('.modal').fadeIn()

  })

  $('.largeImage-container').click(function() {
    $('.largeImage-container').empty()
    $('.modal').fadeOut()
  })

  $('.modal').click(function() {
    $('.largeImage-container').empty()
    $('.modal').fadeOut()
  })

})
