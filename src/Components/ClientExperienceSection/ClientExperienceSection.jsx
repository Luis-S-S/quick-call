import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import ClientExpCard from '../ClientExpCard/ClientExpCard';
import { getAllClientExperience } from '../../services/clientExperience';
import './ClientExperienceSection.scss';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1024, itemsToShow: 3 },
];

function ClientExperienceSection() {
  const [experiences, setExperiences] = useState([]);

  const getFourRandom = (array) => {
    const randomArray = array.sort(() => 0.5 - Math.random()).slice(0, 4);
    return randomArray;
  };

  useEffect(() => {
    getAllClientExperience()
      .then((data) => {
        setExperiences(getFourRandom(data));
      });
  }, []);

  return (
    <div className="client-experience-section">
      <h2 className="client-experience-section__title">Qué dicen nuestros clientes</h2>
      <Carousel breakPoints={breakPoints}>
        {experiences.map((item) => <ClientExpCard key={item.id} details={item} />)}
      </Carousel>
    </div>
  );
}

export default ClientExperienceSection;
