import './App.css';
import CreateTweet from './newTweet';
import { useState } from 'react';

function App() {
  const [tweetList, setTweetList] = useState([]);

  return (
    <div className="App">
      <CreateTweet tweetList={tweetList} setTweetList={setTweetList}/>
    </div>
  );
}

export default App;
