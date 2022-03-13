import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
    return (
        <div>

<img class="imagen" src="/images/IMAGEN.png"/>
    <div class="principal">

        <div class="regresar">
            <div><img src="images/back.svg" alt=""/></div>
        </div>
        <div class="register">
            <div class="register1">
                <span class="titulo_register">Register</span>
                <span class="texto_register">Create your new account</span>
            </div>
            <div class="ramita"><img src="images/ramita.png" alt=""/></div>
        </div>
        <div class="fomulario">
            <div class="name"><img src="images/user.png"/> Full name</div>
            <div class="name"><img src="images/mensaje.png"/> michelle@example.com</div>
            <div class="name"><img src="images/password.png"/> Password</div>
            <div class="name"><img src="images/password.png"/> Repeat password</div>
        </div>

        <span class="signing">By signing up you’ve agree to Our <span class="signing1">Terms of Use And Privacy Notice </span> </span>

        <a class="boton">Sign up</a>

        <span class="footer">Already have an account? <a href="login.html"> Login</a></span>


    </div>
            <Link to="/Login"> Ir a Login</Link>
            <main>Esto es el registro(sign up)</main>
            <Link to="/"> Ir a Home</Link>
      </div>
    );
  }
