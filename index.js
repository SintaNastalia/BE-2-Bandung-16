const express = require("express") // ini perlu
const path = require('path'); //tidak perlu npm install
const connection = require('./app/model/index')

// init express server and router
const app = express();
const mainRouter = require('./app/routes');

const cors = require("cors");

app.use(express.json()); // supaya express bisa response json
app.use(express.urlencoded({ extended: false })); // supaya express bisa menerima body
app.use(express.static("public"));

app.use(
    cors({
        origin: "*", // Ganti dengan domain aplikasi Anda jika mungkin
        methods: "POST", // Hanya izinkan metode POST
        allowedHeaders: ["Content-Type"],
        optionsSuccessStatus: 204,
    })
);

// http router
app.use("/", mainRouter);


const port = process.env.PORT || 30098 || 7162
app.listen(port, function(){
    console.log("server start on", port)
    connection.authenticate()
    .then(function(){
        console.log("Database terhubung")
    })
    .catch(function(err){
        console.log("Error saat koneksi ke database", err)
        process.exit()
    })
})
