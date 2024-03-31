import { useState } from 'react'
import './App.css'
import Footer from './components/layout/Footer'
import Header from './components/layout/Header'
import Home from './components/views/home/Home'

const pages = [
  { id: 1, title: 'home', desc: 'Home Page' },
  { id: 2, title: 'about', desc: 'about Page' },
  { id: 3, title: 'signin', desc: 'signin Page' },
]
const navArr = [
  { id: 1, title: 'home' },
  { id: 2, title: 'about' },
  { id: 3, title: 'signin' },
]
const changeNav = () => {
  // setContext()
  alert('!!!!')
}

function App() {
  const [context, setContext] = useState({
    id: 1,
    title: 'home!!!',
    desc: 'Home Page!!!',
  })

  return (
    <div className="wrap ">
      <Header title="dashboard" nav={navArr} />
      {/* <Home title={context.title} desc={context.desc} onClick={changeNav} /> */}
      {/* 
      <Home title="home" desc="Home Page" />
      <Home title="about" desc="about Page" />
      <Home title="signin" desc="signin Page" /> 
      */}
      {pages.map((page) => (
        <Home key={page.id} title={page.title} desc={page.desc} />
      ))}
      <Footer />
    </div>
  )
}

export default App
