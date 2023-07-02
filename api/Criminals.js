const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

require('dotenv').config();

const client = new MongoClient(process.env.DB_ADD);

router.get('/',async (req,res)=>{
   try {
      await client.connect();
      const db = client.db('MiniProjectDBMS');
      const collectionArray = await db.collection('CriminalDatabase').aggregate().toArray();
      res.send(collectionArray);
   } catch (err) {
      console.log(err)
   }
})

module.exports = router