var $ = require('jquery');
$(document).ready(function () {
  $('.fa-times').hide();

  $('.help').click(function () {
    $('.fa-comment-alt').toggle();
    $('.fa-times').toggle();
  })
})
