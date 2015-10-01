var express = require("express"); //method that comes with node
var app = express();  //makes it convenient for your express library
                      //this returns a server or application object
//console.log(app);
var port = process.env.PORT || 3000; // standard port for running server
           // process.env reads environment variables, in this case PORT
           // if it does exist, use that, if it doesn't use 3000 port

//app.use(express.static(band-name-generator + '/app/'));
app.use(express.static(__dirname + '/app/'));

var Adjective = function() { // alternate function syntax
 this.happy = true;
 this.tired = true;  //this is the new keyword
 this.anxious = true;  //object with the property of whatever follows the dot
 this.wavy = true;
 this.soft = true
 this.fluffy = true;
 this.classy = true;
};

var adjective = new Adjective();

function getRandomWord (object) {
 var propArray = Object.keys(object);
 var randomProp = propArray[Math.floor(Math.random() * propArray.length)];
 return {word: randomProp};
}

app.get("/adjective", function (req,res) {
  res.json(getRandomWord(adjective)); //json response
});        // return an adjective objects from the function above


app.get("/", function (req, res){
  res.sendFile("index.html");
});

app.listen(port, function() {
  console.log('server started on port ' + port);
}); // this starts port on local machine on port 3000
