const express = require('express'); 
const Menu = require('../models/menu')
const router = express.Router(); 
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
    try {
      let { username, password } = req.body;
      password = await bcrypt.hash(password, await bcrypt.genSalt(10));
      const user = await User.create({ username, password })
  
      res.json(user);
  
    } catch (err) {
      res.status(400).json({err})
    }
  })
  
  // login
  router.post("/login", async (req, res) => {
    let { username, password } = req.body;
    const user = await User.findOne({ username });
  
    // new part - look for invalid passwords and no users
    if(!user || !bcrypt.compareSync(password, user.password)){
      return res.status(401).json({ error: "Invalid Credentials" })
    }
  
    // new part - generate a token
    const token = jwt.sign({ userId: user.id }, process.env.SECRET, { expiresIn: "1h"});
    res.json({ token })
  
  })
router.get('/', async (req, res) => {
    try {
       
        res.json(await Menu.find({}))

    } catch(err){
        res.status(400).json(err);
    }
})
router.post('/', async (req, res) => {
    try {
        res.json(await Menu.create(req.body))
    } catch (err) {
        res.status(400).json(err);
    }
})
router.delete('/:id', async (req, res) => {
    try {
        res.json(await Menu.findByIdAndDelete(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
})
router.get('/:id', async (req, res) => {
    try {
        res.json(await Menu.findById(req.params.id))
    } catch (err) {
        res.status(400).json(err);
    }
})
router.put('/:id', async (req, res) => {
    try {
        res.json(await Menu.findByIdAndUpdate(req.params.id, req.body))
    } catch (err) {
        res.status(400).json(err);
    }
})
 
module.exports = router;