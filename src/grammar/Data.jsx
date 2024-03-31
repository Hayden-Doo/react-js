function Data() {
  let a = 1
  a = 2
  console.log('a', a)

  const b = 10
  // b = 20;
  console.log('b', b)

  const name = 'React'
  // console.log('name :', name);
  const age = 2

  const visible = false

  const user = {
    name: 'React2',
    age: 3,
  }

  const array = [1, 2, 3]

  const users = [
    { id: 1, name: 'react 1', age: 1 },
    { id: 2, name: 'react 2', age: 2 },
    { id: 3, name: 'react 3', age: 3 },
  ]

  const info = {
    birth: '2024-03-31',
    phone: null,
  }
  console.log('birth :', info.birth)
  console.log('phone :', info.phone)
  console.log('adrress :', info.adrress)
  return (
    <>
      <ul>
        <li>{info.birth || 'Nah'}</li>
        <li>{info.phone || 'Nah'}</li>
        <li>{info.adrress || 'Nah'}</li>
      </ul>
      <h2>기본 문법</h2>
      <h3>js 데이터</h3>
      <p>My name is {name} !!!</p>
      <p>My age is {age} !!!</p>
      <p>{visible ? 'true' : 'false'}</p>
      <p>
        My name is {user.name}, age is {user.age}.
      </p>
      <ul>
        <li>{array[0]}</li>
        <li>{array[1]}</li>
        <li>{array[2]}</li>
      </ul>
      <ul>
        {array.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
      {/* <ul>
        <li>
          Name : {users[0].name}, Age : {users[0].age}
        </li>
        <li>
          Name : {users[1].name}, Age : {users[1].age}
        </li>
        <li>
          Name : {users[2].name}, Age : {users[2].age}
        </li>
      </ul> */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name : {user.name}, Age : {user.age}
          </li>
        ))}
      </ul>
      <div>
        {/* <Func1 name="React" desc="재밌어" /> */}
        <Func1 {...vue} />
        {/* <Func2 name="javascript" desc="재밌어" /> */}
        <Func2 />
        <Func3 name="vue" desc="재밌어" />
      </div>
    </>
  )
}

const vue = {
  name: 'React',
  desc: '재밌어 ???',
}

function Func1(props) {
  // return <p>기명 함수</p>
  return (
    <div>
      <h1>안녕 난 {props.name}야!</h1>
      <p>리액트는 {props.desc}.</p>
    </div>
  )
}
// const Func2 = function (props) {
const Func2 = function ({ name = 'React', desc = 'NO 재밌' }) {
  // return <p>익명 함수</p>
  // const { name, desc } = props
  return (
    <div>
      <h1>안녕 난 {name}야!</h1>
      <p>
        {name}는 {desc}.
      </p>
    </div>
  )
}
const Func3 = (...props) => {
  // return <p>활살표 함수</p>
  const { name, desc } = props
  return (
    <div>
      <h1>안녕 난 {name}야!</h1>
      <p>
        {name}는 {desc}.
      </p>
    </div>
  )
}

export default Data
