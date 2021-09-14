import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import BensDireitos from "./BensDireitos";
import CadastrarContribuinte from "./CadastrarContribuinte";
import Dependentes from "./Dependentes";
import Home from "./Home";
import RendPessoaJuridica from "./RendPessoaJuridica";

import "./NovaDeclaracao.css";
import ViewRendimentos from "./ViewRendimentos";

function butao(nova, setNova) {
  return (
    <div className="container">
      <form className="form-container">
        <label for="fname">Nome: </label>
        <input type="text" id="fname" name="fname" className="input-cell" />
        <label for="lname"> CPF: </label>
        <input type="text" id="lname" name="lname" className="input-cell" />
      </form>
      <button className="butao" onClick={() => setNova(!nova)}>
        OK
      </button>
    </div>
  );
}

export default function NovaDeclaracao() {
  const [nova, setNova] = useState(false);
  return <div>{nova ? novadec() : butao(nova, setNova)}</div>;
}

function novadec() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cadastrarcontribuinte" exact>
          <CadastrarContribuinte />
        </Route>
        <Route path="/dependentes" exact>
          <Dependentes />
        </Route>
        <Route path="/rendtribpessoajuridica" exact>
          <RendPessoaJuridica />
        </Route>
        <Route path="/rendtribpessoajuridicaview" exact>
          <ViewRendimentos />
        </Route>
        <Route path="/bensedireitos" exact>
          <BensDireitos />
        </Route>
      </Switch>
    </Router>
  );
}
