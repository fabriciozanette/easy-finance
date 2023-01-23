
const conexao = require("../config/dbConnectMysql.js")

module.exports = {
    async buscarTodas() {
        return new Promise( (result,erro)=> {
            conexao.query("SELECT * FROM categorias", (error,result,fields)=>{
                if(error) reject(error)
                resolve(result) //-> Que tipo de dados é este result?
            })
        })
    }
}
