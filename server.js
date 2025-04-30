const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.SERVER_PORT || 4000;

app.use(cors());
app.use(express.json());

require("./dbconfig/dbconfig");

const homepageRouter = require('./api/homepage');
const skillsRouter = require('./api/skills');

app.use('/home', homepageRouter);
app.use('/skills', skillsRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
