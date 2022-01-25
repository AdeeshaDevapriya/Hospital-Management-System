const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DrugSchema = new Schema({
    type: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    unit: {
        type: String,
        required: true
    },

    supplier_name: {
        type: String,
        required: true
    },

    unit_price: {
        type: String,
        required: true
    },

    quantity: {
        type: String,
        required: true
    },

    exp_date: {
        type: String,
        required: true
    },
})
const drug = mongoose.model("drug", DrugSchema);

module.exports = drug;