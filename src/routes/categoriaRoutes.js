const rotasCategoria = require('express').Router()
const categoriaController = require('../controllers/categoriaController.js')

rotasCategoria.get("/categorias", (requisicao,resposta)=>{   
        //console.log(resposta)     
        
        categoriaController.listaCategorias()

        resposta.status(200).json({teste:"teste"});

    })

module.exports = rotasCategoria


