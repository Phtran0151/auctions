$('.product__price').each(function(){
  $(this).text($(this).html().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","))
})