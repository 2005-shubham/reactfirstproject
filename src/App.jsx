import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Slidebar from './components/Slidebar'
import Card from './components/Card'
import Contact from './components/Contact'
import Card1 from './components/Card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Navbar/>
     <Slidebar/>
     <Card/>
     <Contact/> */}
     <Card1/>
    </>
  )
}

export default App;
