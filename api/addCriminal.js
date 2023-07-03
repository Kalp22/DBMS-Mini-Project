// Required Modules
const express = require('express')
const router = express.Router();
const { MongoClient } = require('mongodb')

require('dotenv').config()

// Connected to db using URL
const client = new MongoClient(process.env.DB_ADD);

// Route to Add Data
router.post('/', async (req, res) => {
   // Data stored in Object
   const { criminalName, criminalAge, criminalGender, crimeType, location, date, crimeReportedTo, victimNumber, victimAge, victimGender, murderFlag } = req.body;

   try {
      // Connection Request to mongodb
      await client.connect();

      const db = client.db('MiniProjectDBMS')
      const collection = db.collection('CriminalDetails');

      // Inserting one into collection and checking if it was successful
      if (await collection.insertOne({ criminalName, criminalAge, criminalGender, crimeType, location, date, crimeReportedTo, victimNumber, victimAge, victimGender, murderFlag })) {
         res.status(200).json({ status: true, msg: "Data Inserted" });
      }
      else {
         res.status(400).json({ status: true, msg: "Data not Inserted" });
      }

   }
   // If there is any error 
   catch (err) {
      console.log(err)
      res.status(200).send("Server Error")
   }
})

// Exporting router to index file
module.exports = router;