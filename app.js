const express = require("express");
const _ = require("lodash");
const fs = require("fs");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  res.sendFile("./view/index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  res.status(404).send("404 - About Page");
});
