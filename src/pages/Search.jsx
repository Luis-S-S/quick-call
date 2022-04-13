import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProCard from '../components/Procard/ProCard';
import { getAllProfessional } from '../services/professional';
import NavigationBar from '../components/Navbar/NavigationBar';
import Footer from '../components/Footer/Footer';
import Filter from '../components/Filter/Filter';

function Search() {
  const [pro, setPro] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getAllProfessional(window.location.search).then((data) => {
      setPro(data);
    });
  }, [searchParams]);

  return (
    <>
      <NavigationBar />
      <Filter />
      <div className={pro.length > 0 ? 'grid' : 'search--error'}>
        {pro.length > 0
          ? (pro.map((item) => <ProCard key={item._id} details={item} />))
          : 'hubo un error'}
      </div>
      <Footer />
    </>
  );
}

export default Search;
