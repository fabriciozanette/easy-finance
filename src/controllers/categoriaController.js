const { json } = require('express')
const cateogiraModel = require('../models/categoriaModel.js')

module.exports = {
    async listaCategorias(requisicao,resposta ) {

        let categorias = await cateogiraModel.buscarTodas()
        
                        
        
        console.log("testess---------------------------------------")
        console.log("testess------------------a---------------------")
        console.log("testess---------------------------------------")
        console.log("testess---------------------------------------")
        
        /*
        for( let i in categorias) {
            console.log(categorias[i].Categoria)
            json.result.push({
                codigo: categorias[i].Categoria
            })
        }
        */
        return resposta.status(200).json({teste:"Teste"})
    }
}

/*
import fileserv         from "fs"

if(error) throw error;        
fileserv.writeFile('categorias.json', JSON.stringify(result), (error)=>{
    

    fileserv.readFile("categorias.json",'utf8', (error,result)=>{
        if(error) throw error

            categorias = JSON.parse(result)
    })
    conout("categ")

    return categorias
*/