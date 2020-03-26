const express = require('express');
const routes = require('./routes');

const app = express();

// antes de todas as reqs, antes das rotas converte o json da req em obj
app.use(express.json()); 
app.use(routes);

app.listen(3333);