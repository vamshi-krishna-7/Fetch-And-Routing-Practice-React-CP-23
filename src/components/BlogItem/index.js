// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, imageUrl, avatarUrl, author, topic, id} = blogDetails

  return (
    <Link to={`/blogs/${id}`} className="item-link">
      <li className="item-container">
        <img src={imageUrl} alt={title} className="item-image" />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="author-info">
            <img src={avatarUrl} alt={topic} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
