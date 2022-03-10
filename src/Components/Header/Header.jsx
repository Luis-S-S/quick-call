import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <div>
        <li className="active">
                  <Link to="/Login"> Login </Link>
                  <Link to="/Signup"> Registro </Link>
        </li>
      </div>
    );
  }
