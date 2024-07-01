const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongoose = require("mongoose")
const app = express();
const port = 3000;


const uri = process.env.MONGODB_URI || "mongodb+srv://panchadsharamanusha:1234@cluster0.38fjgnz.mongodb.net/";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));        //const mongoUrl = 'mongodb+srv://SahanSupun:wxfOMaWrMfyEfsPE@cluster0.38fjgnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB Atlas connection URI
const dbName = 'cluster1.Inverter data';
let db;

MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
  if (err) return console.error(err);
  console.log('Connected to Database');
  db = client.db(dbName);
});

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
  const data = req.body;
  db.collection('sensor_data').insertOne(data, (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).send('Data inserted');
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    };

 mongoose
    . connect (mongoUrl, connectionParams)
    . then (() => {
    console.info ("Connected to the DB") ;
    })
    . catch((e) => {
    console.log ("Error:", e );
    });