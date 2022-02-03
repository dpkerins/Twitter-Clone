import Tweet from './Tweet';
import Stack from '@mui/material/Stack';

export default function Feed(props) {
  const { tweetList } = props;
  const tweetDivList = tweetList.map((tweet) => {
    return (
      <Tweet tweet={tweet} key={tweet.id}/>
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