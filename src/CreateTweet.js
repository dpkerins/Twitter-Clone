import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function CreateTweet(props) {
  const currentSession = props.currentSession;
  const currentUser = props.currentUser;

  const createTweet = async (newTweet) => {
    var myHeaders = {
      "Content-Type": "application/json",
      "Authorization": `Token token=${currentSession}`
    };

    var raw = JSON.stringify({
      "peep": {
        "user_id": currentUser,
        "body": newTweet.body
      }
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    console.log(requestOptions);

    fetch("https://chitter-backend-api-v2.herokuapp.com/peeps", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
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