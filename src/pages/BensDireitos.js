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

export default function BensDireitos() {
  const classes = useStyles();

  const [codigo, setCodigo] = useState("01 - Prédio residencial.");
  const [pais, setPais] = useState("01 - Prédio residencial.");

  const codigos = [
    "01 - Prédio residencial.",
    "02 - Prédio comercial.",
    "11 - Apartamento.",
    "12 - Casa.",
  ];
  const paises = [
    "105 - Brasil",
    "149 - Canadá",
    "154 - Catar",
    "160 - China, República Popular",
  ];

  return (
    <>
      <div className="container">
        <form>
          <h4>Dados do Bem</h4>

          <div className={classes.root}>
            <TextField
              label="Código"
              required
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              select
              value={codigo}
              onChange={(e) => {
                setCodigo(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            >
              {codigos.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Localizaão (País)"
              required
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              select
              value={pais}
              onChange={(e) => {
                setPais(e.target.value);
              }}
              InputLabelProps={{
                shrink: true,
              }}
            >
              {paises.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              label="Discriminação"
              required
              style={{ margin: 8 }}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Situação em 31/12/2017(R$)"
              required
              className={classes.textField}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Situação em 31/12/2018(R$)"
              required
              className={classes.textField}
            />
            <Button color="primary">Repetir</Button>
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
