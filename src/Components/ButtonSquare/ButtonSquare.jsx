import React from "react";
import { Link } from "react-router-dom";
import './button-square.scss';

function ButtonSquare({text, link}) {
    return (
        <Link className="button-square" to={link}>{text}</Link>
    )
}

export default ButtonSquare;
