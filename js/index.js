$(document).ready(function() {
  $("#submission-success").hide();
  $("#submit-guestbook").click(function() {
    var name = $("#guestbook-name").val();
    var message = $("#guestbook-textarea").val();
    $('#submission-name').text(name);
    $("#submission-message").text(message);
    alert("Submitted.");
    $("#submission").fadeIn();
    $("#submit-form").fadeOut(function(){
      $("#submission-success").fadeIn();
    });
  });
});