// import React, { Component } from 'react'
// import './DoctorUpdate.css';
// import axios from 'axios';
// import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'

// export default class DoctorUpdate extends Component {

//     constructor(props){
//         super(props);
//         this.state ={  doctor: [],
//             name : "",
//             doctorid : "",
//             contactno : "" ,
//             specialization : "",
//             department : "",
//             designation : "",
//             password : "",
//             conpassword : "",
           
//         }
//         this.onEdit = this.onEdit.bind(this);
        
//     }

//     componentDidMount() {
//         axios.get(`http://localhost:8087/doctor/search/${this.props.match.params.id}`)
//             .then((res) => {console.log("data", res);
//                 this.setState({
//                     doctor : res.data
//                 })
//             console.log(this.state.doctor);
//             this.state.doctor.map((item,key)=>{
//                 console.log("item",item._id);
//                 this.setState({doctorid:item._id});
//             })
//                     }).catch((err) => {
//                 console.log("Error", err);
//             })

//     }


//     onChange = (e) => {
//         this.setState({[e.target.id]: e.target.value});
//     }

//     onEdit(){
//         const datasetDoc = {  
//             name : this.state.name, 
//             doctorid : this.state.doctorid,
//             contactno : this.state.contactno,
//             specialization : this.state.specialization,
//             department : this.state.department,
//             designation : this.state.designation,
//             password : this.state.password,
//             conpassword : this.state.conpassword,
    
//         }
        
        

//         if(this.state.password == this.state.conpassword){
//         axios.put(`http://localhost:8087/doctor/update/${this.state.doctorid}`,datasetDoc)
//         .then((data) =>{
//             console.log("Successfully Updated");
//             alert("Doctor successfully deleted!");
//             window.location = "/DoctorAllView";
//         }).catch((err) =>{
//             console.log("Error",err);
//         }) 
//     } else{
//         alert("Password Not Matched!");
//     }
//     }


 

//     render() {
        
//         return (
//           <div>
//             <DoctorSideMenuAdmin/>
//             <div className ="container">
//             <div className="DoctorUpdate">
//             <h1>Add New Doctors</h1>
//             <form className="UpdateDocForm">
//              {this.state.doctor.map((item,key)=>(
                
            
//        <div> 
//       <div class="form-group">
//     <label for="name">Doctor name</label>
//     <input type="text" class="form-control" id="name" onChange={this.onChange} placeholder={item.name} />
//   </div>

//   <div class="form-group">
//     <label for="doctorid">Doctor Id</label>
//     <input type="text" class="form-control" id="doctorid" onChange={this.onChange} placeholder={item.doctorid}/>
//   </div>

//   <div class="form-group">
//     <label for="contactno">Contact Number</label>
//     <input type="text" class="form-control" id="contactno" onChange={this.onChange} placeholder={item.contactno}/>
//   </div>

//   <div class="form-group">
//     <label for="specialization">Specialization</label>
//     <input type="text" class="form-control" id="specialization" onChange={this.onChange} placeholder={item.specialization}/>
//   </div>

//   <div class="form-group">
//     <label for="department">Department</label>
//     <input type="text" class="form-control" id="department" onChange={this.onChange} placeholder={item.department}/>
//   </div>

//   <div class="form-group">
//     <label for="designation">Designation</label>
//     <input type="text" class="form-control" id="designation" onChange={this.onChange} placeholder={item.designation}/>
//   </div>
  
//   <div class="form-group">
//     <label for="password">Password</label>
//     <input type="password" class="form-control" id="password" onChange={this.onChange} placeholder="Add new password"/>
//   </div>

//   <div class="form-group">
//     <label for="conpassword">Confirm Password</label>
//     <input type="password" class="form-control" id="conpassword" onChange={this.onChange} placeholder="Confirm password"/>
//   </div>
//   </div>  
//   ))}
            
//   <button type="submit" class="btn btn-primary" onClick={this.onEdit}>Submit</button>
// </form>
//          </div>  
                    
//              </div>

//             </div>
//         )
//     }
// }

     
      
     
      