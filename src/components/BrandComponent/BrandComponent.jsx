import React from 'react'

import "./BrandComponent.css"

function BrandComponent() {

    //declaro una variable donde se almacenara la ruta de la imagen del logo
    const brand = "/src/components/img/patagonia-logo.png";

    return (

        <div className='navbar-brand'>
            <img className="brand-img" src={brand} alt="logo" />
        </div>
    )
}

export default BrandComponent