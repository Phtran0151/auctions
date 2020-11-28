/*------------- Count dowm times set auction --------------*/
$('.bid-timer').each(function() {
  let finalDate = $(this).data('countdown');
  // Countdown every element
  $(this).countdown(finalDate, function(event) {
    let set_date = event.strftime('%D : %H : %M : %S')
    $(this).html(set_date)
    // If every element expired times
    if (set_date === '00 : 00 : 00 : 00') {
      $(this).html('EXPIRES').css({
        'color': '#e60000'
      })
    }
  });
});