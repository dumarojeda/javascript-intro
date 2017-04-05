$(document).ready(function() {
  // Ajax for vote post
  $('.vote-button').on('click', function (e) {
    e.preventDefault();
    thisButton = this
    $.ajax({
      method: "GET",
      url: thisButton.href
    }).done(function (response) {
      $(thisButton).parent().find('.points').html(response.value)
      $(thisButton).addClass('active')
      console.log("Lo lograste!")
    }).error(function (response) {
      console.log("La cagaste!")
    })
  })

  //Ajax for create post
  $('form').on('submit', function (e) {
    e.preventDefault();
    form = this
    urlForm = form.action
    form.serialize()
    $.ajax({
      method: "POST",
      url: urlForm
    })
  })
});
