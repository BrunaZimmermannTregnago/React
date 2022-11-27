import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        nome={props.dog.nome}
        peso={props.dog.peso}
        responsavel={props.dog.responsavel}
        raca={props.dog.raca}
        data_nascimento={props.dog.data_nascimento}
        contato={props.dog.contato}
        endereco={props.dog.endereco}
        porte={props.dog.porte}
        listDogs={props.listDogs}
        setListDogs={props.setListDogs}
        id={props.dog.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.dog.nome}</h1>
        <p className="card-id">{props.dog.id}</p>
        <p className="card-cartegory">{props.dog.responsavel}</p>
      </div>
    </>
  );
}
