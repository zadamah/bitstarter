var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var str = '';
  fs.readFileSync('./index.html', function(err, data) {
    if (err) throw err;
    str = data.toString('utf8');
  }
  response.send(str);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
