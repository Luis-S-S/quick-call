import React from "react";
import { Link } from "react-router-dom";
import Forms from "../../Components/Forms/Form";

export const Login = () => {
    return (
        <div>
            <Link to="/Signup"> Ir a Registro</Link>
            <Forms/>
            <Link to="/"> Ir a Home</Link>
      </div>
    );
  }
