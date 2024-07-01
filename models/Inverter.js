const mongoose = require('mongoose')
const Schema  = mongoose.Schema;

const InverterSchema = new Schema({
    Time:{
        type:String,
    },
    workingMode:{
        type:String,
        // required:true,
        // min:2,
        // max:50
    },
    VMPPT1:{
        type:Number,
        // required:true,
        // min:2,
        // max:50
    },
    VMPPT2:{
        type:Number,
        // required:true,
    },
    IMPPT1:{
        type:Number,
        // required:true,
    },
    IMPPT2:{
        type:Number,
        // required:true,
    },
    Ua:{
        type:Number,
        // required:true,
    },
    IAC1:{
        type:Number,
        // required:true,
    },
    FAC1:{
        type:Number,
        // required:true,
    },
    temperature:{
        type:Number,
        // required:true,
    },
    HTotal:{
        type:Number,
        // required:true,
    },
    PVGeneration:{
        type:Number,
    }
    // friends:{
    //     type:Array,
    //     default:[]
    // },
    // location:String,
    // occupation:String,
    // viewedProfile:Number,
    // impressions:Number
},{timestamps:true}
// ,{ collection: 'Inverter data' }
);

const Inverter = mongoose.model('Inverter',InverterSchema,'Inverter data')

 module.exports= Inverter;