const express = require('express');
const { json } = require('body-parser');

port = 3223;
app = express();

app.get('/', (req, res) => res.send('Hello World'));

// Controllers
const { read, readTeams, create, update, destroy } = require('./Controllers/main_controller');

app.use(json());

app.get('/api/pokemon/', read);
app.get('/api/teams', readTeams);
app.post('/api/post/', create); 
app.put('/api/update/', update);
app.delete('/api/delete/:id', destroy);

app.listen(port, () => console.log(`Listening on port ${port}`) );