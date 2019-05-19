const express = require('express');

const routes = require('./routes')

const app = new express();

app.get('/', (req, res) => res.send('👋 🌎'));
app.use(routes)

module.exports = app;