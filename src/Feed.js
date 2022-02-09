import Tweet from './Tweet';
import Stack from '@mui/material/Stack';

export default function Feed(props) {
  const { tweetList, currentUser, currentSession } = props;
  const tweetDivList = tweetList.map((tweet) => {
    return (
      <Tweet tweet={tweet} currentSession={currentSession} currentUser={currentUser} key={tweet.id}/>
    )
  })

  return (
    <Stack
      alignItems="center"
      spacing={2}
      sx={{ width: '100%' }}
    >
      {tweetDivList}
    </Stack>
  )
}