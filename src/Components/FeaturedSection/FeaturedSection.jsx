import { useEffect, useState } from 'react';
import './FeaturedSection.scss';
import Carousel from 'react-elastic-carousel';
import ButtonSquare from '../ButtonSquare/ButtonSquare';
import ProCard from '../Procard/ProCard';
import { allCategories } from '../../Services/categories';
import { getAllPro } from '../../Services/pro';

function FeaturedSection() {
  const [categories, setCategories] = useState([]);
  const [pro, setPro] = useState([]);

  const filterSpecialty = (category) => {
    const specialtyArray = category.filter((item) => item.filter === 'specialty');
    return specialtyArray;
  };

  const getFourRandom = (array) => {
    const randomArray = array.sort(() => 0.5 - Math.random()).slice(0, 4);
    return randomArray;
  };

  useEffect(() => {
    allCategories()
      .then((data) => { setCategories(getFourRandom(filterSpecialty(data))); })
      .catch((error) => { throw error; });
    getAllPro()
      .then((data) => { setPro(getFourRandom(data)); })
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
        {categories.map((category, idx) => (
          <ButtonSquare key={category._id} color="white" link="/">
            <img
              className="mid-section__icon"
              src={idx % 2 === 0 ? 'images/icons/brush-icon-white.svg' : 'images/icons/tools-icon-white.svg'}
              alt="icon"
            />
            <span>{category.value}</span>
          </ButtonSquare>
        ))}
      </div>
    </div>
  );
}

export default FeaturedSection;
