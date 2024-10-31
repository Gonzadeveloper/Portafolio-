require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./src/routes/index')

const app = express();
const port = process.env.PORT;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});