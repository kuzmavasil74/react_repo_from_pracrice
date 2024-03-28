const ArticleList = ({ items }) => {
  return (
    <ul>
      {items.map(({ objectId, url, title }) => (
        <li key={objectId}>
          <a href={url} target="_blank" rel="noreferrer nooperer">
            {title}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ArticleList
