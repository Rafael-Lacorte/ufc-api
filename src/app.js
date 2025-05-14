const express = require('express');

const app = express();

const fighterController = require('./controller/fighterController');

app.get('/fighter/:id', fighterController.getFighterById);

app.post('/fighter/', fighterController.createFighter);

app.put('/figher/:id', (req, res) => res.status(200).json({ message: "Olá Mundo!" }));

app.delete('/figher/:id', (req, res) => res.status(200).json({ message: "Olá Mundo!" }));


module.exports = app;