import React from "react";
import './footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <img src="" alt="Quick Call logo" />
      <div className="footer__container">
        <div className="footer__contact">
          <h2 className="footer--title">Información de Contacto</h2>
          <div className="contact__body">
            <p className="footer--body">(123) 123 1234</p>
            <p className="footer--body">email@email.com</p>
          </div>
        </div>
        <div className="footer__hq">
          <h2 className="footer--title">Quick Call HQ</h2>
          <div className="hq__body">
            <p className="footer--body">Address</p>
            <p className="footer--body">City</p>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p className="footer--body">Siguenos en nuestras redes sociales</p>
        <div className="copyright__social-media">
          <a href="https://web.whatsapp.com/" target="_blank"><img src="" alt="whatsapp" /></a>
          <a href="https://web.facebook.com/" target="_blank"><img src="" alt="facebook" /></a>
          <a href="https://twitter.com/" target="_blank"><img src="" alt="twitter" /></a>
          <a href="https://www.linkedin.com/" target="_blank"><img src="" alt="linkedin" /></a>
        </div>
        <h2 className="footer--title">&copy; Quick Call. 2022</h2>
      </div>
    </footer>
  );
};
