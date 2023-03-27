/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1679610690713
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1679697090713
  }
]

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
              <span>${tweetData.created_at}</span>
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
  // let tweetsContainer = $(".tweet-element").html("");
  const section = $('.tweet-element')
  for (const data of tweets) {
    const tweetElement = createTweetElement(data)
    // console.log(tweetElement);
    section.append(tweetElement);
  }
}

$(document).ready(function() {
  renderTweets(tweetData)
})
//renderTweets();
