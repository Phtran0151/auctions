$('#updateProfile').submit(function(event){
  event.preventDefault();
  // get value of profile users
  let url = $(this).attr("action")
  let avatar = $('#upload').prop('files')[0].name
  let birthday = new Date($('#pets-birthday').val())
  let gender = $("input[name=gender]:checked").val()
  $.ajax({
    url: url,
    type: 'POST',
    data: { avatar: avatar, gender: gender, birthday: birthday },
    dataType: 'html',
    complete: function() {
      console.log('process complete');
    },
    success: function(data) {
      console.log('process sucess');
    },
    error: function() {
      console.log('process error');
    }
  });
})