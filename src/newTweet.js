import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CreateTweet(props) {
  const { tweetList, setTweetList } = props;

  const createTweetObject = (event) => {
    event.preventDefault();
    const tweetContent = event.target.tweetField.value;
    if (tweetContent != '') {
      const newTweetList = tweetList;
      newTweetList.push(tweetContent)
      setTweetList(newTweetList);
      event.target.tweetField.value = '';
    }
    console.log(tweetList);
  }

  return (
    <form onSubmit = {createTweetObject}>
      <TextField id="standard-basic" variant="standard" name="tweetField" placeholder="What's happening?" />
      <Button type="submit" variant="contained" name="tweetButton">Tweet</Button>
    </form>
  )
}