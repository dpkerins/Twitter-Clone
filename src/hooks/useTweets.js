import { useState, useEffect } from 'react';

const useTweets = () => {
  const [tweets, setTweets] = useState([]);

  const getAllTweets = async () => {
    const url = 'https://chitter-backend-api-v2.herokuapp.com/';

    const res = await fetch(url, { method: 'GET' });
    const json = await res.json();

    setTweets(json);
  }
  useEffect(() => getAllTweets(), []);

  return [tweets];
};

export default useTweets;
