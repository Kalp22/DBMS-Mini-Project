// Required Modules
const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

require('dotenv').config();

// Connected to db using URL
const client = new MongoClient(process.env.DB_ADD);

// Route to Data of all Criminals
router.get('/', async (req, res) => {
   try {
      // Connection Request to Mongodb
      await client.connect();
      const db = client.db('MiniProjectDBMS');

      const collectionArray = await db.collection('CriminalDetails').aggregate().toArray();

      // Data sent as response
      res.status(200).json({status: true, crimeData: collectionArray })
   } 
   // If there is any error
   catch (err) {
      console.log(err)
      res.status(500)
   }
})

// Exporting router to index file
module.exports = router