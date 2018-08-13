const express = require('express');
const bodyParser = require('body-parser');
const thoughtsController = require('./controllers/thoughts_controller.js');
const port = 3005;

const app = express();
app.use(bodyParser.json() );


app.post('/api/thoughts', thoughtsController.newThought);
app.get('/api/thoughts', thoughtsController.getThoughts);
app.put('/api/thoughts/:id', thoughtsController.updateThought);
app.delete('/api/thoughts/:id', thoughtsController.deleteThought);





app.listen(port, ()=>{console.log(`Server listening on port ${port}.`)});