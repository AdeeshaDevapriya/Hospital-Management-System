// import express from 'express';
const express = require('express');
const roomDetails = require('../models/roomDetails.js');
// import roomDetails from "../models/roomDetails.js";


const router = express.Router();


///save posts///
//http://localhost:8087/room/add
router.post('/add', (req, res) => {
    const Room = new roomDetails({
        BedId: req.body.bid,
        RoomId: req.body.rid,
        Category: req.body.cat
    });
    Room.save()
        .then(() => res.json("Room added successfully.."))
        .catch((err) => res.status(400).json(err.message));
});


///get post///
//http://localhost:8087/room/view
router.get('/view', (req, res) => {
    roomDetails.find()
        .then(roomD => res.json(roomD))
        .catch((err) => res.status(400).json(err.message));
});


///update posts///
//http://localhost:8087/room/update/:id
router.put('/update/:id', (req, res) => {
    roomDetails.findById(req.params.id)
        .then(roomD => {
            roomD.BedId = req.body.bid;
            roomD.RoomId = req.body.rid;
            roomD.Category = req.body.cat;

            roomD.save()
                .then(() => res.json(" updated successfully!"))
                .catch((err) => res.status(400).json(err.message));
        })
        .catch((err) => res.status(400).json(err.message));
});


///delete posts///
//http://localhost:8087/room/delete/id
router.delete('/delete/:id', (req, res) => {
    roomDetails.findByIdAndDelete(req.params.id)
        .then(() => res.json("Deleted Successfully!"))
        .catch((err) => res.status(400).json(err.message));
});


///update retrieve data///
//http://localhost:8087/room/review/id
router.get('/review/:id', (req, res) => {
    roomDetails.findById(req.params.id)
    .then(roomD => res.json(roomD))
    .catch((err) => res.status(400).json(err.message));
})

module.exports = router;