import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ItemDetailContainer } from '../pages/ItemDetailContainer.jsx';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent.jsx';

import { Category } from '../pages/Category.jsx';
import { CreateProduct } from "../pages/CreateProduct";
import { UpdateProduct } from "../pages/UpdateProduct";
import { Cart } from '../pages/Cart.jsx';


export const MainRouter = () => {
    return (
        <BrowserRouter>
            <NavBarComponent/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/category/:id" element={< Category />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/update-product/:id" element={<UpdateProduct />} />
                <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    )
}
