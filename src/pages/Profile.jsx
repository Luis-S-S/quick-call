import NavigationBar from '../components/Navbar/NavigationBar';
import Dashboard from '../components/Dashboard/Dashboard';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import Footer from '../components/Footer/Footer';

function EditarPerfil() {
  const userToken = localStorage.getItem('user');

  return (
    <div>
      {
        userToken
          ? (
            <>
              <NavigationBar />
              <Dashboard />
              <Footer />
            </>
          )
          : (<ErrorMessage code={401} message="Oops! Inicia sesión para continuar" />)
      }
    </div>
  );
}

export default EditarPerfil;
