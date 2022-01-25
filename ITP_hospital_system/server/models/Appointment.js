const mongoose = require('mongoose');
const schema = mongoose.Schema;

const Appointment = new schema({
    appointmentNo : {
        type: String,
        require: true
    },
    doctorID : {
        type: String,
        required: true
    },
    date : {
        type: String,
        required: true
    },
    month : {
        type: String,
        required: true
    },
    day : {
        type: String,
        required: true
    },
    time : {
        type: String,
        required: true
    },
    status : {
        type: String
    },
    firstName : {
        type: String,
        required: true
    },

    lastName : {
        type: String,
        required: true
    },
    age : {
        type: Number,
        required: true
    },
    mobile : {
        type :String
    },
    land : {
        type: String
    },
    gender : {
        type: String,
        required: true
    },
    email : {
        type: String
    }
});

const appointment = mongoose.model('appointment', Appointment);

module.exports = appointment;