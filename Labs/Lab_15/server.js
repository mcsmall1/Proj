const MongoClient = require('mongob').MongoClient;
const url = "mongodb://localhost27017/SWQuotes";
const express = require('express');
const app = express()

app.use(express.static('public'))

var db;

MongoClient.connect(url, function(error, database) {
    if(error){
      throw error;
      console.log(error);
    };
    db = database;
    app.listen(8080);
});
