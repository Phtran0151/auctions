$('#bidder_auction').submit(function(event){
  event.preventDefault();
  // get value of all products & actions
  let url = $(this).attr("action")
  let name = $('.name').text()
  let price = $('.price').text().split('$')[1]
  let images = $('.images_bid').attr('src')
  let times = Date.now();
  let bid_price = $('.bid_price').val()
  $.ajax({
    url: '/auctions',
    type: 'POST',
    data: { name: name, price: price, images: images, bid_price: bid_price, times: times },
    dataType: 'html',
    complete: function() {
      console.log('process complete');
    },
    success: function(data) {
      // window.location.load(`auctions?/${window.location.split('?')[1]}/bidders`)
      console.log('process sucess');
    },
    error: function() {
      console.log('process error');
    }
  });
})