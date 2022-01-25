const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({

    FirstName :{
        type : String,
        required: true
    },

    LastName :{
        type : String,
        required: true
    },

    Dob:{
        type : Date,
        required: true
    },

    EmpId :{
        type : String,
        required: true
    },

    Address :{
        type : String,
        required: true
    },

    Gender :{
        type : String,
        required: true
    },

    Email :{
        type : String,
        required: true
    },

    Phone :{
        type : String,
        required: true
    },

    Occupation :{
        type : String,
        required: true
    },

    
    DepId :{
        type : String,
        required: false
    },

    ResignId :{
        type : String,
        required: false
    },

    Password :{
        type : String,
        required: true
    },

    

})

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;