import React from "react";

//import el archivo css

import "./style.css"

const NavBar = () => {
  //declaro una variable donde se almacenara la ruta de la imagen del logo
  const brand = "./src/components/img/patagonia-logo.png";
  const beer = "./src/components/img/lata.jpg";

  return (
    <header className="header">
      {/* logo de la marca */}
      <div className="logo-container">
        <img className="logo-img" src={brand} alt="logo" />
      </div>

      {/* links de navegación */}
      <nav>
        <ul className="nav-container">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/">PRODUCTOS</a>
          </li>
          <li>
            <a href="/">SHOP</a>
          </li>
        </ul>
      </nav>
      <div className="beer-container">
        
        <a href="">  
          <img className="beer-img" src={beer} alt="beer carrito" />
        </a>

      </div>

    </header>
  );
};

export default NavBar;



