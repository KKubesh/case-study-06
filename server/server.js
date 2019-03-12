const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dataObject = require('./data/item-data.json')

const productRouter = require('./routes/product.routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/product', (res, req) => {
  res.send({ productInfo: dataObject });
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello from Express node is running!' });
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));