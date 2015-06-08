'use strict';

var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var port = process.env.PORT || 3000;
var Adjective = require('./lib/adjective.js');
var getRandomWord = require('./lib/getRandomWord.js');

var adjective = new Adjective();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true
}));

app.use(express.static(__dirname + '/app/'));

var Verb = function() {
  this.sleeping = true;
  this.skiing = true;
  this.flopped = true;
  this.waiting = true;
  this.plotting = true;
  this.burping = true;
  this.sneezing = true;
  this.flying = true;
  this.snoozing = true;
  this.dancing = true;
};
var verb = new Verb();

var Noun = function() {
  this.ninjas = true;
  this.cowboys = true;
  this.bears = true;
  this.beats = true;
  this.alligators = true;
  this.hamsters = true;
  this.otters = true;
  this.helicopters = true;
  this.unicorns = true;
  this.rhymes = true;
};
var noun = new Noun();

function postWord (word, wordObject) {
  if (wordObject.hasOwnProperty(word)) {
    return {msg: 'We already have your awesome word, ' + word + ', in our list.'};
  }

  wordObject[word] = true;
  console.dir(wordObject);
  return {msg: 'Thanks for submitting ' + word + '!'};
};

app.get('/adjective', function(req, res) {
  res.json(getRandomWord(adjective));
});

app.get('/verb', function(req, res) {
  res.json(getRandomWord(verb));
});

app.get('/noun', function(req, res) {
  res.json(getRandomWord(noun));
});

app.post('/adjective', function(req, res) {
  var word = postWord(req.body.word, adjective);
  res.json(word);
});

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

app.listen(port, function() {
  console.log('server starting. available at http://localhost:' + port);
});

// app.get('/', function(req, res) {
//   res.send('hello, universe');
// });
