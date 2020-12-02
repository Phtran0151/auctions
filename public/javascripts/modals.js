$('.row-products').each(function(){
  let name = $(this).find('.name-product').html()
  let id = $(this).find('.auction-id').html()
  let price = $(this).find('.bid-price').html()
  let times = $(this).find('.bid-timer').clone()
  let image = $(this).find('.prod2').attr('src')

  // <!--------------- Change value of every product ----------------- >
  $(this).find('.bid_auction').on('click', function() {
    $('.paypal').find('.name').html(name)
    $('.paypal').find('.price').html(price)
    // $(times).add(times).appendTo($('.paypal').find('.times'))
    $('.paypal').find('.paypal__subheader-wrapper').attr('src', image)
    $('.paypal').slideToggle("slow")
  })
})

// Closed modals
$('.closed-button').click(function() {
  $('.paypal').hide()
})