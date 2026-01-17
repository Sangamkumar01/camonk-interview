"use client"

import { useState } from "react"
import "./App.css"
import Header from "./components/Header"
import Hero from "./components/Hero"
import BlogLayout from "./components/BlogLayout"
import Footer from "./components/Footer"
import blogData from "../db.json"

function App() {
  const [selectedBlog, setSelectedBlog] = useState(blogData.blogs[0])

  return (
    <div className="app">
      <Header />
      <Hero />
      <BlogLayout blogs={blogData.blogs} selectedBlog={selectedBlog} onSelectBlog={setSelectedBlog} />
      <Footer />
    </div>
  )
}

export default App
