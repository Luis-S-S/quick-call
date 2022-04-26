import Dashboard from '../components/Dashboard/Dashboard';
import NavigationBar from '../components/Navbar/NavigationBar';
import Footer from '../components/Footer/Footer';

function EditarPerfil() {
  const userToken = localStorage.getItem('user');

  return (
    <div>
      <NavigationBar />
      {userToken ? <Dashboard /> : <div>Error 401</div>}
      <Footer />
    </div>

  );
}

export default EditarPerfil;
