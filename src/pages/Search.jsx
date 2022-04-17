import NavigationBar from '../components/Navbar/NavigationBar';
import Filter from '../components/Filter/Filter';
import ProfessionalCardDisplay from '../components/ProfessionalCardDisplay/ProfessionalCardDisplay';
import Footer from '../components/Footer/Footer';
import './Search.scss';

function Search() {
  return (
    <>
      <NavigationBar />
      <div className="general-container">
        <Filter />
        <ProfessionalCardDisplay />
      </div>
      <Footer />
    </>
  );
}

export default Search;
