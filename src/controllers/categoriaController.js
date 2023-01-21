const cateogiraModel = require('../models/categoriaModel.js')

module.exports = {
    async listaCategorias(requisicao,resposta ) {
        cateogiraModel.buscarTodas        
        return resposta.status(200).json(resultado)
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