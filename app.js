const express = require("express");
const https = require("https");

const app  = express();

app.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=e0e6c07a1f5175be9ecc1bce398102d1&unit=matrix", function(req, res){
  res.send("Server is up and running.");
});


app.listen(4000, function() {
  console.log("Server is running on port 4000.");
});