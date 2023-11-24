import { useState } from 'react'
import NavBar from './components/navbar/navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <NavBar/>
    </>
  )
}

export default App
