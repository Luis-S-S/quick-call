import "./Login.scss";
import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  return (
    <div class="Login">
      <div><img class="imagen" src="/images/IMAGEN.png" alt="" /></div>
      <div className="principal">
        <div className="regresar">
          <div>
            <img src="images/back.svg" alt="" />
          </div>
        </div>
        <div className="register">
          <div className="register1">
            <span className="titulo_register">Register</span>
            <span className="texto_register">Create your new account</span>
          </div>
          <div className="ramita">
            <img src="images/ramita.png" alt="" />
          </div>
        </div>
        <div className="formulario">
          <input placeholder="Full name" type="text" />
          <input placeholder="Michelle@example.com" type="email" />
          <input placeholder="Password" type="password" />
          <input placeholder="Repeat password" type="password" />
        </div>

        <span className="signing">
          By signing up you’ve agree to Our{" "}
          <span className="signing1">Terms of Use And Privacy Notice </span>{" "}
        </span>

        <span className="footer">
          Already have an account? <Link to="/login"> Login</Link>
        </span>
      </div>
    </div>
  );
};
