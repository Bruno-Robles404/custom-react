import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons"


// IMPORTO EL ARCHIVO CSS
import "./footerComponent.css"

const FooterComponent = () => {
  //declaro una variable donde se almacenara la ruta de la imagen del logo
  const brand = "./src/components/img/logo-patagonia.png";

  return (

    <footer className="footer-container">

      <div className="footer-green">
        <p className="green-paragraph"> En Bariloche se generan 280 toneladas de basura por día.
          En verano, estos residuos se incrementan un 30% y generan
          70 toneladas más por día.
          Por eso, con residuos reciclados hicimos este souvenir.
        </p>
        <h2 className="green-title">¿POR QUÉ UN SOUVENIR? </h2>
        <p className="green-paragraph">
          Para que tomemos conciencia y nos recuerde la importancia de ayudar
          a que la basura no quede en la naturaleza de Bariloche.
          Con lo recaudado se organizarán nuevas recolecciones de basura en espacios naturales.
        </p>
      </div>

      <div className="footer-brand">
        <a className="brand-link" href=""> <img className="footer-img" src={brand} alt="logo de la empresa" /></a>
      </div>

      <div className="footer-redes">
        <ul className="redes-list">

          <li className="list-item">
            <a className="item-link" href=""><FontAwesomeIcon icon={faFacebook} /> </a>
            <a className="item-link" href=""><p className="item-paragraph">DANOS UN LIKE EN FACEBOOK</p></a>
          </li>

          <li className="list-item" >
            <a className="item-link" href="">  <FontAwesomeIcon icon={faInstagram} /></a>
            <a className="item-link" href=""><p className="item-paragraph">UNETE A NUESTRO INSTAGRAM</p></a>
          </li>

          <li className="list-item">
            <a className="item-link" href=""><FontAwesomeIcon icon={faYoutube} /> </a>
            <a className="item-link" href=""><p className="item-paragraph">VISITANOS EN YOUTUBE</p></a>
          </li>
        </ul>
      </div>

    </footer>
  );
};

export default FooterComponent;
