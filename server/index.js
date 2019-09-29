const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const pLo = require("./controller/locations");

const PORT = 3001;

const app = express();
app.use(cors())

app.use(bodyParser.json());

app.get('/api/locations', pLo.showLocations )

app.listen(PORT, () => {
  console.log(`Nothing like a good ${PORT} wine`);
});
