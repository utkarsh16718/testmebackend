const express = require('express');
const app = express();
require('dotenv/config');
const port = process.env.BASE_URL||4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const logindata = require("./router/allRoutes")
app.use(
  bodyParser.json()
)
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(cors({ origin: '*' }));

app.use("/", logindata.user);

mongoose.set('strictQuery', true);
mongoose.connect(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
  }
)
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch(err => {
    console.log(err.message);
  });

app.listen(port, console.log(`Server up and running on port ${port}!`));   