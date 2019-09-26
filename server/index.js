const express = require("express");
const bodyParser = require("body-parser");
const pLocations = require('./controller/locations')
const PORT = 3001;

const app = express();

app.use(bodyParser.json());



app.get('/api/locations', pLocations.showLocations)

app.listen(PORT, () => {
  console.log(`Nothing like a good ${PORT} wine`);
});
