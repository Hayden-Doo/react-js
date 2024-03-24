// function Article(props) {
function Article({title, des}) {
  // const {title, des} = props
  // const {...props} = props

  return (
    <article>
      {/* <h2>{props.title}</h2>
      <p>이 페이지는 {props.des} 입니다.</p> */}
      <h2>{title}</h2>
      <p>이 페이지는 {des} 입니다.</p>
    </article>
  )
}
export default Article