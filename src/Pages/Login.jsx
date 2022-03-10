import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <div>
            <Link to="/Signup"> Ir a Registro</Link>
            <main>Esto es el Login</main>
            <Link to="/"> Ir a Home</Link>
      </div>
    );
  }
