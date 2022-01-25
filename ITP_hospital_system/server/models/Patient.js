const mongoose = require('mongoose');

const schema = mongoose.Schema;

const Patient = new schema({
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

    nic : {
        type: String
    },
    gurName: {
        type: 'string',
        required: true
    },
    guraddress: {
        type: 'string',
        required: true
    },
    gurage: {
        type: 'number',
        required: true
    },
    gurgender: {
        type: 'string',
        required: true
    },
    gurmobile : {
        type: String
    },

    gurland : {
        type: String,
        required: true
    },
    gurnic : {
        type: 'string',
        required: true
    }
});

const patient = mongoose.model('patient', Patient);

module.exports = patient;