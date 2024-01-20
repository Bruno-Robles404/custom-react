
//componentes

import FooterComponent from './components/footerComponent/footerComponent.jsx';

//react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainRouter } from './router/MainRouter.jsx';
import { CartProvider } from './components/context/CartContext.jsx';


const App = () => {
  return (
    <>
      <CartProvider>
        <MainRouter />
        <FooterComponent />
      </CartProvider>
    </>
  )
}

export default App
