const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const salarySchema = new Schema({

    salary_id: { type: String, required: true },
    month: { type: String, required: true },
    overtime: { type: Number, required: true },
    basicSalary: { type: String, required: true },
    house_a: { type: String, required: true },
    other_a: { type: String, required: true },
    pf: { type: String, required: true },
    esi: { type: String, required: true },
    net_salary: { type: String, required: true }

})

const Salary = mongoose.model("Salary", salarySchema);

module.exports = Salary;