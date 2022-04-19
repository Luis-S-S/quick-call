import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { getAllProfessional } from '../../services/professional';
import './ProfileProInterests.scss';
import ProCard from '../Procard/ProCard';
import { getRandomFromArray } from '../../services/general';

function ProfileProInterest() {
  const [pro, setPro] = useState([]);

  useEffect(() => {
    getAllProfessional()
      .then((data) => { setPro(getRandomFromArray(8, data)); })
      .catch((error) => { throw error; });
  }, []);

  return (
    <div className="interest">
      <h1>Quizas te interese ...</h1>
      <Carousel itemsToShow={3}>
        {pro.map((item) => <ProCard key={item.id} details={item} />)}
      </Carousel>
    </div>
  );
}

export default ProfileProInterest;
