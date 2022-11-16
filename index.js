var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();
  var sql = require("mssql");

 // config for your database
  var config = {
    user: "Merlin",
    password: "Jirasak5409",
    server: "jirasak.database.windows.net",
    database: "jirasakdb",
  };

app.use(cors());
app.get("/", function (req, res, next) {
  res.json("hi this is API");
});
app.get("/test",jsonParser, function (req, res) {
  // connect to your database
  sql.connect(config, function (err) {
    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();

    // query to the database and get the records
    request.query("select * from dbo.product", function (err, results) {
      if (err) console.log(err);

      // send records as a response
      res.send(results.recordset);
      console.log(results.recordset)
    });
  });
});
app.listen(2222, function () {
  console.log("CORS PORT 85");
});

//////////////////////
