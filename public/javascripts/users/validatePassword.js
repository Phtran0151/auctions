$('$#pass, #con_pass').on('keyup', function () {
  if ($('#pass').val() == $('#con_pass').val()) {
    $('#message').html('Matching').css('color', 'green');
  } else
    $('#message').html('Not Matching').css('color', 'red');
});