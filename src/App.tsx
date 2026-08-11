import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 id="center">
        Welcome to Ci CD pipeline with React and Vite
      </h1>
    </>
  )
}

export default App
