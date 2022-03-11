import React from "react";
import { Header } from '../Components/Header/Header';
import { Footer } from '../Components/Footer/Footer';
import ButtonSquare from "../Components/ButtonSquare/ButtonSquare";
import ButtonRound from "../Components/ButtonRound/ButtonRound";

export const Home = () => {
    return (
      <div>
       <Header/>
       <main>Esto es el Home</main>
       <ButtonSquare text="Signup" link="/Signup" />
       <ButtonRound text="Log in" link="/Login" />
       <Footer/>
      </div>
    );
  }
