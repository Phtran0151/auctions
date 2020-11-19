$(document).ready(function(){
  $('.removeItems').each(function() {
    $(this).on('click', function() {
      let id = $(this).attr('data-id')
      $.ajax({
        url: "/productsAll/"+id,
        type: "DELETE",
        dataType: "json",
        data: { id: id },
        contentType: "application/json",
        cache: false,
        timeout: 5000,
        complete: function() {
          //called when complete
          console.log('process complete');
        },
        success: function(data) {
          console.log(data);
          console.log('process sucess');
        },
        error: function() {
          // window.location.reload();
          console.log('process error');
        }
      });
    })
  })
});