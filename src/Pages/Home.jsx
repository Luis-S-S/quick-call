import React from "react";
import NavigationBar from '../Components/Navbar/NavigationBar'
import Footer from '../Components/Footer/Footer';
import ClientExpCard from "../Components/ClientExpCard/ClientExpCard";

export const Home = () => {
    return (
      <>
       <NavigationBar/>
       <main>Esto es el Home</main>
       <ClientExpCard/>
       <Footer/>
      </>
    );
  }
