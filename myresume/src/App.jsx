import React from 'react'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import SideProjects from './components/SideProjects/SideProjects'
import Footer from './components/Footer/Footer'
import Education from './components/Education/Education'

function App() {
  return (
    <div className='app'>
      <Header/>
      <About/>
      <Education/>
      {/* <Experience/> */}
      <SideProjects/>
      <Footer/>
    </div>
  )
}

export default App