$(document).ready(function(){
  $('.removeItems').each(function() {
    $(this).on('click', function() {
      let id = $(this).attr('data-id')
      $.ajax({
        url: `/removeProducts/${window.location.href.split("productsAll/")[1]}`,
        type: "GET",
        dataType: "html",
        data: {_id : id},
        contentType: "application/xml",
        timeout: 1000,
        complete: function() {
          console.log('process complete');
        },
        success: function(data) {
          console.log(data);
          console.log('process sucess');
        },
        error: function() {
          console.log('process error');
        },
      });
    })
  })
});