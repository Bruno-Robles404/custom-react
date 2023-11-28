import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitch } from "@fortawesome/free-brands-svg-icons"


// IMPORTO EL ARCHIVO CSS
import "./footer.css"

const Footer = () => {
  //declaro una variable donde se almacenara la ruta de la imagen del logo
  const brand = "./src/components/img/logo-patagonia.png";

  return (

    <footer>
      <div className="footer-container">
        <img className="footer-img" src={brand} alt="logo" />
        <p className="footer-paragraph">

          EL LUGAR DEL MUNDO DONDE MAS FUERTE LATE EL CORAZON DE LA PATAGONIA</p>

      </div>

      <div className="redes-container">
        <ul>
          <li>
            <a href="">  <FontAwesomeIcon icon={faHome} />  </a>
          </li>
          <li>
            <a href=""><FontAwesomeIcon icon={faFacebook} /> </a>
          </li>
          <li>
            <a href="">  <FontAwesomeIcon icon={faInstagram} /></a>
          </li>
          <li>
            <a href=""><FontAwesomeIcon icon={faTwitch} /> </a>
          </li>
        </ul>
      </div>
      <div>

      </div>


    </footer>
  );
};

export default Footer;
