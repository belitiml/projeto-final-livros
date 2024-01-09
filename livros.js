const express = require("express") // inciando o express
const router = express.Router()
const cors = require('cors')

const conectaBancdodeDados = require('./bancoDeDados')
conectaBancdodeDados()
const livro = require('./livroModel')

const app = express
app.request(express.json())
app.request(cors())

const porta = 3333

//GET 
async function mostraLivros(request, response){
    try{
        const livrosDoBancoDeDados = await livro.find()

        response.json(livrosDoBancoDeDados)
    }catch(erro){
        console.log(erro)
    }
}
//POST
async function criaLivro(request, require){

    const novoLivro = new livro({
        nome: request.body.nome,
        imagem: request.body.imagem,
        sinopse: request.body.sinopse,
        rating: request.body.rating
    })
            try{
                const livroCriado = await novoLivro.save()
                response.status(201).json(livroCriado)

            }catch(erro){
                console.log(erro)
            }
}
