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
