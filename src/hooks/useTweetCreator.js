const useTweetCreator = (newTweet) => {
  const getAllTweets = async () => {
    const url = 'https://chitter-backend-api-v2.herokuapp.com/peeps';

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token token=a_valid_session_key'
      },
      body: {
        user_id: 1,
        body: JSON.stringify(newTweet.body)
      }
    });
    const json = await res.json();

  }
};

export default useTweetCreator;
