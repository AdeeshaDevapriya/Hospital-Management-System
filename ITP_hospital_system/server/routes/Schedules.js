const router = require("express").Router();
let Schedule = require("../models/Schedule");



//http://localhost:8087/Schedule/add
//Adding a schedule

router.route("/add").post((req, res) => {
    const doctorid = req.body.doctorid;
    const name = req.body.name;
    const workingDay = req.body.workingDay;
    const workingTime = req.body.workingTime;
    const roomNo = req.body.roomNo;
    

    const newSchedule = new Schedule({
        doctorid,
        name,
        workingDay,
        workingTime,
        roomNo,

    })

    newSchedule.save().then(() => {
        res.json("A new Doctor Schedule added")
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8087/Schedule

router.route("/").get((req, res) => {

    Schedule.find().then((Schedules) => { 
        res.json(Schedules)
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8087/Schedule/update/scheduleid

router.route("/update/:id").put(async(req, res) => {
    let scheduleId = req.params.id;
    const { doctorid,name,workingDay,workingTime,roomNo} = req.body;

    const updateSchedule = {
        doctorid,
        name,
        workingDay,
        workingTime,
        roomNo,
    }

    const update = await Schedule.findByIdAndUpdate(scheduleId, updateSchedule)
        .then(() => {
            res.status(200).send({ status: "Schedule updated" })
        }).catch(err => {
            console.log(err);
            res.status(500).send({ status: "Error with updating schedule data", error: err.message });
        })
})


router.route("/delete/:id").delete(async(req, res) => {
    let scheduleId = req.params.id;

    await Schedule.findByIdAndDelete(scheduleId)
        .then(() => {
            res.status(200).send({ status: "Schedule deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with deleting the schedule", error: err.message });
        })
})


//To get the details of a particular schedule

router.route("/get/:id").get(async(req, res) => {
    let scheduleId = req.params.id;
    const schedule = await Schedule.findById(scheduleId)
        .then(() => {
            res.status(200).send({ status: "Schedule fetched" })
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with getting the schedule", error: err.message });
        })
})


module.exports = router;