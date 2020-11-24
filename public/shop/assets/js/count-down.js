/*------------- Count dowm times set auction --------------*/
$('.bid-timer').each(function() {
  let finalDate = $(this).data('countdown');
  // Countdown every element
  $(this).countdown(finalDate, function(event) {
    let set_date = event.strftime('%D : %H : %M : %S')
    $(this).html(set_date)
    // If every element expired times
    if (set_date === '00 00 : 00 : 00') {
      $('.mess').each(function(){
        $(this).html('EXPIRES').css({
          'color': '#e3aa84',
          'background': '#84e3e3',
          'border': '1px solid #425447',
          'border-radius': '5px'
        })
      })
    }
  });
});