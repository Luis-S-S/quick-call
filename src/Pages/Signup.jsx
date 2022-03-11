import React from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
    return (
        <div>
            <Link to="/Login"> Ir a Login</Link>
            <main>Esto es el registro(sign up)</main>
            <Link to="/"> Ir a Home</Link>
        </div>
    );
}
