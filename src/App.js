import './App.css';
import CreateTweet from './newTweet';
import Feed from './Feed';
import { useState } from 'react';

function App() {
  const [tweetList, setTweetList] = useState([]);

  return (
    <div className="App">
      <CreateTweet tweetList={tweetList} setTweetList={setTweetList} />
      <Feed tweetList={tweetList}/>
    </div>
  );
}

export default App;
