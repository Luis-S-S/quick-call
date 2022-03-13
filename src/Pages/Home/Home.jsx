import React from "react";
import NavigationBar from '../../Components/Navbar/NavigationBar'
import { Footer } from '../../Components/Footer/Footer';
import ButtonSquare from "../../Components/ButtonSquare/ButtonSquare";
import ButtonRound from "../../Components/ButtonRound/ButtonRound";

export const Home = () => {
    return (
      <div>
       <NavigationBar/>
       <main>Esto es el Home</main>
       <ButtonSquare text="Signup" link="/Signup" />
       <ButtonRound text="Log in" link="/Login" />
       <Footer/>
      </div>
    );
  }
