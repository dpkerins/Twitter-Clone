import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import useTweetCreator from './hooks/useTweetCreator'

export default function CreateTweet(props) {
  // const { tweetList, setTweetList } = props;

  const createTweetObject = (event) => {
    event.preventDefault();
    const tweetUser = event.target.username.value;
    const tweetContent = event.target.tweetField.value;
    const newTweet = {
      user_id: tweetUser,
      body: tweetContent
    }
    if (tweetContent !== '') {
      // setTweetList([newTweet].concat(tweetList));
      useTweetCreator(newTweet);
      event.target.tweetField.value = '';
    }
    console.log(props.tweetList);
  }

  return (
    <form onSubmit={createTweetObject}>
      <input type="text" placeholder="username" name="username"></input>
      <TextField id="standard-basic" variant="standard" name="tweetField" placeholder="What's happening?" />
      <Button type="submit" variant="contained" name="tweetButton">Tweet</Button>
    </form>
  )
}