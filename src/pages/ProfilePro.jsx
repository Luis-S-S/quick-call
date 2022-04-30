import { useState } from 'react';
import { useParams } from 'react-router-dom';

import NavigationBar from '../components/Navbar/NavigationBar';
import ProfileProDescription from '../components/ProfileProDescription/ProfileProDescription';
import ProfileProInterest from '../components/ProfileProInterests/ProfileProInterests';
import Footer from '../components/Footer/Footer';
import FormsClients from '../components/Formclients/FormClients';
import '../components/Formclients/FormUsers.scss';

function ProfilePro() {
  const { id } = useParams();
  const [vist, setVist] = useState(true);

  const HandlerOnClick = (e) => {
    e.preventDefault();
    setVist(!vist);
  };
  return (
    <>
      <NavigationBar />
      <div className="bodyProfilePro">
        <ProfileProDescription HandlerOnClick={HandlerOnClick} vist={vist} id={id} />
        {(vist) && (<FormsClients id={id} />)}
      </div>
      <ProfileProInterest />
      <Footer />
    </>
  );
}

export default ProfilePro;
