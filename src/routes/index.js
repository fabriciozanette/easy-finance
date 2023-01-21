const rotas = require('express').Router()
const categoriaController = require('../controllers/categoriaController.js')

rotas.get('/', (requisicao,resposta)=>{
    resposta.status(200).send('teste de resposta');
})

rotas.get('/teste', categoriaController.listaCategorias )

module.exports = rotas