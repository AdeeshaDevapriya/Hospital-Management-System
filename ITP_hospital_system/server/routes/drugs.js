const router = require("express").Router();
let drug = require("../models/drug");



//http://localhost:8087/drug/add
//Adding a drug

router.route("/add").post((req, res) => {
    const type = req.body.type;
    const name = req.body.name;
    const unit = req.body.unit;
    const supplier_name = req.body.supplier_name;
    const unit_price = req.body.unit_price;
    const quantity = req.body.quantity;
    const exp_date = req.body.exp_date;



    const newdrug = new drug({
        type,
        name,
        unit,
        supplier_name,
        unit_price,
        quantity,
        exp_date

    })

    newdrug.save().then(() => {
        res.json("Drug added")
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8087/drug

router.route("/").get((req, res) => {

    drug.find().then((drug) => {
        res.json(drug)
    }).catch((err) => {
        console.log(err);
    })
})

//http://localhost:8087/drug/update/name

router.route("/update/:id").put(async(req, res) => {
    let userId = req.params.id;
    const { type, name, unit, supplier_name, unit_price, quantity, exp_date } = req.body;

    const updateDrug = {
        type,
        name,
        unit,
        supplier_name,
        unit_price,
        quantity,
        exp_date
    
    }

    const update = await drug.findByIdAndUpdate(userId, updateDrug)
        .then(() => {
            res.status(200).send({ status: "User updated" })
        }).catch(err => {
            console.log(err);
            res.status(500).send({ status: "Error with updating data", error: err.message });
        })
        
})


router.route("/delete/:id").delete(async(req, res) => {
    let userId = req.params.id;

    await drug.findByIdAndDelete(userId)
        .then(() => {
            res.status(200).send({ status: "drug deleted" });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with deleting drug", error: err.message });
        })
})


//To get the details of a particular user

router.route("/get/:id").get(async(req, res) => {
    let userId = req.params.id;
    const user = await drug.findById(userId)
        .then(() => {
            res.status(200).send({ status: "User fetched" })
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user", error: err.message });
        })
})


module.exports = router;