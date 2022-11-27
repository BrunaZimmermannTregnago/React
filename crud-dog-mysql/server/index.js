const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Bruna123!!",
  database: "cruddog",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { nome } = req.body;
  const { data_nascimento } = req.body;
  const { responsavel } = req.body;
  const { contato } = req.body;
  const { endereco } = req.body;
  const { raca } = req.body;
  const { peso } = req.body;
  const { porte } = req.body;

  let mysql = "INSERT INTO dog ( nome, data_nascimento, responsavel, contato, endereco, raca, peso, porte) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(mysql, [nome, data_nascimento, responsavel, contato, endereco, raca, peso, porte], (err, result) => {
    res.send(result);
  });
});

app.get("/search", (req, res) => {

  let mysql =
    "SELECT * from dog";
    db.query(mysql, [], (err, result) => {
      if (err) res.send(err);
    res.send(result);
  });
});


app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { nome } = req.body;
  const { responsavel } = req.body;
  const { contato } = req.body;
  const { endereco } = req.body;
  const { raca } = req.body;
  const { peso } = req.body;
  const { porte } = req.body;
  let mysql = "UPDATE dog SET id = ?, nome = ?, responsavel = ?, contato = ?, endereco = ?, raca = ?, peso = ?, porte = ? WHERE id = "+id;
  db.query(mysql, [id, nome, responsavel, contato, endereco, raca, peso, porte], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM dog WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});

function dataAtualFormatada(date){
    let data = new Date(date);
      dia  = data.getDate().toString();
      diaF = (dia.length == 1) ? '0'+dia : dia;
      mes  = (data.getMonth()+1).toString();//+1 pois no getMonth Janeiro começa com zero.
      mesF = (mes.length == 1) ? '0'+mes : mes;
      anoF = data.getFullYear();
  return anoF +"-"+mesF+"-"+diaF;
}