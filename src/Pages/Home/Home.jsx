import Footer from '../../Components/Footer/Footer';
import IntroSection from '../../Components/IntroSection/IntroSection';
import FeaturedSection from '../../Components/FeaturedSection/FeaturedSection';
import ClientExperienceSection from '../../Components/ClientExperienceSection/ClientExperienceSection';

function Home() {
  return (
    <>
      {/* <NavigationBar/> */}
      <IntroSection />
      <FeaturedSection />
      <ClientExperienceSection />
      <Footer />
    </>
  );
}

export default Home;
