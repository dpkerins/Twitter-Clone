import CreateTweet from './CreateTweet';
import Feed from './Feed';
import useTweets from './hooks/useTweets';

export default function Home(props) {
  const [tweetList, setTweetList] = useTweets();
  const currentSession = props.currentSession;
  const currentUser = props.currentUser;

  return (
    <div>
      <CreateTweet currentSession={currentSession} currentUser={currentUser}/>
      <Feed tweetList={tweetList}/>
    </div>
  )
}