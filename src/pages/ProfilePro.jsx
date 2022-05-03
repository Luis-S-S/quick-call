import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavigationBar from '../components/Navbar/NavigationBar';
import ProfileProDescription from '../components/ProfileProDescription/ProfileProDescription';
import ProfileProInterest from '../components/ProfileProInterests/ProfileProInterests';
import Footer from '../components/Footer/Footer';
import '../components/FormUser/FormUsers.scss';
import FormsProfessionals from '../components/FormUser/FormProfessionals';
// import FormClients from '../components/FormUser/FormClients';

function ProfilePro() {
  const { id } = useParams();
  const { _id } = useSelector((state) => state.user);
  const navigation = useNavigate();
  const [vist, setVist] = useState(true);

  const HandlerOnClick = (e) => {
    e.preventDefault();
    if (_id) {
      setVist(!vist);
    } else {
      navigation('/login_redirect');
    }
  };
  return (
    <>
      <NavigationBar />
      <div className="bodyProfilePro">
        <ProfileProDescription HandlerOnClick={HandlerOnClick} vist={vist} id={id} />
        {(vist) && (<FormsProfessionals id={id} />)}
      </div>
      <ProfileProInterest />
      <Footer />
    </>
  );
}

export default ProfilePro;
