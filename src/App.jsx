
//componentes

import FooterComponent from './components/footerComponent/footerComponent.jsx';

//react bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { MainRouter } from './router/MainRouter.jsx';


function App() {


  return (
    <>
    
      <MainRouter/>
      <FooterComponent />
    </>
  )
}

export default App
