const express = require('express');
const cors = require('cors');
const router = require('./router');

const app = express();

app.use(express.json());
app.use(cors());
/*
* Exemplo:
* app.use(cors({
*   origin: '<<endereco>>'
* }))
*/
app.use(router);

module.exports = app;