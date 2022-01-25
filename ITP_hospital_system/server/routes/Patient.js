const express = require('express');
const router = express.Router();

const Patient = require('./../models/Patient');

router.post('/add', (req, res) => {
    const patient = new Patient({
        firstName : req.body.fname,
        lastName : req.body.lname,
        age : req.body.age,
        gender : req.body.gender,
        mobile : req.body.mobile,
        land : req.body.land,
        nic : req.body.nic,
        
        gurName : req.body.gname,
        guraddress : req.body.gaddress,
        gurage : req.body.gage,
        gurgender : req.body.ggender,
        gurmobile : req.body.gmobile,
        gurland : req.body.gland,
        gurnic : req.body.gnic
    });
    patient
    .save()
    .then(() =>res.json("Successfully added..."))
    .catch((err) => res.status(400).json(err.message));
});

router.get('/view', (req, res) => {
    Patient
    .find()
    .then(patient => res.json(patient))
    .catch((err) => res.status(400).json(err.message));
});

router.put('/edit/:id', (req, res) => {
    Patient
    .findById(req.params.id)
    .then(patient => {
        patient.firstName = req.body.fname;
        patient.lastName = req.body.lname;
        patient.age = req.body.age;
        patient.gender = req.body.gender;
        patient.mobile = req.body.mobile;
        patient.land = req.body.land;
        patient.nic = req.body.nic;

        patient.gurName = req.body.gname;
        patient.guraddress = req.body.gaddress;
        patient.gurage = req.body.gage;
        patient.gurgender = req.body.ggender;
        patient.gurmobile = req.body.gmobile;
        patient.gurland = req.body.gland;
        patient.gurnic = req.body.gnic;

        patient
        .save()
        .then(() => res.json("Successfully Updated..."))
        .catch((err) => res.status(400).json(err.message));

    }).catch((err) => res.status(400).json(err.message));
});

router.delete('/delete/:id', (req, res) => {
    Patient
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Successfully Deleted..."))
    .catch((err) => res.status(400).json(err.message));
});

router.get('/view/:id', (req, res) => {
    Patient
    .findById(req.params.id)
    .then(patient => res.json(patient))
    .catch((err) => res.status(400).json(err.message));
});

module.exports = router;