import { useEffect, useState } from 'react'
import './App.module.css'
import axios from 'axios'
import ArticleList from './components/ArticleList/ArticleList'
import { Code } from 'react-content-loader'

const App = () => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const MyCodeLoader = () => (
    <Code
      width={100}
      height={100}
      viewBox="0 0 100 100"
      style={{ width: '100%' }}
    />
  )

  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoading(true)
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts'
        )
        setArticles(response.data)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  return (
    <div>
      <h1>Latest articles</h1>
      {loading && <MyCodeLoader />}
      {articles.length > 0 && <ArticleList items={articles} />}
      {error && <p>Something went wrong</p>}
    </div>
  )
}

export default App
