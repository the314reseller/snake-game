const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/", (req, res) => res.status(200).sendFile(path.join(__dirname, "index.html")));

router.get("/css", (req, res) => res.status(200).sendFile(path.join(__dirname, "code/css.html")));
router.get("/html", (req, res) => res.status(200).sendFile(path.join(__dirname, "code/html.html")));

module.exports = router;