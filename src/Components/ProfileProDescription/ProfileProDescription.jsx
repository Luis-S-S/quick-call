import './ProfileProDescription.scss';
import ButtonSquare from '../ButtonSquare/ButtonSquare';

function ProfileProDescription() {
  return (
    <div className="row">
      <div className="column">
        <img className="photo" src="./images/img/constructor.jpeg" alt="constructor" width={500} height={500} />
      </div>
      <div className="column">
        <div className="description">
          <h1>Pepito Perez</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel nisi nisi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel nisi nisi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel nisi nisi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel nisi nisi.</p>
        </div>
        <div className="categories">
          <h1>Mis especialidades</h1>
          <div className="categoriesList">
            <h4>Categoria</h4>
            <h4>Categoria</h4>
            <h4>Categoria</h4>
            <h4>Categoria</h4>
            <h4>Categoria</h4>
            <h4>Categoria</h4>
          </div>
        </div>
        <div className="calification">
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
          <span className="fa fa-star-half-o" />
          <br />
          <ButtonSquare text="Iniciar Chat" />
        </div>
      </div>
    </div>
  );
}

export default ProfileProDescription;
