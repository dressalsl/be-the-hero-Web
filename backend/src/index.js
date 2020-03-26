const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// antes de todas as reqs, antes das rotas converte o json da req em obj
app.use(cors());
app.use(express.json()); 
app.use(routes);

app.listen(3333);