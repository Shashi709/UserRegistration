require("dotenv").config()
const express = require('express')
const app = express()
const connectToDB=require("./config/database")
const {register} = require("./controller/UserController")
const cors = require("cors")

connectToDB();

//mildware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
  })

   app.post('/register', register  )



module.exports = app
