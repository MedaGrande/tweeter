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
  let tweetHTML = `<article>
          <header class="tweet">
            <span><img src="${tweetData.user.avatars}"></img> ${tweetData.name}</span>
            <p class="statement">${tweetData.content}</p>
            <span class="handle">${tweetData.handle}</span>
          </header>
          <footer>
            <span>${tweetData.created_at}</span>
              <div class="icons">
                <i id="flag" class="fa-solid fa-flag" ></i>
                <i id="retweet" class="fa-solid fa-retweet"></i> 
                <i id="heart" class="fa-solid fa-heart"></i>
              </div>
          </footer>
        </article>`;
  console.log(tweetHTML);
}

const renderTweets = function (tweets) {
  let tweetsContainer = $(".tweet-element").html("");
  
  for (const data of tweets) {
    let tweetElement = createTweetElement(data)
    // console.log(tweetElement);
    tweetsContainer.prepend(tweetElement);
  }
}
//renderTweets();
createTweetElement(tweetData);