import React, { useState } from 'react'
import './App.css';
import CepConsultado from './CepConsultado.js';

function App() {

  const[evento, setEvento] = useState([]);

//função para impedir que o formulario faz reload na pagina
const submitHandler = (e) => {
  e.preventDefault();

  const formData =  new FormData(e.target);
  const data = Object.fromEntries(formData);

  console.log('Recebendo:' + data.nome);
  console.log('Recebendo:' + data.cep);

  fetch(`http://localhost:3011/?cep=${data.cep}`)
  .then(response => response.json())
  .then( data => {
    const array = convertToArray(data);
    console.log("Array: ", array)
    setEvento(array)
  })
  .catch(error => console.error)
}

const convertToArray = (obj) => {
  console.log('Formato Json:', obj);
  const arr = [obj]
  console.log("Formato Array:", arr);
  return arr
}


  return (
    <div className="container">
      <form className="container-form" onSubmit={submitHandler}>
        <div className="form-group" id="nome">
          <input type="text" name="nome" className="form-control" placeholder="Nome"/>
        </div>
        <div className="form-group" id="cep">
          <input type="text" name="cep" className="form-control" placeholder="Cep"/>
        </div>
        <button type="submit" className="btn btn-success">Buscar CEP</button>
      </form>
      <CepConsultado evento={evento}/>
    </div>
  );
}

export default App;
