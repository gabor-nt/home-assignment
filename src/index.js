const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post("/parse-rss", function(req, res) {
  res.status(200).send({ hello: req.body.url });
});

const server = app.listen(8080, function() {
  console.log("app running on port.", server.address().port);
});