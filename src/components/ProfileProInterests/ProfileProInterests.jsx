import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { getAllProfessional } from '../../services/professionals';
import './ProfileProInterests.scss';
import ProCard from '../Procard/ProCard';
import { getRandomFromArray } from '../../services/general';

function ProfileProInterest() {
  const [pro, setPro] = useState([]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1024, itemsToShow: 3 },
  ];

  useEffect(() => {
    getAllProfessional()
      .then((data) => { setPro(getRandomFromArray(8, data)); })
      .catch((error) => { throw error; });
  }, []);

  return (
    <div className="interest">
      <h1>Quizas te interese ...</h1>
      <Carousel breakPoints={breakPoints}>
        {pro.map((item) => <ProCard key={item.id} details={item} />)}
      </Carousel>
    </div>
  );
}

export default ProfileProInterest;
