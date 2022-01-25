const express = require('express');
const router = express.Router();

const Appointment = require('./../models/Appointment');

router.post('/add', (req, res) => {
    const appointment = new Appointment({
        appointmentNo : req.body.ano,
        doctorID : req.body.did,
        date : req.body.date +"-"+ req.body.day,
        time : req.body.time,
        status : req.body.status,
        firstName : req.body.fname,
        lastName : req.body.lname,
        age : req.body.age,
        gender : req.body.gender,
        mobile : req.body.mobile,
        land : req.body.land,
        email : req.body.email,
        month : req.body.date,
        day : req.body.day
    });
    appointment
    .save()
    .then(() => res.json("Appointment added successfully..."))
    .catch((err) => res.json(err.message));
});

router.get('/view', (req, res) => {
    Appointment.find()
    .then(channel => res.json(channel))
    .catch((err) => res.json(err.message));
});

router.put('/edit/:id', (req, res) => {
    Appointment
    .findById(req.params.id)
    .then(channel => {
        channel.appointmentNo = req.body.ano;
        channel.doctorID = req.body.did;
        channel.date = req.body.date +"-"+ req.body.day;
        channel.time = req.body.time;
        channel.status = req.body.status;
        channel.firstName = req.body.fname;
        channel.lastName = req.body.lname;
        channel.age = req.body.age;
        channel.gender = req.body.gender;
        channel.mobile = req.body.mobile;
        channel.land = req.body.land;
        channel.email = req.body.email;
        channel.month = req.body.date;
        channel.day = req.body.day;
        
        channel
        .save()
        .then(() => res.json("Appointment updated successfully...") )
        .catch((err) => res.status(400).json(err.message));
    })
    .catch((err) => res.status(400).json(err.message));
});

router.delete('/delete/:id', (req, res) => {
    Appointment.findByIdAndDelete(req.params.id)
    .then(() => res.json("Appointment deleted successfully..."))
    .catch((err) => res.status(400).json(err.message));
});

router.get('/view/:id', (req, res) => {
    Appointment.findById(req.params.id)
    .then(channel => res.json(channel))
    .catch((err) => res.json(err.message));
});

router.get('/view/:month', (req, res) => {
    Appointment.find({month: req.params.month})
    .then(channel => res.json(channel))
    .catch((err) => res.json(err.message));
});

module.exports = router;