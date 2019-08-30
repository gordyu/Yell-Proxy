const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 9000;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.static(__dirname + '/../public'));
app.use(bodyParser.json());

app.listen(port, function() {
  console.log(`YellProxy is listening on port ${port}`);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + 'public/index.html');
});