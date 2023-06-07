import React from 'react'
import Skills from '../Skills'
import Projects from '../Projects'
import AboutMe from '../AboutMe'
import Contact from '../Contact'

const Main = () => {
  return (
    <main className="main-container" style={{width: "50%"}}>
        <Skills/>
        <Projects/>
        <AboutMe/>
        <Contact/>
    </main>
  )
}

export default Main