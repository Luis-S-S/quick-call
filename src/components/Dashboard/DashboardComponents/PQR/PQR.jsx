import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getClientByEmail } from '../../../../services/clients';
import { getPQRByPetitioner } from '../../../../services/pqr';
import PQRListItem from '../../../PQRListItem/PQRListItem';
import LinkRound from '../../../LinkRound/LinkRound';
import './PQR.scss';

export default function PQRs() {
  const userEmail = useSelector((state) => state.user.email);
  const [pqrArray, setPQRArray] = useState([]);

  useEffect(async () => {
    const clientResp = await getClientByEmail(userEmail);
    const { id } = await clientResp.json();
    const pqrResp = await getPQRByPetitioner(id);
    setPQRArray(await pqrResp.json());
  }, []);

  return (
    <div className="dashboard-pqrs">
      <div className="dashboard-pqrs__title">Tus PQRs</div>
      <div className="dashboard-pqrs__sub-header">
        <LinkRound link="/pqr_form">Crear</LinkRound>
      </div>
      {
      pqrArray.length > 0
        ? pqrArray.map((pqr) => (
          <PQRListItem pqrInfo={pqr} />
        ))
        : (
          <h1 className="dashboard-favorites--error">Actualmente no tienes PQRs</h1>
        )
      }
    </div>
  );
}
