import Dashboard from '../components/Dashboard/Dashboard';
import NavigationBar from '../components/Navbar/NavigationBar';
import Footer from '../components/Footer/Footer';

function EditarPerfil() {
  const userToken = localStorage.getItem('user');

  return (
    <>
      <NavigationBar />
      {userToken ? <Dashboard /> : <div>Error 401</div>}
      <Footer />
    </>

  );
}

export default EditarPerfil;
