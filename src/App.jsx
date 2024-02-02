import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/footer';
import Navbar from './components/navbar';
import About from './components/about';
import Skills from './components/skills';
import Project from './components/project'
import MyComponent from './components/navbar';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/my_portfolio/' Component={About} />
          <Route path='/my_portfolio/skills' Component={Skills} />
          <Route path='/my_portfolio/project' Component={Project} />
          <Route path='/my_portfolio/'  Component={About} />
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App;
