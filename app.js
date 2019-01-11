const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.redirect("/protofolio/index.html");
});
app.get("/omnifood", (req, res) => {
  res.redirect("/omnifood/index.html");
});

app.listen(5000);
