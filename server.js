const express   = require('express')
const rotas     = require("./src/routes/index.js")
const servidor  = express()

const port = process.env.port || 3000;

servidor.listen(port, ()=>{
    console.log(`Servidor escutando em http://localhost:${port}`)
})

servidor.use('/',rotas)

/**
const rotas = express.Router()

rotas.get('/', (requisicao,resposta)=>{
    resposta.status(200).send('teste de resposta');
})

rotas.get('/teste', (requisicao,resposta)=>{
    resposta.status(200).send('Funfou');
})

 */