import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "30ch",
  },
}));

export default function RendPessoaJuridica() {
  const classes = useStyles();
  const [rendimentos, setRendimentos] = useState({
    cnpj: undefined,
    valor: undefined,
    inss: undefined,
    salario: undefined,
    irrf: undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const fetchRendimento = async () => {
      await setRendimentos({
        valor: e.target.elements.valor.value,
        inss: e.target.elements.inss.value,
        salario: e.target.elements.salario.value,
        irrf: e.target.elements.irrf.value,
        empresa: e.target.elements.cnpj.value,
      });
      console.log(rendimentos);

      await axios
        .post("http://localhost:3000/rendimento/32189013287", rendimentos)
        .then(function (response) {
          return <div> {alert(response.data)} </div>;
        })
        .catch(function (error) {
          return <div> {alert(error.data)} </div>;
        });
    };

    fetchRendimento();
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h4>Rendimentos Tributáveis de Pessoa Jurídica</h4>

          <div className={classes.root}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="CNPJ da principal fonte pagadora"
              id="cnpj"
              className={classes.textField}
            />

            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              id="valor"
              label="Rendimentos recebidos de pessoa jurídica"
              placeholder="0,00"
              className={classes.textField}
            />

            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="INSS"
              id="inss"
              placeholder="0,00"
              className={classes.textField}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="13° salário"
              placeholder="0,00"
              id="salario"
              className={classes.textField}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="IRRF sobre o 13° salário"
              placeholder="0,00"
              id="irrf"
              className={classes.textField}
            />
          </div>

          <br />
          <div className="button-container">
            <Button
              type="submit"
              className="botao"
              variant="contained"
              color="primary"
            >
              OK
            </Button>
            <NavLink to="rendtribpessoajuridicaview">
              <Button className="botao" color="primary">
                Ver Rendimentos
              </Button>
            </NavLink>
          </div>
        </form>
      </div>
    </>
  );
}
