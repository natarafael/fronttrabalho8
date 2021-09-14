import React from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineUser,
  AiOutlineUsergroupAdd,
  AiOutlineBank,
  AiOutlineDollar,
} from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div className="container-home">
        <ul className="ul-home">
          <li className="li-home">
            <NavLink to="/cadastrarcontribuinte" exact className="nav-link">
              <AiOutlineUser className="icon" /> <br /> Identificação
              Contribuinte
            </NavLink>
          </li>

          <li className="li-home">
            <NavLink to="/dependentes" exact className="nav-link">
              <AiOutlineUsergroupAdd className="icon" /> <br /> Dependentes
            </NavLink>
          </li>

          <li className="li-home">
            <NavLink to="/rendtribpessoajuridica" exact className="nav-link">
              <AiOutlineBank className="icon" /> <br /> Rendimentos Tributáveis
              <br /> de Pessoas Juridicas
            </NavLink>
          </li>

          <li className="li-home">
            <NavLink to="/bensedireitos" exact className="nav-link">
              <AiOutlineDollar className="icon" /> <br /> Bens e Direitos
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
