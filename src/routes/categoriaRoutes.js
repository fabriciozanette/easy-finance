const rotasCategoria = require('express').Router()

rotasCategoria
    .get("/categorias", (requisicao,resposta)=>{
        resposta.status(200).send('teste categorias');
    })

module.exports = rotasCategoria


