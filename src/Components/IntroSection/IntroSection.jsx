import './IntroSection.scss';

function IntroSection() {
  return (
    <div className="intro-section">
      <div className="intro-section__description">
        <h1 className="intro-description__title">Necesitas Servicios?</h1>
        <div className="intro-description__item">
          <img src="images/icons/magnifyng-glass-icon.svg" alt="Magnifying Glass" className="intro-item__img" />
          <p className="intro-item__text">
            Encuentra al profesional usando nuestro buscador o utilizando la función de filtro!
          </p>
        </div>
        <div className="intro-description__item">
          <img src="images/icons/chat-icon.svg" alt="Chat" className="intro-item__img" />
          <p className="intro-item__text">
            Contacta al profesional, rápido y fácil! por medio de nuestro chat
          </p>
        </div>
        <div className="intro-description__item">
          <img src="images/icons/wallet-icon-colored.svg" alt="Wallet" className="intro-item__img" />
          <p className="intro-item__text">
            Realiza tu pago en cualquiera de los diversos métodos que ofrecemos!
          </p>
        </div>
        <div className="intro-description__item">
          <img src="images/icons/worker-icon.svg" alt="Worker" className="intro-item__img" />
          <p className="intro-item__text">
            Recibe nuestros servicios de calidad!
          </p>
        </div>
      </div>
      <div className="intro-section__bg">
        <img src="images/img/bg-home.png" alt="background" />
      </div>
    </div>
  );
}

export default IntroSection;
