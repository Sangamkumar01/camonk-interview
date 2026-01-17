import type { Blog } from "../types"

interface ArticleDetailProps {
  blog: Blog
}

export default function ArticleDetail({ blog }: ArticleDetailProps) {
  const estimatedReadTime = Math.ceil(blog.content.split(" ").length / 200)
  const publishDate = new Date(blog.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })

  return (
    <main className="article-detail">
      <img src={blog.coverImage || "/placeholder.svg"} alt={blog.title} className="article-image" />

      <div className="article-meta-info">
        <span className="category-badge">{blog.category[0]}</span>
        <span className="read-time">{estimatedReadTime} min read</span>
      </div>

      <h1>{blog.title}</h1>

      <button className="share-btn">
        <span>↗</span> Share Article
      </button>

      <div className="article-info">
        <div className="info-item">
          <span className="info-label">CATEGORY</span>
          <span className="info-value">{blog.category.join(" & ")}</span>
        </div>
        <div className="info-item">
          <span className="info-label">READ TIME</span>
          <span className="info-value">{estimatedReadTime} Mins</span>
        </div>
        <div className="info-item">
          <span className="info-label">DATE</span>
          <span className="info-value">{publishDate}</span>
        </div>
      </div>

      <div className="article-content">
        {blog.content.split("\n\n").map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="article-footer">
        <div className="author-info">
          <img
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?w=100&h=100"
            alt="Author"
            className="author-avatar"
          />
          <div>
            <p className="author-name">Written by Arjun Mehta</p>
            <p className="author-role">Senior Financial Analyst</p>
          </div>
        </div>
        <div className="article-actions">
          <button className="action-btn" title="Like">
            👍
          </button>
          <button className="action-btn" title="Bookmark">
            🔖
          </button>
        </div>
      </div>
    </main>
  )
}
