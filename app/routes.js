const express = require('express');
const router = express.Router();
const controller = require("./controller/index");
const multer = require("multer");
const path = require("path");

/* route init */
router.post('/pemesanan', controller.pemesananHandler)
router.post('/contact', controller.contactHandler)


module.exports = router;
