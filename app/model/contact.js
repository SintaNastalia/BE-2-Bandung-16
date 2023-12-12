const connection = require('./index')
const sequelize = require('sequelize')

const contact = connection.define("contact", {
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    firstname: {type: sequelize.DataTypes.TEXT},
    lastname: {type: sequelize.DataTypes.TEXT},
    email: {type: sequelize.DataTypes.TEXT},
    mobile: {type: sequelize.DataTypes.TEXT},
    message: {type: sequelize.DataTypes.TEXT},
}, {
    freezeTableName: true,
    timestamps: false
})

module.exports = contact