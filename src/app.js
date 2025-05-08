const express = require('express');

const app = express();

app.get('/figher/:id', (req, res) => res.status(200).json({ message: "Olá Mundo!" }));

app.post('/figher/', (req, res) => res.status(200).json({ message: "Olá Mundo!" }));

app.put('/figher/:id', (req, res) => res.status(200).json({ message: "Olá Mundo!" }));

app.delete('/figher/:id', (req, res) => res.status(200).json({ message: "Olá Mundo!" }));


module.exports = app;