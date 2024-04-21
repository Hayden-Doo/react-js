import React, { useEffect, useState } from 'react'

function News() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=kr&apiKey=API_KEY')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setNews(data.articles)
      })
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <h1>뉴스</h1>
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
