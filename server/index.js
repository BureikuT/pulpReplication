const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors')
const pLo = require("./controller/locations");
const eMeals = require('./controller/earlyMeals')
const lMeals = require('./controller/laterMeals')

const PORT = 3001;

const app = express();
app.use(cors())

app.use(bodyParser.json());

app.get('/api/locations', pLo.showLocations ),
app.get('/api/earlyMeals', eMeals.showEarlyFood )
app.get('/api/laterMeals', lMeals.showLaterFoods)

app.listen(PORT, () => {
  console.log(`Nothing like a good ${PORT} wine`);
});
