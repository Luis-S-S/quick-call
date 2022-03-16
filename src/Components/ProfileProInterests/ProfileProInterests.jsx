import './ProfileProInterests.scss';
import Carousel from 'react-elastic-carousel';
import Procard from '../Procard/ProCard';

function ProfileProInterest() {
  return (
    <div className="interest">
      <h1>Quizas te interese ...</h1>
      <Carousel itemsToShow={3}>
        <Procard />
        <Procard />
        <Procard />
        <Procard />
        <Procard />
      </Carousel>
    </div>
  );
}

export default ProfileProInterest;
