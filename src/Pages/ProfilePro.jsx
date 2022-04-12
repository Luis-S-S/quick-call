import NavigationBar from '../components/Navbar/NavigationBar';
import ProfileProDescription from '../components/ProfileProDescription/ProfileProDescription';
import ProfileProInterest from '../components/ProfileProInterests/ProfileProInterests';
import Footer from '../components/Footer/Footer';

function ProfilePro() {
  return (
    <>
      <NavigationBar />
      <ProfileProDescription />
      <ProfileProInterest />
      <Footer />
    </>
  );
}

export default ProfilePro;
