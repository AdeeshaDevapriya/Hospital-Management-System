import React, { Component } from 'react';
import './Register.css';
import axios from 'axios';

export default class Register extends Component {

    constructor(props){
        super(props);
        this.state ={
            FirstName : "",
            LastName : "",
            Dob : "",
            EmpId: "",
            Address : "",
            Gender : "",
            Email : "",
            Phone : "",
            Occupation : "",
            Password : "",
            ReEnterPassword : "",
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(){
        const dataset = {  
        FirstName : this.state.FirstName,
        LastName : this.state.LastName,
        Dob : this.state.Dob,
        EmpId: this.state.EmpId,
        Phone: this.state.Phone,
        Address : this.state.Address,
        Gender : this.state.Gender,
        Email : this.state.Email,
        Occupation : this.state.Occupation,
        Password : this.state.Password,
        ReEnterPassword : this.state.ReEnterPassword,}
    
        console.log(dataset);

        if(this.state.Password == this.state.ReEnterPassword){
            axios.post(`http://localhost:8087/employee/add`,dataset)
        .then(res => {
            console.log("Succesfully Registered");
            alert("Successfully Registered!")
            window.location = "/ViewEmployeeList";
        }).catch(
            (err) =>{
                console.log("Error",err);
            }
        )
        }else{
            alert("Password Not Matched!");
        }

        

        
    }




    render() {
        return (
            <div className ="container"> 
               <div className="RegjH1">
                 <h1>Employee</h1>
                 <h1>Register Form</h1>
                                        
                        <form className = "RegjForm">
                                <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1m">First name <span class="text-danger">*</span></label>
                                            <input type="text" id={"FirstName"}  name = {"FirstName"}  onChange = {this.onChange} class="form-control form-control-lg" />

                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1n">Last name <span class="text-danger">*</span></label>
                                            <input type="text" id={"LastName"}  name = {"LastName"} onChange = {this.onChange} class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                </div>

                                 <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1m1">Date Of Birth</label>
                                            <input type="date" id={"Dob"}  name = {"Dob"} onChange = {this.onChange} class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1n1">Employee ID</label>
                                            <input type="text" id={"EmpId"}  name = {"EmpId"} onChange = {this.onChange} class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                 </div>

                                 <div class="form-outline mb-4">
                                         <label class="form-label" for="form3Example8">Address</label>
                                        <input type="text" id={"Address"}  name = {"Address"} onChange = {this.onChange} class="form-control form-control-lg" />
                                 </div>

                                
                                 <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1m1">Gender</label>
                                            <input type="text" id={"Gender"}  name = {"Gender"} onChange = {this.onChange} class="form-control form-control-lg" />
                                            
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1n1">Email</label>
                                            <input type="email" id={"Email"}  name = {"Email"}  onChange = {this.onChange} class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                 </div>

                                <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1m1">Phone</label>
                                            <input type="text" id={"Phone"}  name = {"Phone"}  onChange = {this.onChange} class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1n1">Occupation</label>
                                            <input type="text" id={"Occupation"}  name = {"Occupation"}  onChange = {this.onChange} class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                 </div>

                                <div class="row">
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1m1">Password</label>
                                            <input type="password" id={"Password"}  name = {"Password"}  onChange = {this.onChange}class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                        <div class="col-md-6 mb-4">
                                            <div class="form-outline">
                                            <label class="form-label" for="form3Example1n1">Re-Enter Password</label>
                                            <input type="password"  id={"ReEnterPassword"}  name = {"ReEnterPassword"}  onChange = {this.onChange} class="form-control form-control-lg" />
                                            </div>
                                        </div>
                                 </div>

                                <div class="btn" align = "center">
                                        <button  type="button"  class="btn1">Reset all</button>
                                        <button type="button" onClick={this.onSubmit} 
                                         class="btn2">Submit form</button>
                                </div>

                         </form>  
                                     
         </div>
        </div> 
            
        )            
            
    }
}
