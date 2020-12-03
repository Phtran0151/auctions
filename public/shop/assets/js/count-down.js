/*------------- Count dowm times set auction --------------*/

$('.row-products').each(function() {
  let times_count = $(this).find('.bid-timer')
  let btn = $(this).find('.bid_auction')
  let mess = $(this).find('.mess')
  times_count.countdown(times_count.data('countdown'), function(event) {
    let set_date = event.strftime('%D : %H : %M : %S')
    $(this).html(set_date)
    // If every element expired times
    if (set_date === '00 : 00 : 00 : 00') {
      mess.html("The auction time has ended")
      btn.disable();
      $(this).text('EXPIRES').css('color', '#e60000')
    }
  });
})

$.prototype.disable = function () {
  $.each(this, function (index, el) {
    $(el).attr('disabled', true).css('background', 'grey')
  });
}