$(document).ready(function() {
  $('.row-products').each(function(){
    let name = $(this).find('.name-product').html()
    let id = $(this).find('.auction-id').html()
    let price = $(this).find('.bid-price').html()
    let image = $(this).find('.prod2').attr('src')
    let times_count = $(this).find('.bid-timer')
    let mess = $(this).find('.mess')
    let btn = $(this).find('.bid_auction')

    /*------------- Count dowm times set auction --------------*/
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

    // <!--------------- Change value of every product ----------------- >
    $(this).find('.bid_auction').on('click', function() {
      times_count.clone().appendTo('.times').countdown(times_count.data('countdown'), function(event) {
        let set_date = event.strftime('%D : %H : %M : %S')
        $(this).html(set_date)
      })
      $('.paypal').find('.name').html(name)
      $('.paypal').find('.price').html(price)
      $('.paypal').find('.paypal__subheader-wrapper').attr('src', image)
      $('.paypal').slideToggle("slow")
    })
    // Closed modals
    $('.closed-button').on('click', function() {
      $('.paypal').hide()
      $('.paypal').find('.bid-timer').remove()
    })
  })


  // Disable button bid
  $.prototype.disable = function () {
    $.each(this, function (index, el) {
      $(el).attr('disabled', true).css('background', 'grey')
    });
  }
})