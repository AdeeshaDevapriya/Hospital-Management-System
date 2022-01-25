// import express from 'express';
const express = require('express');
const RoomPDModel = require('../models/RoomPDModel.js');
// import RoomPDModel from "../models/RoomPDModel.js";


const router = express.Router();


///save posts///
//http://localhost:8087/patientroom/add
router.post('/add', (req, res) => {
    const PRoom = new RoomPDModel({
        PatientId: req.body.pid,
        BedId: req.body.bid,
        RoomId: req.body.rid,
        Category: req.body.cat,
        AdmissionDate : req.body.adate,
        DischargedDate : req.body.ddate,
        NoOfDays: req.body.NoOfdays,
        Note: req.body.note
    });
    PRoom.save()
        .then(() => res.json("Patient's room detail added successfully.."))
        .catch((err) => res.status(400).json(err.message));
});


///get post///
//http://localhost:8087/patientroom/view
router.get('/view', (req, res) => {
    RoomPDModel.find()
        .then(roomD => res.json(roomD))
        .catch((err) => res.status(400).json(err.message));
});


///update posts///
//http://localhost:8087/patientroom/update/:id
router.put('/update/:id', (req, res) => {
    RoomPDModel.findById(req.params.id)
        .then(ProomD => {
            ProomD.PatientId = req.body.pid;
            ProomD.BedId = req.body.bid;
            ProomD.RoomId = req.body.rid;
            ProomD.Category = req.body.cat;
            ProomD.AdmissionDate = req.body.adate;
            ProomD.DischargedDate = req.body.ddate;
            ProomD.NoOfDays = req.body.ndays;
            ProomD.Note = req.body.note;

            ProomD.save()
                .then(() => res.json("updated successfully!"))
                .catch((err) => res.status(400).json(err.message));
        })
        .catch((err) => res.status(400).json(err.message));
});


///delete posts///
//http://localhost:8087/patientroom/delete/id
router.delete('/delete/:id', (req, res) => {
    RoomPDModel.findByIdAndDelete(req.params.id)
        .then(() => res.json("Deleted Successfully!"))
        .catch((err) => res.status(400).json(err.message));
});


module.exports = router;