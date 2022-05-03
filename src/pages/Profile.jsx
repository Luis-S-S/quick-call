import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import NavigationBar from '../components/Navbar/NavigationBar';
import Dashboard from '../components/Dashboard/Dashboard';
import Footer from '../components/Footer/Footer';

function EditarPerfil() {
  const { _id } = useSelector((state) => state.user);
  const navigation = useNavigate();

  useEffect(() => {
    if (!_id) {
      navigation('/login_redirect');
    }
  }, []);

  return (
    <>
      <NavigationBar />
      <Dashboard />
      <Footer />
    </>
  );
}

export default EditarPerfil;
