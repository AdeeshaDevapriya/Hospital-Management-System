import React, { Component } from 'react'
import './DoctorAllView.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'

export default class DoctorAllView extends Component {
    constructor(props) {
        super(props);
        this.state = { doctor: [],
            name : "",
            doctorid : "",
            contactno : "" ,
            specialization : "",
            department : "",
            designation : "",
            password : "",
            conpassword : ""
           
        }
        

    }

    componentDidMount() {
        axios.get(`http://localhost:8087/doctor/`)
            .then((res) => {console.log("data", res);
                this.setState({
                    doctor : res.data
                })
            console.log(this.state.doctor);
            this.state.doctor.map((item,key)=>{
                console.log("item",item);
            })
                    }).catch((err) => {
                console.log("Error", err);
            })

    }


    render() {
        return ( 
            <div>
            <DoctorSideMenuAdmin/>
            <div className="DocContainer"> 
                <div className="container"> 
                <h1> Doctors </h1>
                <table class="table table-success table-striped">

                <thead className="thead-light">
                    <tr>
                        <th scope="col"> Doctor name </th>
                        <th scope="col"> Doctor Id </th>
                        <th scope="col"> Contact No </th>
                        <th scope="col"> specialization </th>
                        <th scope="col"> Department </th>
                        <th scope="col"> Designation </th>
                        <th scope="col"> Remove </th>
                        <th scope="col"> Edit </th>

                    </tr>
                </thead>
             <tbody>
                 { this.state.doctor.map((item,key) =>(
                 <tr>
     <td> {item.name} </td>
     <td> {item.doctorid} </td>
     <td> {item.contactno} </td> 
     <td> {item.specialization} </td>
     <td> {item.department}</td>
     <td> {item.designation} </td>
     <td> <button onClick={() => deleteDoctor(item._id)} class="btndoc1"> Delete </button></td>
     {/* <td> <button onClick={this.onDelete} class="btndoc1"> Delete </button></td> */}
     <td> <button onClick={() => navigateUpdateDoctor(item.doctorid)} class="btndoc2" > Update </button></td>
     </tr>
              ))}
             </tbody>
                
                </table>
                
                </div>
           </div>
           </div>
           
         )   
    }
}


    
const navigateUpdateDoctor = (id) => {
    window.location = `/DoctorUpdate/${id}`
}

    

const deleteDoctor = (id) => {
    axios.delete(`http://localhost:8087/doctor/delete/${id}`)
    .then(res => {
      console.log("Doctor successfully deleted");
  alert("Doctor successfully deleted!");
  window.location = "/DoctorAllView";
  this.componentDidMount();
   }).catch((err) => {
  console.log("Error", err);
     })

    
    }


 
// key = {key} onClick = {()=>{
//     this.navigateDoctor(item.doctorid)}
// }



// import React, { Component } from 'react'
// import {Link} from 'react-router-dom';
// import './DoctorAllView.css';
// import axios from 'axios';


// const Doctor = props =>{
//     <tr>
//      <td> {props.doctorD.name} </td>
//      <td> {props.doctorD.doctorid} </td>
//      <td> {props.doctorD.contactno} </td> 
//      <td> {props.doctorD.specialization} </td>
//      <td> {props.doctorD.department}</td>
//      <td> {props.doctorD.designation} </td>
//      <td>
//          <Link to={"/Update/"+props.doctor._id}> Update </Link> | <a href = "#" onClick={() => {props.DeleteDoctor(props.doctor_id)}}> Delete </a>
//      </td>
//     </tr>
// }

// export default class DoctorAllView extends Component {
//     constructor(props) {
//         super(props);

//         this.DeleteDoctor = this.DeleteDoctor.bind(this);
//         this.state = { doctor: [] }
//     }

//     componentDidMount() {
//         axios.get(`http://localhost:8087/doctor`)
//             .then((res) => {
                
//                 console.log("data", res.data);
//                 this.setState({
//                     doctor: res.data
//                 })

//             }).catch((err) => {
//                 console.log("Error", err);
//             })

//     }


//     // DeleteDoctor(id) {
//     //     axios.delete(`http://localhost:8087/doctor/`+ id)
//     //         .then(res => console.log("data", res.data_));
            
//     //             this.setState({ 
//     //                 doctor: res.state.data.filter(el => el._id !== id) 
//     //         })

//     // }


//     DoctorsList(){
//        return this.state.doctor.map(currentdoctor =>{
//            return <Doctor doctorD ={currentdoctor} DeleteDoctor={this.DeleteDoctor} key={currentdoctor._id}/>;
//        })
//     }


//     render() {
//         return ( 
//             <div> 
//                 <h1> Doctors </h1>
//                 <table className="table">
//                 <thead>
//                     <tr>
//                         <th> Doctor name </th>
//                         <th> Doctor Id </th>
//                         <th> Contact No </th>
//                         <th> specialization </th>
//                         <th> Department </th>
//                         <th> Designation </th>

//                     </tr>
//                 </thead>
//              <tbody>
//                  { this.DoctorsList()}
//              </tbody>
//                 </table>
                
                
//            </div>
//         )
//     }
// }





    // navigateDoctor = (id) => {
    //     window.location = `/updateDoctor/$(id)`
    // }

    
    // DeleteDoctor(id) {
    //     axios.delete(`http://localhost:8087/doctor/`+ id)
    //         .then(res => console.log("data", res.data));
            
    //             this.setState({ 
    //                 doctor: res.state.data.filter(el => el._id !== id) 
    //         })

    // }


      // OnDelete(){
    //     axios.delete(`http://localhost:8087/doctor/${this.state.doctorid}`)
    //     .then((data) => {
    //         console.log("Doctor successfully deleted");
    //       alert("Doctor successfully deleted!");
    //       window.location = "/DoctorAllView";
    //     }).catch((err) => {
    //         console.log("Error", err);
    //     })

    // }