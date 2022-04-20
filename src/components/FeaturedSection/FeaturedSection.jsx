import { useEffect, useState } from 'react';
import './FeaturedSection.scss';
import Carousel from 'react-elastic-carousel';
import ButtonSquare from '../ButtonSquare/ButtonSquare';
import ProCard from '../Procard/ProCard';
import { allCategories } from '../../services/categories';
import { getAllProfessional } from '../../services/professional';
import { getRandomFromArray } from '../../services/general';

function FeaturedSection() {
  const [specialties, setSpecialties] = useState([]);
  const [pro, setPro] = useState([]);

  useEffect(() => {
    allCategories()
      .then((data) => {
        const [document] = data;
        setSpecialties(getRandomFromArray(4, document.specialties));
      })
      .catch((error) => { throw error; });
    getAllProfessional()
      .then((data) => { setPro(getRandomFromArray(4, data)); })
      .catch((error) => { throw error; });
  }, []);

  return (
    <div className="mid-section">
      <div className="mid-section__left">
        <h2 className="mid-section__title">Nuestros profesionales mejor calificados</h2>
        <Carousel>
          {pro.map((item) => <ProCard key={item.id} details={item} />)}
        </Carousel>
      </div>
      <div className="mid-section__right">
        <h2 className="mid-section__title">Categorías más buscadas</h2>
        {specialties.map((specialty, idx) => (
          <ButtonSquare key={specialty.name} color="white" link={`/search?specialties=${specialty.name}`}>
            <img
              className="mid-section__icon"
              src={idx % 2 === 0 ? 'images/icons/brush-icon-white.svg' : 'images/icons/tools-icon-white.svg'}
              alt="icon"
            />
            <span>{specialty.name}</span>
          </ButtonSquare>
        ))}
      </div>
    </div>
  );
}

export default FeaturedSection;
