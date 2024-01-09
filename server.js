const express = require("express")

const app = express()
const porta = 3333

function mostraPorta() {
    console.log ('Servidor criando e rodando na porta', porta)
}

mostraPorta()

