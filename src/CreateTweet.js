import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
    const tweetUser = currentUser;
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
    <Stack id="new-tweet" onSubmit={createTweetObject}
      component="form"
      direction="row"
      sx={{ width: '100%', my: 2 }}
    >
      <TextField id="new-tweet-field" variant="standard" name="tweetField" placeholder="What's happening?"
        sx={{ width: '100%', pr: 2 }}
        justifyContent="space-between"
      />
      <Button type="submit" variant="contained" name="tweetButton">Tweet</Button>
    </Stack>
  )
}