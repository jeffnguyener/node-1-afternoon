const express = require('express');

const products = require('../products.json')

const app = express()
const port = 3002;

app.get('/api/products', (req, res) => {
    return res.status(200).send(products);
})

app.listen(port, () => (
    console.log(`Listening on port: ${port}`)
))

