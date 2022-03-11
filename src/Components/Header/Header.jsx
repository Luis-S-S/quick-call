import React from "react";
import { Link } from "react-router-dom";
import '../../App.scss'
import './header.scss'

export const Header = () => {
    return (
      <div className="header">
        <Link to="/">
          <img className="header__logo" src="pending_media_change_by_pacho" alt="Quick Call Logo" />
        </Link>
        <div className="header__search">
          <input className="search__bar" type="text" name="search" id="search" placeholder="¿Qué necesitas?" />
          <button>
            <img className="search__icon" src="pending_media_change_by_pacho" alt="Search icon" />
          </button>
        </div>
        <div className="header__menu">
          <button className="menu__icon">
            <img src="pending_media_change_by_pacho" alt="hamburguer-icon" />
          </button>
          <div className="menu__link-list">
            <Link to="/Search" className="list__link">Servicios</Link>
            <Link to="/Signup" className="list__link">Registro</Link>
            <Link to="/Login" className="list__link">Iniciar Sesión</Link>
          </div>
        </div>
      </div>
    );
}
