	
const serverless = require('serverless-http');
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello Jenny Craig!!')
})
 
module.exports.handler = serverless(app);
