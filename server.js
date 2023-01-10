const express = require("express");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Index route
app.get("/budgets", (req, res) => {
  res.render("budgets/index");
});

// Show route
app.get("/budgets/:index", (req, res) => {
  res.render("budgets/show", { index: req.params.index });
});

// New route
app.get("/budgets/new", (req, res) => {
  res.render("budgets/new");
});

// Create route
app.post("/budgets", (req, res) => {
  res.render("budgets/create");
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
