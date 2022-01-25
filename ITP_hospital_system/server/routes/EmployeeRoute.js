const router = require("express").Router();
let Employee = require("../models/EmployeeModel");


router.route("/add").post((req,res) =>{
    const FirstName  = req.body.FirstName;
    const LastName = req.body.LastName;
    const Dob = req.body.Dob;
    const EmpId = req.body.EmpId;
    const Address = req.body.Address;
    const Gender = req.body.Gender;
    const Email = /*Email*/(req.body.Email);
    const Phone = req.body.Phone;
    const Occupation = req.body.Occupation;
    // const DepId = req.body.DepId;
    // const ResignId = req.body.ResignId;
    const Password = /*Password*/(req.body.Password);

     const newEmployee = new Employee({
         FirstName,
         LastName,
         Dob,
         EmpId,
         Address,
         Gender,
         Email,
         Phone,
         Occupation,
         Password

     })

//Add Employee Details
     newEmployee.save().then(() =>{
         res.json("Employee Added")
     }).catch((err) => {
         console.log(err);
     })

})

//view Employee Details
router.route("/").get((req,res) =>{
    Employee.find().then((employee) => {
        res.json(employee)
    }).catch((err) => {
        console.log(err)
    })
})

//Search Employee
router.route("/search/:id").get((req,res) =>{
    Employee.find({EmpId:req.params.id}).then((employee) => {
        res.json(employee)
    }).catch((err) => {
        console.log(err)
    })
})

// Edit Employee Details
router.put("/update/:id", async (req,res) =>{
    const id = req.params.id;
    const dataSet = req.body;

    console.log("DAta",dataSet);
    console.log("id",id);

    await Employee.findByIdAndUpdate(id,dataSet)
    .then((data)=>{
        console.log("Updated",data);
        res.status(200).send({data:data});
    }).catch((err)=>{
        
    console.log("Error",err);
    res.send(err);
    })
})

// Delete Employee Details
 router.route("/delete/:id").delete(async (req,res) => {
         let EmpId = req.params.id;

         await Employee.findByIdAndDelete(EmpId).then(() => {
             res.status(200).send({status: "User Deleted"});
         }).catch((err) => {
             console.log(err.message);
             res.status(500).send({status: "Error with delete user", error: err.message});
         })
 })


 

module.exports = router;