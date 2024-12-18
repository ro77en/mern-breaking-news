const express = require('express')
const app = express()
const port = 8080;

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/soma', (req, res) => {
    const soma = 100 + 1;
    res.send({soma:soma});
})

app.listen(port, () => {
    console.log(`server running on http://localhost:${port}`);
})