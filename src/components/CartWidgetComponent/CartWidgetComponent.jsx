import { useContext } from 'react'
import { CartContext } from "../context/CartContext";
import "./CartWidgetComponent.css"
import { Link } from 'react-router-dom';


const CartWidgetComponent = () => {
    const { count } = useContext(CartContext);

    //declaro una variable donde se almacenara la ruta de la imagen del CartWidget
    const beer = "../src/components/img/lata.jpg";
    const totalQuantity = count.reduce((total, item) => total + item.quantity, 0);
    return (
        <Link to="/cart">
            <div className="navbar-beer">
                <span className="beer-counter">{totalQuantity}</span>
                <span className="beer-link" href="">
                    <img className="beer-img" src={beer} alt="beer carrito" />
                </span>
            </div>
        </Link>
    );
};

export default CartWidgetComponent;