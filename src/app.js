const express = require('express');
const app = express();

const path = require("path");
const hbs = require("hbs");

const port = process.env.port || 3000;

const templatePath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const staticPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.set("views", templatePath);
hbs.registerPartials(partialsPath);
// public static path
// calling static page into expressjs.

// console.log(path.join(__dirname,"../public"))
app.use(express.static(staticPath));
// routing
app.get("/", (req, res) => {
    res.render("index");

});

app.get("/about", (eq, res) => {
    res.render("about");
});

app.get("/weather", (req, res) => {
    res.render("weather");
});

app.get("*", (req, res) => {
    res.render("404", {
        errorcomment: "Page Not Found.",
    });
});
app.listen(port, (req, res) => {
    console.log("listening on the port" + port)
});









