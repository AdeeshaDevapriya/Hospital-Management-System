const router = require("express").Router();
let Salary = require("../models/Salary");

//Add new salary details
router.route("/add").post((req, res) => {


    const salary_id = req.body.salary_id;
    const month = req.body.month;
    const overtime = req.body.overtime;
    const basicSalary = req.body.basicSalary;
    const house_a = req.body.house_a;
    const other_a = req.body.other_a;
    const pf = req.body.pf;
    const esi = req.body.esi;
    const net_salary = parseFloat(req.body.basicSalary) + parseFloat(req.body.house_a) + parseFloat(req.body.other_a) - parseFloat(req.body.pf) - parseFloat(req.body.esi);

    const newSalary = new Salary({
        salary_id,
        month,
        overtime,
        basicSalary,
        house_a,
        other_a,
        pf,
        esi,
        net_salary
    })

    newSalary.save().then(() => {
        res.json("Successfully Added")
    }).catch((err) => {
        console.log(err);
    })
})

//Read salary Deatils
router.route("/").get((req, res) => {
    Salary.find().then((salaries) => {
        res.json(salaries)
    }).catch((err) => {
        console.log(err)
    })
})

//Update Salary details
router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;

    //dStructure method 
    const { salary_id, month, overtime, basicSalary, house_a, other_a, pf, esi } = req.body;

    const updateSalary = {
        salary_id,
        month,
        overtime,
        basicSalary,
        house_a,
        other_a,
        pf,
        esi
    }

    const update = await Salary.findByIdAndUpdate(userId, updateSalary)
        .then(() => {
            res.status(200).send({ status: "Updated details successfully" });

        }).catch((err) => {
            res.status(500).send({ status: "Error with updating data" });
        })
})

//Delete details
router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await Salary.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "Deleted details successfully" });

        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete details", error: message });
        })
})

// view one employyes details
router.route("/get/:id").get(async(req, res) => {
    let userId = req.params.id;
    const user = await Salary.findById(userId)

    .then((salary) => {
        res.status(200).send({ status: "User fetched", salary })
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({ status: "Error with updating data" })
    })
})

module.exports = router;