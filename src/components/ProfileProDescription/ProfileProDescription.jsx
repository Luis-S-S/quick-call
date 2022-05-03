/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
import { useEffect, useState } from 'react';
import './ProfileProDescription.scss';
import ButtonRound from '../ButtonRound/ButtonRound';
import { getSingleProfessional } from '../../services/professionals';

function ProfileProDescription({ HandlerOnClick, vist, id }) {
  const [pro, setPro] = useState([]);

  useEffect(() => {
    getSingleProfessional(id).then((data) => setPro(data));
  }, [id]);

  return (
    <div className="profileDescription">
      <div className="row">
        {(!vist) && (
        <div className="column">
          <img className="photo" src={pro.image?.profile} alt="constructor" />
        </div>
        )}
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
            <ButtonRound isSubmit={false} onClickFunction={HandlerOnClick}>{vist ? 'Ocultar formulario' : 'Hacer consulta'}</ButtonRound>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProfileProDescription;
