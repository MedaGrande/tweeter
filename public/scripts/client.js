/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  loadTweets();
  $("#tweet-check").hide();//empty tweet handler
  $("#char-check").hide();//character exceeding tweet handler

  $(".tweet-form").submit(function(event) {
    event.preventDefault();
    const serializedTweet = $(this).serialize();
    //empty tweet check
    if ($("#tweet-text").val() === "") {
      $("#tweet-check").show();
      $("#tweet-check").html("**Empty tweets cannot be submitted!");
      $("#tweet-check").css("color", "red");
      //check for tweets exceeding permitted character count
    } else if ($("#count-down").val() < 0) {
      $("#char-check").show();
      $("#char-check").html("**Tweet should not exceed 140 characters!");
      $("#char-check").css("color", "red");
    } else {
      $.post("/tweets", serializedTweet)
        .then(() => {
          loadTweets();
          $("#tweet-text").val("");
          $("#tweet-check").hide();
          $("#char-check").hide();
        });
    }
  });

});

//tweet html
const createTweetElement = function(tweetData) {
  const tweetHTML =
  `<article>
    <header class="tweet-header"> 
      <div> 
        <img class="avatar" alt='profile-picture' src='${tweetData.user.avatars}' /> 
        ${tweetData.user.name}
      </div>
      <h3>${tweetData.user.handle}</h3>
    </header>
    <textarea>${tweetData.content.text}</textarea>
    <div class="line"></div>
    <footer>
        <span>${timeago.format(tweetData.created_at)}</span>
        <div class="icons">
          <i id="flag" class="fa-solid fa-flag"></i>
          <i id="retweet" class="fa-solid fa-retweet"></i> 
          <i id="heart" class="fa-solid fa-heart"></i>
        </div>
    </footer>
  </article>`;

  return tweetHTML;
};

//display tweets
const renderTweets = function(tweets) {

  const section = $('.tweet-element');
  for (const data of tweets) {
    const tweetElement = createTweetElement(data);
    //show latest tweet on top
    section.prepend(tweetElement);
  }
};

//tweet post
const loadTweets = function() {
  $.ajax('/tweets', { method: 'GET' })
    .then(function(tweets) {
      renderTweets(tweets);
    });
};
