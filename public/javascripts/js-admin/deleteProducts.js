$(document).ready(function(){
  $('.removeItems').each(function() {
    $(this).on('click', function() {
      let id = $(this).attr('data-id')
      $.ajax({
        url: `/removeProducts/${window.location.href.split("productsAll/")[1]}`,
        type: "GET",
        data: {_id: id},
        complete: function() {
          console.log('process complete');
        },
        success: function(data) {
          location.reload()
          console.log('process sucess');
        },
        error: function() {
          console.log('process error');
        },
      });
    })
  })
});