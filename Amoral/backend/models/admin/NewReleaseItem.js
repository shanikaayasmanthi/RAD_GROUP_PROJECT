//new release in shop
const mongoose = require('mongoose');

const Schema =mongoose.Schema;
const adminSchema = new Schema({

    color :{
            type : String,
            required : true
    },
    gsm :{
        type:Number,
        required : true
    },
    price :{
        type:Number,
        required :true
    },
    size:{
        type:String,
        required:true
    },
    sex:{
        type:String,
        required:true
    },
    imageURL:{
        type:String,
        required:true
    },
});

const NewReleaseItem = mongoose.model("NewReleaseItem",adminSchema);

//export the schema use for the routes
module.exports = NewReleaseItem;