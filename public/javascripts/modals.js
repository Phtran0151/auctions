$('.row-products').each(function(){
  let name = $(this).find('.name-product').html()
  let id = $(this).find('.auction-id').html()
  let price = $(this).find('.bid-price').html()
  let times = $(this).find('.bid-timer').html()
  let image = $(this).find('.prod2').attr('src')
  $(this).find('.bid_auction').one('click', function() {
    //<!--------------- Change value of every product ---------- >
    console.log(price)
    $('.paypal').find('.name').html(name)
    $('.paypal').find('.price').html(price)
    $('.paypal').find('.times').html(times)
    $('.paypal').find('.paypal__subheader-wrapper').attr('src', image)
    $('.paypal').slideToggle("slow")
  })
})

// Closed modals
$('.closed-button').click(function() {
  $('.paypal').hide()
})