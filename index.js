const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT


const cors = require('cors');
app.use(cors());

app.listen(PORT, () => {
   console.log(`listening on ${PORT}`);
});

