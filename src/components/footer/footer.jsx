import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons"


// IMPORTO EL ARCHIVO CSS
import "./footer.css"

const Footer = () => {
  //declaro una variable donde se almacenara la ruta de la imagen del logo
  const brand = "./src/components/img/logo-patagonia.png";

  return (

    <footer>
      <div className="footer-container">
        <img className="footer-img" src={brand} alt="logo" />
      </div>
      <div className="redes-container">
        <ul>
          <li>
            <FontAwesomeIcon icon={faHome} />
          </li>
          <FontAwesomeIcon icon={faFacebook} />
          <li>

          </li>
        </ul>

      </div>


    </footer>
  );
};

export default Footer;
