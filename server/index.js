const express = require('express');
const bodyParser = require('body-parser');
const thoughtsController = require('./controllers/thoughts_controller.js')
const port = 3010;

const app = express();//perg
app.use(bodyParser.json() );




app.listen(port, ()=>{console.log(`Server listening on port ${port}.`)});