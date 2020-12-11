function previewFile(input){
  let file = $("input[type=file]").get(0).files[0];
  if(file){
    let reader = new FileReader();
    reader.onload = function(){
      $(".avatar").attr("src", reader.result);
    }
    reader.readAsDataURL(file);
  }
}

$(function(){
  $('#pets-birthday').datetextentry({
    min_year         : '1900',
    max_date         : function() { return this.get_today(); },
    max_date_message : 'Date must not be in the future'
  })
})