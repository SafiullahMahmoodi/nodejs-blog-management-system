const express = require("express");
const _ = require("lodash");
const fs = require("fs");
const app = express();

app.use(express.static("public"));

app.listen(3000);
app.set("view engine", "ejs");
app.set("views", "./view");


app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.status(404).send("404 - About Page");
});
app.get("/newblog", (req, res) => {
  res.render("newblog");
});
app.get("/details", (req, res) => {
  res.render("details");
});
