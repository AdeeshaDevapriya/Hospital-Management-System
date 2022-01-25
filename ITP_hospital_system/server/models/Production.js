const mongoose = require('mongoose');
const schema = mongoose.Schema;
const ProductionSchema = new schema({

    Production_Name: {
        type: String,
        required: true
    },
    Category: {
        type: String,
        required: true
    },
    Current_quantity: {
        type: Number,
        required: true
    },
    Manufacturer: {
        type: String,
        required: true
    },
    Item_Number: {
        type: Number,
        required: true
    },
    Price: {
        type: Number,
        required: true
    },
    Expiry_Date: {
        type: String,
        required: true
    },
    Descriptions: {
        type: String,
        required: true
    }
});
const Productions = mongoose.model("Productions", ProductionSchema);
module.exports = Productions;