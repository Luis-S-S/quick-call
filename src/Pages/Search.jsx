import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProCard from '../Components/Procard/ProCard';
import { getAllPro } from '../Services/pro';
import NavigationBar from '../Components/Navbar/NavigationBar';
import Footer from '../Components/Footer/Footer';
import Filter from '../Components/filter/filter';

function Search() {
  const [pro, setPro] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    getAllPro(window.location.search).then((data) => {
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
