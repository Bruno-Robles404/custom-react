import React from "react";

//import el archivo css

import "./style.css"

const NavBar = () => {
    //declaro una variable donde se almacenara la ruta de la imagen del logo
const brand = "./src/components/img/logo.webp";

return (
    <header className="header">
      {/* logo de la marca */}
      <div className="logo-container">
        <img src={brand} alt="logo" />
      </div>

      {/* links de navegación */}
      <nav>
        <ul className="nav-container">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/">Productos</a>
          </li>
          <li>
            <a href="/">Blog</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
        </ul>
      </nav>

    </header>
  );
};

export default NavBar;



