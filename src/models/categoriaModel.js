
const conexao = require("../config/dbConnectMysql.js")

module.exports = {
    async buscarTodas() {
        return new promises( (resultado,erro)=> {
            conexao.query("SELECT * FROM categorias", (error,result,fields)=>{
                if(error) rejecet({vazio:""})
                resolve(result) //-> Que tipo de dados é este result?
            })
        })
    }
}
