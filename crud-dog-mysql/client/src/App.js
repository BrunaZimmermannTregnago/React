import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/cards";

export default function App() {
  const [values, setValues] = useState();
  const [listDogs, setListDogs] = useState([]);

  useEffect(() => {
    getRegister();
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
     [value.target.name]: value.target.value,
   }));
  };
  
  function getRegister(){
    Axios.get("http://localhost:3001/search").then((response) => {
      if (response.data.length > 0) {
        setListDogs(response.data);
      }
    });
  }

  const handleRegisterDog = () => {
    Axios.post(`http://localhost:3001/register`, {
      nome: values.nome,
      raca: values.raca,
      data_nascimento: values.data_nascimento,
      responsavel: values.responsavel,
      contato: values.contato,
      endereco: values.endereco,
      peso: values.peso,
      porte: values.porte,
    }).then(() => {
      getRegister();
    });
  };

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Cachorros</h1>

        <input
          type="text"
          name="nome"
          placeholder="Nome"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Data Nascimento"
          name="data_nascimento"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Responsável"
          name="responsavel"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Contato"
          name="contato"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Endereço"
          name="endereco"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Raça"
          name="raca"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Peso"
          name="peso"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Porte"
          name="porte"
          className="register-input"
          onChange={handleaddValues}
        />

        <button onClick={handleRegisterDog} className="register-button">
          Cadastrar
        </button>
      </div>
      {listDogs && listDogs.length > 0 &&
        listDogs.map((dog) => (
          <Card
            key={dog.id}
            dog={dog}
            listDogs={listDogs}
            setListDogs={setListDogs}
          />
        ))}
    </div>
  );
}
