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

// const mongoUrl = 'mongodb+srv://SahanSupun:wxfOMaWrMfyEfsPE@cluster0.38fjgnz.mongodb.net/cluster1?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB Atlas connection URI
// const dbURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';
const dbName = 'cluster1.Inverter data';
let db;

// MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//   if (err) return console.error(err);
//   console.log('Connected to Database');
//   db = client.db(dbName);
// });

app.use(express.json())//
// app.use(bodyParser.json());

app.use(cors())//

// app.post('/api/data', (req, res) => {
//   const data = req.body;
//   console.log("app post data",data)
//   db.collection('sensor_data').insertOne(data, (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.status(200).send('Data inserted');
//   });
// });

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
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     };

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





// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require("mongoose")
// // const dotenv = require('dotenv')//
// // const cors = require('cors')//
// const app = express();
// const port = 3000;
// const MongoClient = require('mongodb').MongoClient;

// const mongoUrl = 'mongodb+srv://SahanSupun:wxfOMaWrMfyEfsPE@cluster0.38fjgnz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB Atlas connection URI
// const dbName = 'cluster1.Inverter data';
// let db;

// MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
//   if (err) {
//     console.log("error pasi");

//     return console.error(err);}

//   console.log('Connected to Database');
//   db = client.db(dbName);
// });

// // app.use(express.json())//
// // app.use(bodyParser.json());

// // app.use(cors())//

// app.post('/api/data', (req, res) => {
//   const data = req.body;
//   db.collection('sensor_data').insertOne(data, (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.status(200).send('Data inserted');
//   });
// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });


// const connectionParams = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     };

//  mongoose
//     . connect (mongoUrl, connectionParams)
//     . then (() => {
//     console.info ("Connected to the DB") ;
//     })
//     . catch((e) => {
//     console.log ("Error:", e );
//     });


