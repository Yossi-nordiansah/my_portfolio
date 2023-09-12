import { useState } from 'react'
import './App.css'

import Footer from './components/footer';
import Navbar from './components/navbar';
import Main from './components/main';


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Navbar/>
    <Main/>
    <Footer/>
  </div>
  )
}

export default App;
