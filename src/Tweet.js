export default function Tweet(props) {

  return (
    <div>
      <span>{props.tweet.user.handle} </span>
      <strong><span>{props.tweet.body}</span></strong>
      <span>{props.tweet.updated_at} </span>
    </div>
  )
}