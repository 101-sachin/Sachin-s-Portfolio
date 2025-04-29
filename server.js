const express = require("express");
require("dotenv").config();

const homepage = require('./api/homepage');
const skills =require('./api/skills')

try {
  require("./dbconfig/dbconfig");
} catch (err) {
  console.log("Database config failed to load:", err);  
}

const app = express();
const PORT = process.env.SERVER_PORT;

app.use('/home', homepage);
app.use('/skills' , skills)


app.listen(PORT, () => {
    try {
        console.log('Server started');
    } catch (error) {
        console.log(error)
    }
});
