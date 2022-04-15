import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProCard from '../Procard/ProCard';
import { getAllProfessional } from '../../services/professional';

function ProfessionalCardDisplay() {
  const [pro, setPro] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getAllProfessional(window.location.search).then((data) => {
      setPro(data);
    });
  }, [searchParams]);

  return (
    <div className="card-display__container">
      <div className="card-display__filters">Hola</div>
      <div className={pro.length > 0 ? 'grid' : 'search--error'}>
        {pro.length > 0
          ? (pro.map((item) => <ProCard key={item._id} details={item} />))
          : 'hubo un error'}
      </div>
    </div>
  );
}

export default ProfessionalCardDisplay;
