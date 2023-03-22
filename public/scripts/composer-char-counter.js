
$(document).ready(function () {
  const textarea = document.getElementById("tweet-text");
  const maxCharacterAllowed = 140;
  let characterLeft = 0;
  $(textarea).on("input", function () {
    const text = $(this).val();
    console.log(this);
    if (text.length > maxCharacterAllowed) {
      characterLeft = maxCharacterAllowed - text.length;
    } else {
      characterLeft = maxCharacterAllowed - text.length;
    }
    if (characterLeft < 0) {
      $(".counter").html(characterLeft);
      $(".counter").css("color", "red");
    } else {
      $(".counter").html(characterLeft);
      $(".counter").css("color", "rgb(67, 66, 66)");
    }
  })
});