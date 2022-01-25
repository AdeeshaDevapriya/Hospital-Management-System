import React, { useState } from 'react'
import axios from 'axios';
import './generatereport.css';
import jsPDF from 'jspdf';

const Generatereport = ()=> {

    const [Data, setData] = useState([]);

    axios.get(`http://localhost:8087/Production/view`)
    .then((res) => setData(res.data))
    .catch((err) => console.log(err.message));
    console.log(Data);

    const DOWNPDF = () => {
        const doc = new jsPDF("landscape","pt",[1000,1500]);
        doc.html(document.querySelector("#INVENTORY_REPORT"),{
            callback:function(pdf) {
                pdf.save("inventory report.pdf")
            }
        })
    }

    return ( 
        <div>
        <div className="IntContainer"> 
            <div className="container"> 
            <h1> Inventory List Report </h1>
            <table class="table table-success table-striped" id="INVENTORY_REPORT">

            <thead className="thead-light">
                <tr>
                    <th scope="col"> Production Name </th>
                    <th scope="col"> Category </th>
                    <th scope="col"> Current quantity </th>
                    <th scope="col"> Manufacturer </th>
                    <th scope="col"> Item Number </th>
                    <th scope="col"> Price </th>
                    <th scope="col"> Expiry Date </th>

                </tr>
            </thead>
         <tbody>
             { Data.map((item,key) =>(
             <tr>
 <td> {item.Production_Name} </td>
 <td> {item.Category} </td>
 <td> {item.Current_quantity} </td> 
 <td> {item.Manufacturer} </td>
 <td> {item.Item_Number}</td>
 <td> {item.Price} </td>
 <td> {item.Expiry_Date} </td>
 {/* <td> <button onClick={this.onDelete} class="btndoc1"> Delete </button></td> */}
 </tr>
          ))}
         </tbody>
            
            </table>
            <button class="btn btn-outline-success" onClick={() =>DOWNPDF()} >DOWNLOAD REPORT PDF FILE </button>
            </div>
       </div>
       </div>
       
     )
}

export default Generatereport;
