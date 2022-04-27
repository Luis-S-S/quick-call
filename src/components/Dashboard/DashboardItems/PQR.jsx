import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getClientByEmail } from '../../../services/clients';
import { getPQRByPetitioner } from '../../../services/pqr';

export default function PQR() {
  const userEmail = useSelector((state) => state.user.email);
  const [pqrArray, setPQRArray] = useState([]);

  useEffect(async () => {
    const clientResp = await getClientByEmail(userEmail);
    const { id } = await clientResp.json();
    const pqrResp = await getPQRByPetitioner(id);
    setPQRArray(await pqrResp.json());
  }, []);

  console.log(pqrArray);

  return (
    <div className="dashboard-pqrs">
      <h1 className="dashboard-pqrs--error">Actualmente no tienes ningún PQR</h1>
    </div>
  );
}
