const express = require("express");
const logger = require("morgan");
const path = require("path");
const pokemonData = require("./data/pokemon-data");
//const ejs = require("ejs");

const app = express();
const PORT = 3000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// logging middleware
app.use(logger("dev"));
// static files
app.use(express.static(path.join(__dirname, "public")));

// set the view engine to ejs
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

// home page
app.get("/", (req, res) => {
  try {
    console.log(__dirname);

    // res.sendFile(path.join(__dirname, "view", "home.html"));
    res.render("home", { title: "Emmanuels Page" });
  } catch (error) {
    console.error(error);
  }
});

app.get("/about", (req, res) => {
  try {
    console.log("About Page");

    res.render("about", { title: "Emmanuels Page" });
  } catch (error) {
    console.error(error);
  }
});

app.get("/pokemon", (req, res) => {
  try {
    // res.sendFile(path.join(__dirname, "view", "pokemon.html"));
    res.render("pokemon", { data: pokemonData });
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}. Pokemon API is ready!`);
});
