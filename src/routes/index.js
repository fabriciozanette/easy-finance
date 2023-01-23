const rotas = require('express').Router()
const categoriaRoutes = require('../routes/categoriaRoutes.js')

rotas.get('/', (requisicao,resposta)=>{
    resposta.status(200).send('teste de resposta');
})

rotas.use(categoriaRoutes)

module.exports = rotas