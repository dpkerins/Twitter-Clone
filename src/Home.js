import CreateTweet from './newTweet';
import Feed from './Feed';
import useTweets from './hooks/useTweets';

export default function Home() {
  const [tweetList, setTweetList] = useTweets();

  return (
    <div>
      <CreateTweet tweetList={tweetList} setTweetList={setTweetList} />
      <Feed tweetList={tweetList}/>
    </div>
  )
}