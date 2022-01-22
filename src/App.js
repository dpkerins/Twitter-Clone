import './App.css';
import CreateTweet from './newTweet';
import Feed from './Feed';
import { useState } from 'react';
import useTweets from './hooks/useTweets';

function App() {
  const [tweetList, setTweetList] = useTweets();
  console.log(tweetList);

  return (
    <div className="App">
      <CreateTweet tweetList={tweetList} setTweetList={setTweetList} />
      <Feed tweetList={tweetList}/>
    </div>
  );
}

export default App;
