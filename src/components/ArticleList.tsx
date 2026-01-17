"use client"

import type { Blog } from "../types"

interface ArticleListProps {
  blogs: Blog[]
  selectedBlog: Blog
  onSelectBlog: (blog: Blog) => void
}

export default function ArticleList({ blogs, selectedBlog, onSelectBlog }: ArticleListProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return "Today"
    if (diffDays === 1) return "Yesterday"
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`
    return `${Math.ceil(diffDays / 365)} years ago`
  }

  return (
    <aside className="article-list">
      <h2>Latest Articles</h2>
      {blogs.map((blog) => (
        <article
          key={blog.id}
          className={`article-card ${selectedBlog.id === blog.id ? "active" : ""}`}
          onClick={() => onSelectBlog(blog)}
        >
          <div className="article-meta">
            <span className="category">{blog.category[0]}</span>
            <span className="date">{formatDate(blog.date)}</span>
          </div>
          <h3>{blog.title}</h3>
          <p>{blog.description}</p>
          <div className="article-tags">
            {blog.category.map((cat) => (
              <span key={cat} className="tag">
                {cat.toLowerCase()}
              </span>
            ))}
          </div>
        </article>
      ))}
    </aside>
  )
}
