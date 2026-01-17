import ArticleList from "./ArticleList"
import ArticleDetail from "./ArticleDetail"
import type { Blog } from "../types"

interface BlogLayoutProps {
  blogs: Blog[]
  selectedBlog: Blog
  onSelectBlog: (blog: Blog) => void
}

export default function BlogLayout({ blogs, selectedBlog, onSelectBlog }: BlogLayoutProps) {
  return (
    <div className="blog-layout-container">
      <div className="blog-layout">
        <ArticleList blogs={blogs} selectedBlog={selectedBlog} onSelectBlog={onSelectBlog} />
        <ArticleDetail blog={selectedBlog} />
      </div>
    </div>
  )
}
