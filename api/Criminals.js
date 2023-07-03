const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb');

require('dotenv').config();

const client = new MongoClient(process.env.DB_ADD);

router.get('/', async (req, res) => {
   try {
      await client.connect();
      const db = client.db('MiniProjectDBMS');
      const collectionArray = await db.collection('CriminalDatabase').aggregate().toArray();
      const criminals = collectionArray[0]
      const crime = collectionArray[1]
      const victim = collectionArray[2]
      const status = collectionArray[3]

      res.status(200).json({ criminalsData: criminals, crimeData: crime, victimData: victim, incidentStatus: status })
   } catch (err) {
      console.log(err)
      res.status(500)
   }
})

module.exports = router