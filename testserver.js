const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const https = require("https");

const dotenv = require("dotenv");

const routes = require("./routes");

// Initialize variables.
var PORT = 8086 || process.env.PORT;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors("*"));

// parse application/json
app.use(bodyParser.json());

app.use(routes);

dotenv.config({ debug: process.env.DEBUG });

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(PORT);
});
