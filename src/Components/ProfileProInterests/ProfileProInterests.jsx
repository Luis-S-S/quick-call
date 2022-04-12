import { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import { getAllPro } from '../../Services/pro';
import './ProfileProInterests.scss';
import ProCard from '../Procard/ProCard';
import { getFourRandom } from '../../Services/general';

function ProfileProInterest() {
  const [pro, setPro] = useState([]);

  useEffect(() => {
    getAllPro()
      .then((data) => { setPro(getFourRandom(data)); })
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
