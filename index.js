const express = require('express');
const app = express();
const port = process.env.PORT||4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')
const logindata = require("./router/allRoutes")
require('dotenv/config');
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