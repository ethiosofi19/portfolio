$("#menu").on("click", () => {
  $("#lists-cont").slideToggle(700);
});

$("#login-btn").on("click", () => {
  alert("Server isn't working! please try again.");
});

$("form").on("submit", function (e) {
  e.preventDefault();
  let name = $("input[name='name']").val();
  let email = $("input[name='email']").val();
  let message = $("input[id='message']").val();

  if (name != 0 && email != 0) {
    alert("Thankyou, " + name);
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Message: " + message);
  } else {
    $("input").css({
      "border-bottom": "solid 2px red",
      "background-color": "rgba(255, 192, 203, 0.537)",
    });
  }
});

$("input").on("focus", () => {
  $("input").css({
    outline: "none",
  });
});
