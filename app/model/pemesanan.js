const connection = require('./index')
const sequelize = require('sequelize')

const pemesanan = connection.define("pemesanan", 
{
    id: {type: sequelize.DataTypes.INTEGER, primaryKey: true},
    name: {type: sequelize.DataTypes.TEXT},
    email: {type: sequelize.DataTypes.TEXT},
    checkin: {type: sequelize.DataTypes.DATE},
    checkout: {type: sequelize.DataTypes.DATE},
    adults: {type: sequelize.DataTypes.TEXT},
    child: {type: sequelize.DataTypes.TEXT},    
    room: {type: sequelize.DataTypes.TEXT},
    type_room: {type: sequelize.DataTypes.TEXT},
}, {
    freezeTableName: true,
    timestamps: false,
    tableName: 'pemesanan2'
})

module.exports = pemesanan
