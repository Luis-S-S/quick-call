import React from "react";
import { Link } from "react-router-dom";
import './button-round.scss';

function ButtonRound({text, link}) {
    return (
        <Link to={link}>{text}</Link>
    )
}

export default ButtonRound;