const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8087;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL)
    //     ,{
    //     useCreateIndex: true,
    //     useNewParser: true,
    //     useUnifiedTopologyL: true,
    //     useFindAndModify: false,
    // });

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!");
})

const doctorRouter = require("./routes/doctors.js");
const employee = require("./routes/EmployeeRoute.js");
const Patient = require('./routes/Patient');
const Appointment = require('./routes/Appointment');
const salaryRouter = require("./routes/salaries.js");
const drug = require("./routes/drugs.js");
const productionRouter = require("./routes/Productions.js");
const scheduledocRouter = require("./routes/Schedules.js")
const postRoutes = require("./routes/posts.js");
const RoomPDRoutes = require("./routes/RoomPDRoute.js")


app.use("/salary", salaryRouter);
app.use("/doctor", doctorRouter);
app.use("/employee",employee);
app.use('/patient', Patient);
app.use('/appointment', Appointment);
app.use("/drug", drug);
app.use("/production", productionRouter);
app.use("/Schedule", scheduledocRouter);
app.use('/room', postRoutes);
app.use("/patientroom", RoomPDRoutes);

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`)
})