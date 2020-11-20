$(document).ready(function(){
  $('.removeItems').each(function() {
    $(this).on('click', function() {
      let id = $(this).attr('data-id')
      $.get(`/removeProducts/${window.location.href.split("productsAll/")[1]}`, {_id: id}, function(data, textStatus, xhr) {
        if(typeof data === "string"){
          location.reload();
        }
      });
    })
  })
});