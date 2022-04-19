import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProfileProDescription.scss';
import ButtonSquare from '../ButtonSquare/ButtonSquare';
import { getSingleProfessional } from '../../services/professional';

function ProfileProDescription() {
  const { id } = useParams();
  const [pro, setPro] = useState([]);

  useEffect(() => {
    getSingleProfessional(id).then((data) => setPro(data));
  }, [id]);

  return (
    <div className="profileDescription">
      <div className="row">
        <div className="column">
          <img className="photo" src={pro.image?.profile} alt="constructor" width={500} height={500} />
        </div>
        <div className="column">
          <div className="description">
            <h1>{pro.name}</h1>
            <p>{pro.myDescription}</p>
          </div>
          <div className="categories">
            <h1>Mis especialidades</h1>
            <div className="categoriesList">
              {pro.specialties?.map((specialty) => (
                <h4>{specialty.name}</h4>
              ))}
            </div>
          </div>
          <div className="calification">
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star" />
            <span className="fa fa-star-half-o" />
            <br />
            <ButtonSquare>Iniciar Chat</ButtonSquare>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProfileProDescription;
