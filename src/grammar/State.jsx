import React, { useState } from 'react'
import switchOn from '../assets/images/switch-on.svg'
import switchOff from '../assets/images/switch-off.svg'
import { FaUmbrellaBeach } from 'react-icons/fa'
import { FaHouseChimneyWindow } from 'react-icons/fa6'
import { GiFarmTractor } from 'react-icons/gi'
import { GrOverview } from 'react-icons/gr'
import styled from 'styled-components'
import { PiHamburger } from 'react-icons/pi'
import { RxCross2 } from 'react-icons/rx'

const State = () => {
  // let name = 'winter'
  // const changeName = () => {
  //   console.log(name)
  //   name = name === 'winter' ? 'fall' : 'winter'
  //   document.querySelector('.name').innerHTML = name
  // }

  const [name, setName] = useState('winter')
  const changeName = () => {
    setName(name === 'winter' ? 'fall' : 'winter')
  }
  const [number, setNumber] = useState(0)
  const [isOn, setIsON] = useState(false)

  const sortArr = [
    { id: 1, value: '해변', icon: <FaUmbrellaBeach /> },
    { id: 2, value: '한옥', icon: <FaHouseChimneyWindow /> },
    { id: 3, value: '농장', icon: <GiFarmTractor /> },
    { id: 4, value: '전망', icon: <GrOverview /> },
  ]
  const [selected, setSelected] = useState(0)
  const [isToggled, setIsToggled] = useState(false)

  return (
    <>
      <div>
        <h3>햄버거 메뉴</h3>
        <button
          onClick={() => {
            setIsToggled(!isToggled)
          }}
        >
          {isToggled ? <RxCross2 /> : <PiHamburger />}
        </button>
        <ul style={isToggled ? { display: 'block' } : { display: 'none' }}>
          <li>menu1</li>
          <li>menu2</li>
          <li>menu3</li>
          <li>menu4</li>
        </ul>
      </div>
      <div>
        <h3>menu 클릭시 active 클래스 변경</h3>
        <SortStyled>
          {sortArr.map((item) => (
            <li
              // className="active"
              className={selected === item.id ? 'active' : ''}
              key={item.id}
              onClick={() => {
                setSelected(item.id)
              }}
            >
              {item.icon} {item.value}
            </li>
          ))}

          {/* <li className="active">
            <FaUmbrellaBeach /> 해변
          </li>
          <li>
            <FaHouseChimneyWindow /> 한옥
          </li>
          <li>
            <GiFarmTractor /> 농장
          </li>
          <li>
            <GrOverview /> 전망
          </li> */}
        </SortStyled>
      </div>
      <div>
        <h3>Image Toggle</h3>
        <img
          src={isOn ? switchOn : switchOff}
          alt="switch"
          onClick={() => {
            // setIsON(isOn === false ? true : false)
            setIsON(!isOn)
          }}
        />
        <div>{isOn ? 'On' : 'OFF'}</div>
      </div>
      <div>
        <h3>Counter</h3>
        <strong>{number}</strong>
        <button onClick={() => setNumber(number + 1)}> + </button>
        <button onClick={() => setNumber(number - 1)}> - </button>
      </div>
      <div>
        <h1>State</h1>
        <h3>이름 바꾸기</h3>
        <strong className="name">{name}</strong>
        <br />
        {/* <button onClick={changeName}>Change</button> */}
        <button onClick={() => setName(name === 'winter' ? 'fall' : 'winter')}>
          Change
        </button>
      </div>
    </>
  )
}
const SortStyled = styled.ul`
  list-style: none;
  display: flex;

  li {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 100px;
    height: 75px;
    color: #777;
    cursor: pointer;
    &.active {
      color: red;
    }

    &:hover {
      color: #000;
    }
  }
  svg {
    font-size: 30px;
  }
`

export default State
