$(document).ready(function() {
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
    });
  })
});
