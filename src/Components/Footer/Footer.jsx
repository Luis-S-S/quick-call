import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
      <img src="" alt="Quick Call logo" />
      <div className="footer__container">
        <div className="footer__contact">
          <h2>Información de Contacto</h2>
          <p>(123) 123 1234</p>
          <p>email@email.com</p>
        </div>
        <div className="footer__hq">
          <h2>Quick Call HQ</h2>
          <p>Address</p>
          <p>City</p>
        </div>
        <div className="footer__copyright">
          <p>Siguenos en nuestras redes sociales</p>
          <div className="copyright__social-media">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <h2>&coypright; Quick Call. 2022</h2>
        </div>
      </div>
    </footer>
  );
};
