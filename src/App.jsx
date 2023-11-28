import { useState } from 'react'


import NavBar from './components/navbar/navbar';
import Footer from './components/footer/footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <Footer />

    </>
  )
}

export default App
