import axios from 'axios'
import React, { useEffect, useState } from 'react'

function News() {
  const [news, setNews] = useState([])
  const [category, setCategory] = useState('all')

  const categoryList = [
    { name: '전체', value: 'all' },
    { name: '비즈니스', value: 'business' },
    { name: '엔터테인먼트', value: 'entertainment' },
    { name: '건강', value: 'health' },
    { name: '과학', value: 'science' },
    { name: '스포츠', value: 'sports' },
    { name: '기술', value: 'technology' },
  ]

  const selectCategory = (category) => {
    setCategory(category)
  }

  useEffect(() => {
    //Fetch API로 데이터 가져오기
    //   fetch(
    //     `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
    //   )
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data)
    //       setNews(data.articles)
    //     })
    //     .catch((error) => console.error(error))

    //async/await로 비동기 처리하기
    // const fetchData = async () => {
    //   try {
    //     const response = await fetch(
    //       `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
    //     ) // API Key를 사용
    //     const data = await response.json() // JSON 형태로 변환
    //     console.log(data) // 데이터 확인
    //     setNews(data.articles) // 뉴스 데이터를 상태로 저장
    //   } catch (error) {
    //     console.error(error)
    //   }
    // }
    // fetchData()

    //axios로 데이터 가져오기
    const fetchData = async () => {
      let response
      try {
        if (category === 'all') {
          response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
          )
        } else {
          response = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=kr&category=${category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
          )
        }
        // data 속성에 뉴스 데이터가 들어있음
        // console.log(response.data)
        setNews(response.data.articles)
      } catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [category])

  return (
    <div>
      <h1>뉴스</h1>
      <div>
        {categoryList.map((item, index) => (
          <button
            key={index}
            onClick={() => {
              selectCategory(item.value)
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <a href={article.url} target="_blank" rel="noreferrer">
              <img src={article.urlToImage} alt="" />
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default News
