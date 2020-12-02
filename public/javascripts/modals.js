$('.bid_auction').on('click', function() {
  $('.auction-item').each(function(){
    console.log('msg')
  })
  $('.paypal').slideToggle("slow")
  // $("body").toggleClass("blur-body").not('.paypal')
})

// Closed modals
$('.closed-button').click(function() {
  $('.paypal').hide()
})