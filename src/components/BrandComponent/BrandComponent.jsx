import React from 'react'

import "./BrandComponent.css"

function BrandComponent() {

    //declaro una variable donde se almacenara la ruta de la imagen del logo
    const brand = "/src/components/img/patagonia-logo.png";

    return (

        <div className='navbar-brand'>
           
            <a href="/">
                 <img className="brand-img" src={brand} alt="logo" />
            </a>
        </div>
    )
}

export default BrandComponent