const { Model } = require('sequelize')
const contact = require('../model/contact')
const pemesanan = require('../model/pemesanan')

const contactHandler = async (req, res) => {
    try {
        const body = req.body
        console.log(body)
        const firstname = body.firstname
        const lastname = body.lastname
        const email = body.email
        const mobile = body.mobile
        const message = body.message
        await contact.create({
            firstname,
            lastname,
            email,
            mobile,
            message,
        });
        return res.send({
            status: 200,
            message: "Berhasil menyimpan data", body 
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: "Gagal menyimpan data",
        });
    }
}

const pemesananHandler = async(req, res) => {
    try {
        const body = req.body
        console.log(body)
        const name = body.name
        const email = body.email
        const checkin = body.checkin
        const checkout = body.checkout
        const adults = body.adults
        const child = body.child
        const room = body.room
        const type_room = body.type_room
        await pemesanan.create({
            name,
            email,
            checkin,
            checkout,
            adults,
            child,
            room,
            type_room
        });
        return res.send({
            status: 200,
            message: "Berhasil menyimpan data", body
        });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            message: "Gagal menyimpan data",
        });
    }
}


module.exports = {
    contactHandler,
    pemesananHandler
}