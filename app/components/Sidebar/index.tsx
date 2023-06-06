import React from 'react'
import Link from "next/link"

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
        <h1>Chris Dietrich</h1>
        <h3>Front End Developer</h3>
        <p>I build accessible, inclusive products and digital experiences for the web.</p>
    <Link href="/">Skills</Link>
    <Link href="/">Projects</Link>
    <Link href="/">About</Link>
    <Link href="/">Contact</Link>
    </aside>
  )
}

export default Sidebar