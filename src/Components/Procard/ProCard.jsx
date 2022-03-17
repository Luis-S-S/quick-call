import './ProCard.scss';

import ButtonSquare from '../ButtonSquare/ButtonSquare';

function ProCard() {
  return (
    <div className="pro-card">
      <div className="pro-card__header">
        <img className="pro-card__profile" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_from_a_camera.jpg/1200px-Black_from_a_camera.jpg" alt="profile" />
        <h1 className="pro-card__title">Pepito Perez</h1>
      </div>
      <p className="pro-card__body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime nihil quod quo illo.</p>
      <div className="calification">
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star" />
        <span className="fa fa-star-half-o" />
      </div>
      <div className="buttons">
        <ButtonSquare link="/ProfilePro">Ver Perfil</ButtonSquare>
        <ButtonSquare>Iniciar Chat</ButtonSquare>
      </div>
    </div>

  );
}

export default ProCard;
