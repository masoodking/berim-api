var express = require("express")
var app = express();

app.set('port', (process.env.PORT || 5000));

var docs_handler = express.static(__dirname + '/docs/');
app.use(docs_handler);
//  start the server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

