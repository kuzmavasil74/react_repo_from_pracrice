import axios from 'axios'

axios.defaults.baseURL = 'https://hn.algolia.com/api/v1'

export const fetchArticlesWithTopic = async (topic) => {
  try {
    const response = await axios.get(`/search?query=${topic}`)
    return response.data.hits
  } catch (error) {
    console.error('Error fetching articles:', error)
    return [] // Повертаємо порожній масив у випадку помилки
  }
}
