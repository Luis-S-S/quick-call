import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPQRByPetitioner } from '../../../../services/pqrs';
import PQRListItem from '../../../PQRListItem/PQRListItem';
import LinkRound from '../../../LinkRound/LinkRound';
import './PQR.scss';

export default function PQRs() {
  const { _id } = useSelector((state) => state.user);
  const [pqrArray, setPQRArray] = useState([]);

  useEffect(async () => {
    const pqrResp = await getPQRByPetitioner(_id);
    setPQRArray(await pqrResp.json());
  }, []);

  return (
    <div className="dashboard-pqrs">
      <div className="dashboard-pqrs__title">Tus PQRs</div>
      <div className="dashboard-pqrs__sub-header">
        <LinkRound link="/pqr_form" data-cy="pqr-create">Crear</LinkRound>
      </div>
      {
      pqrArray.length > 0
        ? pqrArray.map((pqr) => (
          <PQRListItem key={pqr._id} pqrInfo={pqr} />
        ))
        : (
          <h1 className="dashboard-favorites--error">Actualmente no tienes PQRs</h1>
        )
      }
    </div>
  );
}
