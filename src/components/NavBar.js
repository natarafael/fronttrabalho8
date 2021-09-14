import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  return (
    <div>
      <ul className="side-nav">
        <li className="liside">
          <NavLink
            to="/"
            exact
            className="nav-link"
            activeStyle={{ color: "#00a6ae" }}
          >
            Inicio
          </NavLink>
        </li>
        <li className="liside">
          <NavLink
            to="/cadastrarcontribuinte"
            exact
            className="nav-link"
            activeStyle={{ color: "#00a6ae" }}
          >
            Ident. do Contribuinte
          </NavLink>
        </li>
        <li className="liside">
          <NavLink
            to="/dependentes"
            exact
            className="nav-link"
            activeStyle={{ color: "#00a6ae" }}
          >
            Dependentes
          </NavLink>
        </li>
        <li className="liside">
          <NavLink
            to="/rendtribpessoajuridica"
            exact
            className="nav-link"
            activeStyle={{ color: "#00a6ae" }}
          >
            Rend. Trib. Receb. de Pessoa Jurídica
          </NavLink>
        </li>
        <li className="liside">
          <NavLink
            to="/bensedireitos"
            exact
            className="nav-link"
            activeStyle={{ color: "#00a6ae" }}
          >
            Bens e Direitos
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
