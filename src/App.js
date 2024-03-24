import logo from './logo.svg';
import './App.css';
import Hello, { World, World2 } from './module';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Nav from './components/layout/Nav';
import Article from './views/Article';

function App() {
  const listArr = [
    { title: "Home", des: "홈 화면" },
    { title: "About", des: "소개 페이지" }
  ]

  return (
    <>
      <Header />
      <Nav />
      {listArr.map((item, index) => (
        //  item == {title:"Home", des:"홈 화면"}
        <Article key={index} title={item.title} des={item.des} />
      ))}
      {/* <Article title="Home" des="홈 화면" />
      <Article title="About" des="소개 페이지" /> */}
      <Footer />
    </>
  );
}

export default App;
