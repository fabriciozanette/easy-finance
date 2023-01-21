

const mysql = require("mysql")

require("dotenv").config()

const conectionMysql = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

conectionMysql.connect( (error)=>{
    if (error) throw error;
    console.log("Connected with Mysql!");
})

module.exports = conectionMysql
