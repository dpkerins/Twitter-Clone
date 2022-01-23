import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CreateTweet(props) {

  const createTweet = async (newTweet) => {
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
  };

  const createTweetObject = (event) => {
    event.preventDefault();
    const tweetUser = event.target.username.value;
    const tweetContent = event.target.tweetField.value;
    const newTweet = {
      user_id: tweetUser,
      body: tweetContent
    }
    if (tweetContent !== '') {
      createTweet(newTweet);
      event.target.tweetField.value = '';
    }
  }

  return (
    <form onSubmit={createTweetObject}>
      <input type="text" placeholder="username" name="username"></input>
      <TextField id="standard-basic" variant="standard" name="tweetField" placeholder="What's happening?" />
      <Button type="submit" variant="contained" name="tweetButton">Tweet</Button>
    </form>
  )
}