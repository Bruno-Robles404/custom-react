import React from "react";

//componente BRAND
import BrandComponent from "../BrandComponent/BrandComponent";

//componente CARTWIDGET
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";



//import el archivo css del NavBar

import "./NavBarComponent.css"

const NavBarComponent = () => {



  return (
    <header className="header">

      <nav className="header-navbar">

        <BrandComponent />

        <ul className="navbar-list">
          <li>
            <a className="navbar-link" href="/">HOME</a>
          </li>

          <li>
            <a className="navbar-link" href="/">PRODUCTOS</a>
          
          </li>

          <li>
            <a className="navbar-link" href="/">SHOP</a>
          </li>

          <li>
            <a className="navbar-link" href="/">REFUGIOS</a>
          </li>
        </ul>
        <CartWidgetComponent />
      </nav>
    </header>
  );
};

export default NavBarComponent;



