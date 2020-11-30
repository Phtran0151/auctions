$('.bid_auction').on('click', function() {
  $('.paypal').css({
    'display': 'inline-block'
  })
})

// Closed modals
$('.closed-button').click(function() {
  $('.paypal').hide()
})