import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ViewRendimentos.css";

const ViewRendimentos = () => {
  const [pessoa, setPessoa] = useState({
    nome: undefined,
    sobrenome: undefined,
    cpf: undefined,
  });

  const [empresas, setEmpresas] = useState({
    cnpjEmpresa: [],
    inssRendimento: [],
    irrf_pagoRendimento: [],
    nomeEmpresa: [],
    salarioRendimento: [],
    valor_recRendimento: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios
        .get("http://localhost:3000/rendimento/32189013287")
        .catch((erro) => alert("Erro " + erro));

      console.log(res.data[1]);
      const nomecompleto =
        res.data[0][0].nomeContribuinte +
        " " +
        res.data[0][0].sobrenomeContribuinte;
      setPessoa({
        nome: nomecompleto,
        cpf: res.data[0][0].cpfContribuinte,
      });

      setEmpresas({
        cnpjEmpresa: res.data
          .filter((cnpj) => cnpj.cnpjEmpresa !== undefined)
          .map((cnpj) => cnpj.cnpjEmpresa),

        inssRendimento: res.data
          .filter((inss) => inss.inssRendimento !== undefined)
          .map((inss) => inss.inssRendimento),

        irrf_pagoRendimento: res.data
          .filter((irrf) => irrf.irrf_pagoRendimento !== undefined)
          .map((irrf) => irrf.irrf_pagoRendimento),

        nomeEmpresa: res.data
          .filter((nomee) => nomee.nomeEmpresa !== undefined)
          .map((nomee) => nomee.nomeEmpresa),

        salarioRendimento: res.data
          .filter((salariorend) => salariorend.salarioRendimento !== undefined)
          .map((salariorend) => salariorend.salarioRendimento),

        valor_recRendimento: res.data
          .filter((rec) => rec.valor_recRendimento !== undefined)
          .map((rec) => rec.valor_recRendimento),
      });

      console.log(pessoa);
      console.log(empresas);
    };

    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="containerv">
      <div className="divo">
        <h3>Contribuinte: {pessoa.nome}</h3>
        <h3> CPF: {pessoa.cpf}</h3>
      </div>

      <table>
        <tr>
          <th>CNPJ empresa</th>
          <th>Nome Empresa</th>
          <th>Valor Total Recebido</th>
          <th>INSS</th>
          <th>IRRF Pago</th>
          <th>Valor 13.Salario</th>
        </tr>
        <td>
          {empresas.cnpjEmpresa.map((cnpj, index) => {
            return <tr key={index}>{cnpj}</tr>;
          })}
        </td>
        <td>
          {empresas.nomeEmpresa.map((cnpj, index) => {
            return <tr key={index}>{cnpj}</tr>;
          })}
        </td>
        <td>
          {empresas.valor_recRendimento.map((cnpj, index) => {
            return <tr key={index}>{cnpj}</tr>;
          })}
        </td>
        <td>
          {empresas.inssRendimento.map((cnpj, index) => {
            return <tr key={index}>{cnpj}</tr>;
          })}
        </td>
        <td>
          {empresas.irrf_pagoRendimento.map((cnpj, index) => {
            return <tr key={index}>{cnpj}</tr>;
          })}
        </td>
        <td>
          {empresas.salarioRendimento.map((cnpj, index) => {
            return <tr key={index}>{cnpj}</tr>;
          })}
        </td>
      </table>
    </div>
  );
};

export default ViewRendimentos;
