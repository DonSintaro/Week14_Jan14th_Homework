const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./controllers/controller.js");

app.use(routes);

app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });