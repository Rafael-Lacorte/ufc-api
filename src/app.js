const express = require('express');
const fighterRouter = require('./routes/fighterRouter');

const app = express();

app.use(express.json())

app.use('/fighter', fighterRouter);




module.exports = app;