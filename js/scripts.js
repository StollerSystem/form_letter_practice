$(document).ready(function() {
  // inside ready function 
  $("#formOne").submit(function(event) {
    let userInput = $("input#userName").val();
    $(".name").text(userInput.toUpperCase() + "!!!!!!!");
    $(".letter").show();
    event.preventDefault();
  });
});
