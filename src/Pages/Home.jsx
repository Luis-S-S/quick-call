import NavigationBar from '../components/Navbar/NavigationBar';
import Footer from '../components/Footer/Footer';
import IntroSection from '../components/IntroSection/IntroSection';
import FeaturedSection from '../components/FeaturedSection/FeaturedSection';
import ClientExperienceSection from '../components/ClientExperienceSection/ClientExperienceSection';

function Home() {
  return (
    <>
      <NavigationBar />
      <IntroSection />
      <FeaturedSection />
      <ClientExperienceSection />
      <Footer />
    </>
  );
}

export default Home;
