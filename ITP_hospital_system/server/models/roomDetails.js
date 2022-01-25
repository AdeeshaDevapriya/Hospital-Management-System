const Mongoose = require('mongoose');
// import Mongoose from "mongoose";

const postSchema = Mongoose.Schema({

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

const roomDetails = Mongoose.model('roomDetails', postSchema);

module.exports = roomDetails;