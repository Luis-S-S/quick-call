import React from "react";
import NavigationBar from '../Components/Navbar/NavigationBar'
import Footer from '../Components/Footer/Footer';
import IntroSection from "../Components/IntroSection/IntroSection";
import FeaturedSection from "../Components/FeaturedSection/FeaturedSection";
import ClientExperienceSection from "../Components/ClientExperienceSection/ClientExperienceSection";

export const Home = () => {
    return (
      <>
       {/* <NavigationBar/> */}
       <IntroSection/>
       <FeaturedSection/>
       <ClientExperienceSection/>
       <Footer/>
      </>
    );
  }
