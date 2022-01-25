const Mongoose = require('mongoose');
// import Mongoose from "mongoose";

const postSchema = Mongoose.Schema({

    PatientId:{
        type : String,
        required : true
    },

    BedId: {
        type: String,
        required: true
    },

    RoomId: {
        type: String,
        required: true
    },

    Category: {
        type: String,
        required: true
    },

    AdmissionDate:{
        type: String,
        required: true
    },

    DischargedDate:{
        type: String,
        required: true
    },

    NoOfDays:{
        type: Number,
        required: true
    },

    Note: {
        type: String,
        required: true
    }


    // title: String,
    // message: String,
    // creator: String,
    // tags: [String],
    // selectedFile: String,
    // likeCount: {
    //     type: Number,
    //     default: 0,
    // },
    // createdAt: {
    //     type: Date,
    //     default: new Date()
    // },
});

const RoomPDModel = Mongoose.model('RoomPDModel', postSchema);

module.exports = RoomPDModel;