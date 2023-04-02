//composer character counter handling
$(document).ready(function() {
  const textarea = document.getElementById("tweet-text");
  const maxCharacterAllowed = 140;
  let characterLeft = 0;//counter decreases as text is input
  $(textarea).on("input", function() {
    const text = $(this).val();
    if (text.length > maxCharacterAllowed) {
      characterLeft = maxCharacterAllowed - text.length;
    } else {
      characterLeft = maxCharacterAllowed - text.length;
    } //counter changes color if character exceeds max
    if (characterLeft < 0) {
      $(".counter").html(characterLeft);
      $(".counter").css("color", "red");
    } else {//counter color reverts to black as text is deleted
      $(".counter").html(characterLeft);
      $(".counter").css("color", "rgb(67, 66, 66)");
    }
  });
});