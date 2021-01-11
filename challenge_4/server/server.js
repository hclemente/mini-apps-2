const express = require('express')
const app = express();
const path = require('path');
const port = 3000;
const PATH = path.join(__dirname, '/../public');

app.use(express.static('public'));
app.use('/', express.static(PATH));

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
});