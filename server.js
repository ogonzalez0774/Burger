//Dependencies
const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const router = require("./controllers/burgers_controller.js");
const path = require("path");

//express setup
const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(methodOverride("_method"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "appication/vnd.api+json" }));

//set up rendering engine, handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//static file and routes
app.use(express.static(__dirname + "/public"));
app.use("/", router);

//start server
app.listen(PORT, function() {
  console.log("Listening on PORT " + PORT);
});
