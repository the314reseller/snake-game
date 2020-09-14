const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(__dirname + "/views/"));

app.get("/", (req, res) => res.status(200).sendFile(path.join(__dirname, "views/index.html")));
app.get("/game", (req, res) => res.status(200).sendFile(path.join(__dirname, "views/game/index.html")));
app.get("/code", (req, res) => res.status(200).sendFile(path.join(__dirname, "views/source/index.html")));
app.use("/source/", require("./views/source"));

app.listen(process.env.PORT || 50451, () => console.log("Running on port 50451"));

app.use((err, req, res, next) => {
    switch (err.message) {
        case 'NoCodeProvided':
            try {
                return res.status(400).send({
                    status: 'ERROR',
                    error: err.message,
                });
            } catch(e) { return res.status(400).send({}) }
        default:
        try {
            return res.status(500).send({
                status: 'ERROR',
                error: err.message,
            });
        } catch(e) {return res.status(500).send({})}
    }
});