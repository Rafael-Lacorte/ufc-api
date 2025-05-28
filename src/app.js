const express = require('express');
const fighterRouter = require('./routes/fighterRouter');
const rankingRouter = require('./routes/rankingRouter');
const eventRouter = require('./routes/eventRouter');
const fightRouter = require('./routes/fightRouter');


const app = express();

app.use(express.json())

app.use('/fighter', fighterRouter);

app.use('/ranking', rankingRouter);

app.use('/event', eventRouter);

app.use('/fight', fightRouter);

module.exports = app;