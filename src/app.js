const express = require('express');
const fighterRouter = require('./routes/fighterRouter');
const rankingRouter = require('./routes/rankingRouter');

const app = express();

app.use(express.json())

app.use('/fighter', fighterRouter);

app.use('/ranking', rankingRouter);





module.exports = app;