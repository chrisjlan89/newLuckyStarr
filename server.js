const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const fs = require("fs");
const https = require("https");
const dotenv = require("dotenv");
const routes = require("./routes");

// Initialize variables.
var PORT = 443 || process.env.PORT;

app.use(cors());

app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

dotenv.config({ debug: process.env.DEBUG });
app.use(routes);

//! insert your own options here
var options = {
  key: fs.readFileSync(
    "/opt/bitnami/letsencrypt/certificates/theluckystarr.com.key"
  ),
  cert: fs.readFileSync(
    "/opt/bitnami/letsencrypt/certificates/theluckystarr.com.crt"
  ),
  ca: fs.readFileSync(
    "/opt/bitnami/letsencrypt/certificates/theluckystarr.com.issuer.crt"
  )
};

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

https.createServer(options, app).listen(PORT, () => {
  console.log(`App Listening on ${PORT} ${app}   `);
});
