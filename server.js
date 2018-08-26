var express = require('express');
var parse = require('body-parser');

var app = express();
var PORT =  process.env.PORT || 8080;

app.use(parse.urlencoded({ extended: true }));
app.use(parse.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});
  