import React from "react";
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      <img src="logo/quick-call-logo--mobile--colored.svg" alt="Quick Call logo" />
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
          <a href="https://web.whatsapp.com/" target="_blank"><img src="icons/whatsapp-logo-white.svg" alt="whatsapp" /></a>
          <a href="https://web.facebook.com/" target="_blank"><img src="icons/facebook-icon-white.svg" alt="facebook" /></a>
          <a href="https://twitter.com/" target="_blank"><img src="icons/twitter-icon-white.svg" alt="twitter" /></a>
          <a href="https://www.linkedin.com/" target="_blank"><img src="icons/linkedin-logo-white.svg" alt="linkedin" /></a>
        </div>
        <h2 className="footer--title">&copy; Quick Call. 2022</h2>
      </div>
    </div>
  );
}

export default Footer;
