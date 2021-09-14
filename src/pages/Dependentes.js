import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";

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

export default function Dependentes() {
  const classes = useStyles();
  const [tipoDependente, setTipoDependente] = useState(
    "21 - Filho(a) ou enteado(a) até 21 (vinte e um) anos."
  );

  const tiposDependente = [
    "21 - Filho(a) ou enteado(a) até 21 (vinte e um) anos.",
    "11 - Companheiro(a) com o(a) qual o(a) contribuinte tenha filho(a) ou viva há mais de 5 (cinco) anos, ou cônjuge.",
    "51 - A pessoa absolutamente incapaz, da qual o contribuinte seja tutor ou curador.",
  ];

  return (
    <>
      <div className="container">
        <form>
          <h4>Dados Do Dependente</h4>

          <div className={classes.root}>
            <TextField
              label="Tipo de Dependente"
              required
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              select
              value={tipoDependente}
              onChange={(e) => {
                setTipoDependente(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            >
              {tiposDependente.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="CPF"
              required
              className={classes.textField}
            />

            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Data de Nascimento"
              required
              placeholder="              /    /"
              className={classes.textField}
            />

            <TextField
              label="Nome"
              required
              style={{ margin: 8 }}
              placeholder="Nome completo"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>

          <br />
          <div className="button-container">
            <Button
              className="botao"
              variant="contained"
              type="submit"
              color="primary"
            >
              OK
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
