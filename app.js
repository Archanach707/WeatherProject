const express = require("express");
const https = require("https");

const app  = express();

app.get("/", function(req, res){
  
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=e0e6c07a1f5175be9ecc1bce398102d1&unit=matrix";

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      console.log(temp);

      // const object = {
      //   name: "Archana",
      //   favouritePLACE: "Noida"
      // }
      // console.log(JSON.stringify(object));
      
    });
  });

  res.send("Server is up and running.");
  
});


app.listen(4000, function() {
  console.log("Server is running on port 4000.");
});