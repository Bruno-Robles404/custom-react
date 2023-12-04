import { useState } from 'react'
//componentes
import NavBarComponent from './components/NavBarComponent/NavBarComponent.jsx';
import FooterComponent from './components/footerComponent/footerComponent.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
//react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBarComponent />
      <ItemListContainer greeting = "¡¡ CERVECERIA, BARILOCHE RIO NEGRO, ARGENTINA !!"/>
      <FooterComponent />
    </>
  )
}

export default App
