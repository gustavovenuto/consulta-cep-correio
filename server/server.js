const express = require('express');
const server = express();
const cors = require("cors")
const Correios = require("node-correios");
const correio = new Correios();

const porta = 3011

server.use(cors())

server.listen(porta, () => console.log(`Servidor Rodando na porta: ${porta}`));

server.get('/', (req, res) => {
    console.log('Rota de CEP Encontrada!!');
    const { cep } = req.query;
    console.log('>> ' + cep);

    correio.consultaCEP({cep: cep})
    .then( result => {
        console.log(result)
        res.send(result)
    })
    .catch(error => {
        console.log("Ocorreu um Erro" + error)
    })
})