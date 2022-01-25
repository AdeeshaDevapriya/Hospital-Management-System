const router = require("express").Router();
let doctor = require("../models/doctor");



//http://localhost:8087/doctor/add
//Adding a doctor

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const doctorid = req.body.doctorid;
    const contactno = req.body.contactno;
    const specialization = req.body.specialization;
    const department = req.body.department;
    const designation = req.body.designation;
    const password = req.body.password;
    const conpassword = req.body.conpassword;


    const newDoctor = new doctor({
        name,
        doctorid,
        contactno,
        specialization,
        department,
        designation,
        password,
        conpassword

    })

    newDoctor.save().then(() => {
        res.json("Doctor added")
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8087/doctor

router.route("/").get((req, res) => {

    doctor.find().then((doctors) => {
        res.json(doctors)
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8087/doctor/update/doctorid

router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const { name, doctorid, contactno, specialization, department, designation, password, conpassword } = req.body;

    const updateDoctor = {
        name,
        doctorid,
        contactno,
        specialization,
        department,
        designation,
        password,
        conpassword
    }

    const update = await doctor.findByIdAndUpdate(userId, updateDoctor)
        .then(() => {
            res.status(200).send({ status: "User updated" })
        }).catch(err => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
})


router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await doctor.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "User deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with deleting user", error: err.message });
        })
})


//To get the details of a particular user

router.route("/get/:id").get(async(req, res) => {
    let userId = req.params.id;
    const user = await doctor.findById(userId)
        .then(() => {
            res.status(200).send({ status: "User fetched" })
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user", error: err.message });
        })
})


module.exports = router;