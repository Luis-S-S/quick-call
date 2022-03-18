import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProCard from '../../Components/Procard/ProCard';
import { getAllPro } from '../../Services/pro';

function Search() {
  const [pro, setPro] = useState([]);

  useEffect(() => {
    getAllPro().then((data) => setPro(data));
  }, []);

  return (
    <div>
      <Link to="/">Ir a Home</Link>
      {pro.map((item) => <ProCard key={item.id} details={item} />)}
    </div>

  );
}

export default Search;
