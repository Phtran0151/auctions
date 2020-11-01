module.exports = `<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
                  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
                  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                  <script type="text/javascript">
                    $(document).ready(function(){
                        $("#preview").attr("scrolling", "no");
                      // Fullscreen preview
                        $("#myModal").on('show.bs.modal', function(event){
                            $(this).find(".modal-body").html('<iframe src="bootstrap/simple-success-confirmation-popup.php" frameborder="0" class="fullscreen"></iframe>');
                        });
                    });
                  </script>
                  <div id="myModal" class="modal fade in" style="display: block;">
                    <div class="modal-dialog modal-confirm">
                      <div class="modal-content">
                        <div class="modal-header">
                          <div class="icon-box">
                            <i class="material-icons"></i>
                          </div>
                          <h4 class="modal-title">Successful</h4>
                        </div>
                        <div class="modal-body">
                          <p class="text-center">Thank you for trusting us</p>
                        </div>
                        <div class="modal-footer">
                          <a href="/users/register" class="btn btn-success btn-block" id="countTime" data-dismiss="modal">Return to the home page (after 10 seconds)</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <script src="../javascripts/users/countdown.js"></script>`