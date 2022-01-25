const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorScheduleSchema = new Schema({
    doctorid:{
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    workingDay:{
        type: Date,
        required: true
    },

    workingTime: {
        type: String,
        required: true
    },

    roomNo: {
        type: String,
        required: true
    },



})

const Schedule = mongoose.model("Schedule", doctorScheduleSchema);

module.exports = Schedule;