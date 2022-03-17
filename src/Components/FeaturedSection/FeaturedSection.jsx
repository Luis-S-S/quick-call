import './FeaturedSection.scss';
import ButtonSquare from '../ButtonSquare/ButtonSquare';

function FeaturedSection() {
  return (
    <div className="home__mid-section">
      <div>
        <h2>Nuestros profesionales mejor calificados</h2>
      </div>
      <div>
        <h2>Que dicen nuestros clientes</h2>
        <ButtonSquare color="white" link="/">
          Categoría
        </ButtonSquare>
        <ButtonSquare color="white" link="/">
          Categoría
        </ButtonSquare>
        <ButtonSquare color="white" link="/">
          Categoría
        </ButtonSquare>
        <ButtonSquare color="white" link="/">
          Categoría
        </ButtonSquare>
      </div>
    </div>
  );
}

export default FeaturedSection;
