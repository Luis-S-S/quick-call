import { useEffect, useState } from 'react';
import ProCard from '../Components/Procard/ProCard';
import { getAllPro } from '../Services/pro';
import NavigationBar from '../Components/Navbar/NavigationBar';
import Footer from '../Components/Footer/Footer';

function Search() {
  const [pro, setPro] = useState([]);

  useEffect(() => {
    try {
      getAllPro().then((data) => {
        // console.log("data:", data);
        setPro(data);
        console.log('pro:', pro);
      });
    } catch (error) {
      console.log(error);
    }
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
