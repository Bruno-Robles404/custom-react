import React from 'react'

import "./CartWidgetComponent.css"

function CartWidgetComponent() {

    //declaro una variable donde se almacenara la ruta de la imagen del CartWidget
    const beer = "./src/components/img/lata.jpg";

    return (
        <div className="navbar-beer">
            <p className="beer-counter">0</p>
            <a className="beer-link" href="">
                <img className="beer-img" src={beer} alt="beer carrito" />
            </a>
        </div>
    )
}

export default CartWidgetComponent