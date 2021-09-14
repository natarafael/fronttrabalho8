import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { Button } from "@material-ui/core";

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

export default function CadastrarContribuinte() {
  const classes = useStyles();

  const [UF, setUF] = useState("PR");
  const [pais, setPais] = useState("Brasil");
  const [tipo, setTipo] = useState("Avenida");
  const [municipio, setMunicipio] = useState("Foz do Iguaçu");
  const [natureza, setNatureza] = useState(
    "14 - Microempreendedor individual (MEI)"
  );

  const UFs = ["PR", "AM", "SP", "BH", "RN"];
  const tipos = ["Alameda", "Avenida", "Area", "Campo"];
  const municipios = ["Foz do Iguaçu", "Londrina", "Cascavel"];
  const paises = ["Brasil", "exterior"];
  const naturezas = [
    "14 - Microempreendedor individual (MEI)",
    "12 - Proprietário de empresa ou de firma individual ou empregador-titular",
    "32 - Servidor público de autarquia ou fundação estadual e do Distrito Federal",
  ];

  return (
    <>
      <div className="container">
        <form>
          <h4>Dados contribuinte</h4>
          <div className={classes.root}>
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
              InputLabelProps={{
                shrink: true,
              }}
              label="Titulo de eleitor"
              required
              className={classes.textField}
            />

            {/* CAIXINHA DE SELECAO DE CONJUGUE */}

            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="CPF do conjuge ou companheiro"
              className={classes.textField}
            />
          </div>

          <h4>Endereço</h4>
          <div className={classes.root}>
            {/* SELECT PAIS */}

            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Pais"
              select
              value={pais}
              required
              className={classes.textField}
              onChange={(e) => {
                setPais(e.target.value);
              }}
            >
              {paises.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Tipo"
              select
              value={tipo}
              required
              className={classes.textField}
              onChange={(e) => {
                setTipo(e.target.value);
              }}
            >
              {tipos.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Logradouro"
              required
              className={classes.textField}
            />

            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Numero"
              required
              className={classes.textField}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Complemento"
              required
              className={classes.textField}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Bairro"
              required
              className={classes.textField}
            />

            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="UF"
              select
              value={UF}
              required
              className={classes.textField}
              onChange={(e) => {
                setUF(e.target.value);
              }}
            >
              {UFs.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Municipio"
              select
              value={municipio}
              required
              className={classes.textField}
              onChange={(e) => {
                setMunicipio(e.target.value);
              }}
            >
              {municipios.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="CEP"
              required
              className={classes.textField}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Telefone"
              required
              helperText="(0xx) 9..."
              className={classes.textField}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Celular"
              required
              className={classes.textField}
            />
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Email"
              required
              className={classes.textField}
            />
          </div>
          <h4>Ocupação Principal</h4>

          <div className={classes.root}>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Natureza da Ocupação"
              select
              value={natureza}
              required
              className={classes.textField}
              onChange={(e) => {
                setNatureza(e.target.value);
              }}
            >
              {naturezas.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              InputLabelProps={{
                shrink: true,
              }}
              label="Ocupação Principal"
              required
              className={classes.textField}
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
              Salvar
            </Button>
            <br />
            <Button color="secondary" variant="outlined" type="reset">
              Limpar
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
