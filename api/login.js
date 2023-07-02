const express = require('express')
const router = express.Router();
require('dotenv').config()

router.post("/", (req, res) => {
   let { username, password } = req.body;
   if (username === process.env.USER && password === process.env.PASSWORD) {
      res.json({ status: true, msg: "Login Successful" })
   }
   else {
      res.json({ status: false, msg: "Login Failed" })
   }

})

module.exports = router;