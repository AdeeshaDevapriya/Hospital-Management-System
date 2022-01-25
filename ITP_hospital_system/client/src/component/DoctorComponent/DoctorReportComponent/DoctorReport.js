// import React, { Component } from 'react'
// import './DoctorReport.css';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
// import moment from 'moment';
// import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'
// import jsPDF from 'jspdf'

// export default class DoctorReport extends Component {
//         constructor(props) {
//             super(props);
//             this.state = { Schedule: [],
//                 doctorid : "",
//                 name : "" ,
//                 workingDay : "",
//                 workingTime : "",
//                 roomNo : "",
               
//             }
            
//         }
        
    
//     componentDidMount() {
//         axios.get(`http://localhost:8087/Schedule/`)
//             .then((res) => {console.log("data", res.data);
//                 this.setState({
//                     Schedule : res.data
//                 })
//             console.log(this.state.Schedule);
//             this.state.Schedule.map((item,key)=>{
//                 console.log("item",item);
//             })
//                     }).catch((err) => {
//                 console.log("Error", err);
//             })

//     }

   


//     render() {
//         return ( 
         
//             <div>
//             <DoctorSideMenuAdmin/>
               
           
//             <div className="DocContainer"> 
//                 <div className="container"> 
//                 <h1> Doctor Schedule Report </h1>

//                 <button type="submit" className="pdfgen" onClick={this.DocReportGenerate}> Generate Report </button>
//                 <table class="">

//                 <thead className="">
//                     <tr>
//                         <th scope="col"> Doctor Id </th>
//                         <th scope="col"> Doctor Name </th>
//                         <th scope="col"> Working Day </th>
//                         <th scope="col"> Working Time </th>
//                         <th scope="col"> Room Number </th>
//                     </tr>
//                 </thead>
//              <tbody>
//                  { this.state.Schedule.map((item,key) =>(
//                  <tr>
//      <td> {item.doctorid} </td>
//      <td> {item.name} </td>
//      <td> {moment(item.workingDay).format("DD/MM/YY")} </td> 
//      <td> {item.workingTime} </td>
//      <td> {item.roomNo}</td>
 
   
//      </tr>
//               ))}
//              </tbody>
                
//                 </table>
                
//                 </div>
//            </div>
//            </div>
           

          
//          );   
//     }
// }




















// import React, { Component } from 'react'
// import './DoctorReport.css';
// import axios from 'axios';
// import {Link} from 'react-router-dom';
// import moment from 'moment';
// import Pdf from 'react-to-pdf'
// import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'
// const ref = React.createRef();


// export default class DoctorReport extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { Schedule: [],
//             doctorid : "",
//             workingDay : "",
//             workingTime : "",

           
//         }
        
    
// }
    
    
    
//     componentDidMount() {
//         axios.get(`http://localhost:8087/Schedule/`)
//             .then((res) => {console.log("data", res.data);
//                 this.setState({
//                     Schedule : res.data
//                 })
//             console.log(this.state.Schedule);
//             this.state.Schedule.map((item,key)=>{
//                 console.log("item",item);
//             })
//                     }).catch((err) => {
//                 console.log("Error", err);
//             })

//         }



//     render() {
//         return ( 
//             <>
//             <div>
//             <DoctorSideMenuAdmin/>
//                 <div className="postRep" ref={ref}>
           
//             <div className="DocContainer"> 
//                 <div className="container"> 
//                 <h1> Doctor Schedule Report </h1>
//                 <table class="">

//                 <thead className="">
//                     <tr>
//                         <th scope="col"> Doctor Id </th>
//                         <th scope="col"> Working Day </th>
//                         <th scope="col"> Working Time </th>
                       
//                     </tr>
//                 </thead>
//              <tbody>
//                  { this.state.Schedule.map((item,key) =>(
//                  <tr>
//      <td> {item.doctorid} </td>
//      <td> {moment(item.workingDay).format("DD/MM/YY")} </td> 
//      <td> {item.workingTime} </td>
       
//      </tr>
//               ))}
//              </tbody>
                
//                 </table>
                
//                 </div>
//            </div>
//            </div>
//            </div>
        
//            <Pdf targetRef={ref} filename="Schedules.pdf">
//                 {({ toPdf }) => <button  className ="button-report" onClick={toPdf} > Generate Report</button>}
//                </Pdf>
//                </>
//          );   
//     }
// }




