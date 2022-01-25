const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    doctorid: {
        type: String,
        required: true
    },

    contactno: {
        type: String,
        required: true
    },

    specialization: {
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    designation: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    conpassword: {
        type: String,
        required: true
    }


})

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;