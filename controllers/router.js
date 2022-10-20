const express = require('express');
const route = express.Router();
const produto = require('./produto');

route.get('/produtos', (req, res) => {
    res.send(produto.list());
  })

route.post('/produtos', (req, res) => {
    res.send(produto.add(req.body));
  })
  
route.put('/produtos/:id', (req, res) => {
    res.send(produto.update());
  })
  
route.delete('/produtos', (req, res) => {
    res.send('Ta faltando o id');
  })
  
route.delete('/produtos/:id', (req, res) => {
    res.send(produto.delete(req.params.id));
  })

module.exports = route;