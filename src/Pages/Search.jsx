/* eslint-disable no-underscore-dangle */

import { useEffect, useState } from 'react';
import ProCard from '../Components/Procard/ProCard';
import { getAllPro } from '../Services/pro';
import NavigationBar from '../Components/Navbar/NavigationBar';
import Footer from '../Components/Footer/Footer';

function Search() {
  const [pro, setPro] = useState([]);

  useEffect(() => {
    getAllPro().then((data) => {
      setPro(data);
    });
  }, []);

  return (
    <>
      <NavigationBar />
      <div className="grid">
        {pro.map((item) => <ProCard key={item._id} details={item} />)}
      </div>
      <Footer />
    </>
  );
}

export default Search;
