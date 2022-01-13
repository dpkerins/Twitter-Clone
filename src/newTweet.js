import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CreateTweet(props) {
  const { tweetList, setTweetList } = props;

  const createTweetObject = (event) => {
    event.preventDefault();
    const tweetContent = event.target.tweetField.value;
    if (tweetContent !== '') {
      setTweetList([tweetContent].concat(tweetList));
      event.target.tweetField.value = '';
    }
    console.log(props.tweetList);
  }

  return (
    <form onSubmit = {createTweetObject}>
      <TextField id="standard-basic" variant="standard" name="tweetField" placeholder="What's happening?" />
      <Button type="submit" variant="contained" name="tweetButton">Tweet</Button>
    </form>
  )
}