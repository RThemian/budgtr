const express = require("express");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Show route
app.get("/budgets/:index", (req, res) => {
  res.render("show.ejs", { index: req.params.index });
});

// New route
app.get("/create/new", (req, res) => {
  res.render("new.ejs");
});

// Create route
app.post("/create", (req, res) => {
  res.render("create.ejs");
});

// Index route
app.get("/budgets", (req, res) => {
  res.render("index.ejs");
});

// home page
app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
