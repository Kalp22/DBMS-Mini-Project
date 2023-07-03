const express = require('express');
const router = express.Router();
const { MongoClient } = require('mongodb')
require('dotenv').config();

const client = new MongoClient(process.env.DB_ADD);

router.get('/', async (req,res)=>{
   try {
      await client.connect();
      const db = client.db('MiniProjectDBMS');
      const collectionArray = await db.collection('CriminalDatabase').aggregate().toArray();
      const criminals = collectionArray[0]
      const crime = collectionArray[1]
      const victim = collectionArray[2]
      const status = collectionArray[3]
      // for(i=0;i<victim.victimNumber.length;++i){

      // }
   } catch (err) {
      
   }
})

module.exports = router