import CreateTweet from './CreateTweet';
import Feed from './Feed';
import useTweets from './hooks/useTweets';
import Stack from '@mui/material/Stack';

export default function Home(props) {
  const [tweetList, setTweetList] = useTweets();
  const currentSession = props.currentSession;
  const currentUser = props.currentUser;

  return (
    <Stack
      alignItems="center"
    >
      <CreateTweet currentSession={currentSession} currentUser={currentUser}/>
      <Feed tweetList={tweetList} currentSession={currentSession} currentUser={currentUser}/>
    </Stack>
  )
}