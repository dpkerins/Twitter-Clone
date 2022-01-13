export default function Tweet(props) {

  return (
    <div>
      <span>{props.tweet.user} </span>
      <strong><span>{props.tweet.content}</span></strong>
      <span>{props.tweet.date} </span>
    </div>
  )
}