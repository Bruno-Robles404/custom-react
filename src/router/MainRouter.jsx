import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ItemDetailContainer } from '../pages/ItemDetailContainer.jsx';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent.jsx';
import BrandComponent from '../components/BrandComponent/BrandComponent.jsx';

export const MainRouter = () => {
    return (
        <BrowserRouter>
        <BrandComponent />
         <NavBarComponent />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/item/:productd' element={<ItemDetailContainer/>} />
            </Routes>
        </BrowserRouter>
    )
}
