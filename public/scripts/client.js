/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  loadTweets();
  
  $(".tweet-form").submit(function (event) {
    event.preventDefault();
    const serializedTweet = $(this).serialize();
    $.post("/tweets", serializedTweet)
      .then(() => {
        loadTweets();
        // $("tweet-text")[0].reset();
      })
  });

})


const createTweetElement = function (tweetData) {
  const tweetHTML = `<article>
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

  return tweetHTML
}

const renderTweets = function (tweets) {

  const section = $('.tweet-element')
  for (const data of tweets) {
    const tweetElement = createTweetElement(data)

    section.prepend(tweetElement);
  }
}

const loadTweets = function () {
  $.ajax('/tweets', { method: 'GET' })
    .then(function (tweets) {
      renderTweets(tweets);
    });
};
