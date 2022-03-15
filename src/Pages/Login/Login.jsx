import React from "react";
import { Link } from "react-router-dom";
import Forms from "../../Components/Forms/Form";
import "./Login.scss";


export const Login = () => {
  return (
    <div class="login">
      <img class="imagen" src="/images/IMAGEN.png" alt="" />
      <div class="principal">
        <div class="regresar">
          <div>
            <img src="images/back.svg" alt="" />
          </div>
        </div>
        <div class="register">
          <div class="register1">
            <span class="titulo_register">Welcome back</span>
            <span class="texto_register">Login in your accounts</span>
          </div>
          <div class="ramita">
            <img src="images/ramita.png" alt="" />
          </div>
        </div>
        <div class="formulario">
          <input placeholder="Input your E-mail" type="email" />
          <input placeholder="Input your Password" type="password" />
        </div>
        <span class="signing">Usar login social </span>
        <span class="footer">
          Already have an account? <Link to="/Signup"> Ir a Registro</Link>
        </span>
      </div>
    </div>
  );
};
