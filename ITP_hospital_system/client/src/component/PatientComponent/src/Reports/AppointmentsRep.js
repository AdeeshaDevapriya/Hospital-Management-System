import React, {useState} from 'react';
import "./../../css/Reports/AppointmentRep.css";
import axios from 'axios';

const AppointmentRep = () => {
    const [apt, setapt] = useState([]);
    const [date, setDate] = useState("");

    const getValues = () => {
        axios.get()
        .then((res) => setapt(res.data))
        .catch((err) => console.error(err.message))
    }

    console.log(date)

    return (
        <div className="AppointmentRep">
            <h1> Apointment Reports Details </h1>

            <form className="AppointmentRepform"  onSubmit={getValues}>
                <input type="month" onChange={(e) => setDate(e.target.value)}/>
                <input type="submit" value="Generate" />
            </form>
        </div>
    )
}
export default AppointmentRep;