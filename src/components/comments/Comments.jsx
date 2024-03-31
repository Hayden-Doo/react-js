import React from 'react'

const Comments = () => {
  const users = [
    {
      name: 'winter',
      avatarUrl: 'https://assets.chatgpt4google.com/assets/promo/43.gif',
    },
    {
      name: 'fall',
      avatarUrl:
        'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    },
  ]

  const comments = [
    {
      user: users[0],
      text: 'This is a comment from winter.',
      date: '2023.10.10',
    },
    {
      user: users[1],
      text: 'This is a comment from fall.',
      date: '2023.11.23',
    },
  ]

  return (
    <>
      <div>
        <h2>Comments</h2>
        {comments.map((item, index) => (
          <Comment key={index} data={item} />
        ))}
      </div>
    </>
  )
}
const UserInfo = (props) => {
  // props.user = user1, user2

  // props.user.name = winter, fall
  return (
    <div>
      <img src={props.user.avatarUrl} alt={props.user.name} />
      <div>{props.user.name}</div>
    </div>
  )
}
const Comment = (props) => {
  // const { data } = props
  return (
    <>
      <div>
        <UserInfo user={props.data.user} />
        <div>{props.data.text}</div>
        <div>{props.data.date}</div>
      </div>
    </>
  )
}

export default Comments
