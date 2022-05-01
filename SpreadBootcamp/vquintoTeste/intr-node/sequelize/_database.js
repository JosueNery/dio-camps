//const pg = require('pg')
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    database: 'postgres',
    username: 'postgres',
    password: 'example',
    dialect: 'postgres',
    port: 5432,
    logging: false
});

module.exports = sequelize

// Test OR Connection //

async function test() {
    try {
        let result = await sequelize.authenticate()
        console.log("200: Conexao realizada com sucesso!")
    }
    catch (error) {
        console.log("500: Erro ao conectar com o banco de dados")
        console.log(error)
        process.exit()
    }
}

test()