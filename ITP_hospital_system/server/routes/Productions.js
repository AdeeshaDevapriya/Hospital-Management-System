const express = require('express');
const router = express.Router();
let Production = require("../models/Production");



router.post('/add', (req, res) => {


    const newProduction = new Production({

        Production_Name: req.body.Production_Name,
        Category: req.body.Category,
        Current_quantity: req.body.Current_quantity,
        Manufacturer: req.body.Manufacturer,
        Item_Number: req.body.Item_Number,
        Price: req.body.Price,
        Expiry_Date: req.body.Expiry_Date,
        Descriptions: req.body.Descriptions

    });

    

    newProduction.save().then(() =>
        res.json("Production Added")
    ).catch((err) => res.status(400).json(err.message));

});


router.get('/view', (req, res) => {
    Production.find().then(product => res.json(product))
        .catch((err) => res.status(400).json(err.message));

});


router.put('/update/:id', (req, res) => {
    Production.findById(req.params.id).then(product => {
            product.Production_Name = req.body.Production_Name;
            product.Category = req.body.Category;
            product.Current_quantity = req.body.Current_quantity;
            product.Manufacturer = req.body.Manufacturer;
            product.Item_Number = req.body.Item_Number;
            product.Price = req.body.Price;
            product.Expiry_Date = req.body.Expiry_Date;
            product.Descriptions = req.body.Descriptions;
            product.save().then(() => res.json("Product update successfully"))
                .catch((err) => res.status(400).json(err.message));

        })
        .catch((err) => res.status(400).json(err.message));

});

router.delete('/delete/:id', (req, res) => {
    Production.findByIdAndDelete(req.params.id).then(() => res.json("Product deleted"))
        .catch((err) => res.status(400).json(err.message));

});

router.route("/view/:id").get(async(req, res) => {
    let userId = req.params.id;
    const user = await Production.findById(userId)
        .then(response => res.json(response))
        .catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with get user", error: err.message });
        })
        
})
module.exports = router;