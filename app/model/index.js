const sequelize = require('sequelize')
const mysql = require('mysql2')

const connection = new sequelize.Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD, {
    host: process.env.MYSQLHOST,
    dialect: 'mysql',
    port: 30098,
    logging: false 
})

module.exports = connection