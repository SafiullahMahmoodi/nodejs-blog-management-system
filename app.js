const express = require("express");
const _ = require("lodash");
const fs = require("fs");
const app = express();
const mongoose = require("mongoose");

const uri =
  "mongodb+srv://safiullahmahmoodi480_db_user:UvIeRRRJBGNkuE5l@blogdb.xt4zcuy.mongodb.net";
app.use(express.static("public"));

mongoose.connect(uri);
const Blog = require("./model/model");
app.listen(3000);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "./view");

app.get("/blogs", (req, res) => {
  res.render("index");
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.render("blogs", { blogs: result });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error fetching blogs");
    });
});

app.get("/about", (req, res) => {
  res.status(404).send("404 - About Page");
});
app.get("/newblog", (req, res) => {
  res.render("newblog");
});

app.post("/newblog", (req, res) => {
  const newBlog = new Blog({
    title: req.body.title,
    snippet: req.body.snippet,
    body: req.body.body,
  });
  newBlog.save().then(() => {
    res.redirect("/blogs");
  });
});

app.get("/details", (req, res) => {
  res.render("details");
});
