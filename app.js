const express = require('express');
const app = express()
const port = 3000
const rotaProdutos = require('./controllers/router')

app.use(express.json());

app.use('/', rotaProdutos) 

app.use((req, res) => {
    res.status(404).send('message: rota não encontrada');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
