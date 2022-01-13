import Tweet from './Tweet';

export default function Feed(props) {
  const { tweetList } = props;
  const tweetDivList = tweetList.map((tweet) => {
    return (
      <Tweet tweet={tweet} />
    )
  })

  return (
    <div>
      {tweetDivList}
    </div>
  )
}