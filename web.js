var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var message = '';
  fs.readFileSync('./index.html', function(err, data) {
    if (err) throw err;
    message = data.toString('utf8');
  });
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
