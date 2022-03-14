import React from "react";
import { Link } from "react-router-dom";
import './ButtonRound.scss';

function ButtonRound({text, link}) {
    return (
        <Link className="button-round" to={link}>{text}</Link>
    )
}

export default ButtonRound;
