import './FeaturedSection.scss';
import Carousel from 'react-elastic-carousel';
import ButtonSquare from '../ButtonSquare/ButtonSquare';
import ProCard from '../Procard/ProCard';

function FeaturedSection() {
  return (
    <div className="mid-section">
      <div className="mid-section__left">
        <h2 className="mid-section__title">Nuestros profesionales mejor calificados</h2>
        <Carousel>
          <ProCard />
          <ProCard />
          <ProCard />
          <ProCard />
        </Carousel>
      </div>
      <div className="mid-section__right">
        <h2 className="mid-section__title">Categorías más buscadas</h2>
        <ButtonSquare color="white" link="/">
          <img className="mid-section__icon" src="images/icons/brush-icon-white.svg" alt="" />
          Categoría
        </ButtonSquare>
        <ButtonSquare color="white" link="/">
          <img className="mid-section__icon" src="images/icons/tools-icon-white.svg" alt="" />
          Categoría
        </ButtonSquare>
        <ButtonSquare color="white" link="/">
          <img className="mid-section__icon" src="images/icons/brush-icon-white.svg" alt="" />
          Categoría
        </ButtonSquare>
        <ButtonSquare color="white" link="/">
          <img className="mid-section__icon" src="images/icons/tools-icon-white.svg" alt="" />
          Categoría
        </ButtonSquare>
      </div>
    </div>
  );
}

export default FeaturedSection;
