import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// Import it into App.jsx, and pass in a prop called ‘name’ when rendering the Greeting component
import Greeting from './components/Greeting'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Greeting />

    <Greeting name="Ai"/>

    <Greeting name="Coco">
      <h1>I live in Auckland.</h1>
      <p>I am a student</p>
    </Greeting>


      
    </>
  )
}

export default App
