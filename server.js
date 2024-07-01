const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const Inverter = require('./models/Inverter');
require('dotenv').config();
const cors = require('cors')//
const app = express();
const port = 3000;
const MongoClient = require('mongodb').MongoClient;
const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 6001;


const dbName = 'cluster1.Inverter data';
let db;



app.use(express.json())//
// app.use(bodyParser.json());

app.use(cors())//

app.get('/',(req,res)=>{

  console.log("The Backend is running")
  res.send("The Backend is running");
})

app.post('/api/data', async (req, res) => {
  const data = req.body;
  console.log("data newInverterRes",data)
  const newInverter = new Inverter(data);
   newInverter.save().then((newInverterRes)=>{
    console.log("newInverterRes",newInverterRes)
    res.status(200).send('Data inserted');
   }).catch(err=>{
    res.status(500).send('data insert failed')
   })
  // db.collection('sensor_data').insertOne(data, (err, result) => {
  //   if (err) return res.status(500).send(err);
  //   res.status(200).send('Data inserted');
  // });
});

app.get('/api/getData',(req,res)=>{

  Inverter.find().then((respo)=>{
    res.status(200).json(respo);
  }).catch((err)=>{
    res.status(500).send('data get failed')
  })
})


 mongoose
    . connect (MONGODB_URL
      // , connectionParams
    )
    . then (() => {
    console.info ("Connected to the DB") ;
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
    })
    . catch((e) => {
    console.log ("Error:", e );
    });



