import { useEffect, useState } from 'react';
import Carousel from 'react-elastic-carousel';
import ClientExpCard from '../ClientExpCard/ClientExpCard';
import { getAllClientExperience } from '../../Services/clientExperience';
import './ClientExperienceSection.scss';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1024, itemsToShow: 3 },
];

function ClientExperienceSection() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    getAllClientExperience()
      .then((response) => {
        setExperiences(response);
      });
  }, []);

  return (
    <div className="client-experience-section">
      <Carousel breakPoints={breakPoints}>
        {experiences.map((item) => <ClientExpCard key={item.id} details={item} />)}
      </Carousel>
    </div>
  );
}

export default ClientExperienceSection;
