var express = require("express");
var app = express();

var server = app.listen(8080, function() {
  console.log("app running on port.", server.address().port);
});

app.get("/", function(req, res) {
  res.status(200).send({ hello: "world" });
});
