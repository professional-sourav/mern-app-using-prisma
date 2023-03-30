import React from 'react'

const Article = ({ title, content }) => {
  return (
    <div>
        <h4>{title}</h4>
        <p>{content}</p>
    </div>
  )
}

export default Article
