//imports
const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const app = express();

//config routes
app.use(express.json());
app.use(routes); 

//conexão com o banco Mongo
require('./db') 

app.listen(8000); 