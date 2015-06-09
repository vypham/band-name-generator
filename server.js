var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var adjectives = [
  "Beautiful",
  "Sick",
  "Adorable",
  "Bumpy",
  "Green",
  "Delightful",
  "Slippery",
  "Flavorfilled",
  "Mega"
];

app.use(express.static(__dirname + '/app/'));

app.get('/adjective', function(req, res) {
  var randomIndex = Math.floor(Math.random()*adjectives.length);
  res.json( { word: adjectives[randomIndex] } );
})

app.listen(port, function() {
  console.log("Let's get it started in here...on port", port);
});
