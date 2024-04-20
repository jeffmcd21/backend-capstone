
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const MenuRouter = require('./controller/menu')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

//middleware

const authCheck = async (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
  
    if(!token) {
     return res.status(401).json({ message: "unauthorized" })
    }
  
    try { 
      const decoded = await jwt.verify(token, process.env.SECRET);
  
      req.username = decoded.userId;
      next();
  
    } catch (err) {
     return res.status(403).json({ message: "Forbideen" })
    }
  }


app.use(cors())
app.use(morgan('dev'))
app.use(express.json())


//routes
app.use('/menu', MenuRouter);
app.get('/', (req, res) => (
    res.send('Food for Foods')
))




const PORT = process.env.PORT
app.listen(3001, () => console.log(`Listening on Port 3001`))