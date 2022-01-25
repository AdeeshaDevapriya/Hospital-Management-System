// // import React, { Component } from 'react'
// // import axios from 'axios';

// // export default class editSalary extends Component {

// //     constructor(props){
// //         super(props);
// //         this.state ={Salary: [] ,

// //             salary_id:'',
// //             month:'',
// //             overtime:'',
// //             basicSalary:'',
// //             house_a:'',
// //             other_a:'',
// //             pf:'',
// //             esi:''

// //         }
//  //         this.onChange = this.onChange.bind(this);
// //         this.onSubmit = this.onSubmit.bind(this);
// //         this.onEdit = this.onEdit.bind(this);


// //     }

// //     componentDidMount() {
// //         axios.get(`http://localhost:8087/salary/search/${this.props.match.params.salary_id}`)
// //             .then((res) => {
// //                 console.log("data", res);
// //                 this.setState({
// //                     Salary : res.data
// //                 })
// //             console.log(this.state.Salary);
// //             this.state.salary.map((item,key)=>{
// //                 console.log("item",item._id);
// //                 this.setState({salary_id:item._id});
// //             })
// //                     }).catch((err) => {
// //                 console.log("Error", err);
// //             })

// //     }


// //     onChange (e) {
// //         this.setState({[e.target.id]: e.target.value});
// //     }

// //     onEdit(){
// //         const datasetSal = {  
// //             salary_id:this.state.salary_id,
// //             month:this.state.month,
// //             overtime:this.state.overtime,
// //             basicSalary:this.state.basicSalary,
// //             house_a:this.state.house_a,
// //             other_a:this.state.other_a,
// //             pf:this.state.pf,
// //             esi:this.state.esi

// //         }

// //         axios.put(`http://localhost:8087/salary/update/${this.state.salary_id}`,datasetSal)

// //         .then((data) =>{

// //             console.log("Successfully Updated");
// //             alert("Details successfully deleted!");
// //             window.location = "/viewSalary";
// //         }).catch((err) =>{
// //             console.log("Error",err);
// //         })             
// //     }


// //     render() {

// //         return (
// //             <div className ="container">
// //             <div className="salaryUpdate">
// //             <h1>Add New salary</h1>

// //             <form className="UpdateForm">
// //             { this.state.salary.map((item,key)=>{
// //                 console.log("item",item);
// //             }) }            
// //                         <div class="form-group">
// //                             <label for="salary_id">Salary ID</label>
// //                             <input type="text" class="form-control" id="salary_id" onChange={this.onChange} placeholder={item.salary_id} />
// //                         </div>

// //                         <div class="form-group">
// //                             <label for="month">Month of pay</label>
// //                             <input type="text" class="form-control" id="month" onChange={this.onChange} placeholder={item.month}/>
// //                         </div>

// //                         <div class="form-group">
// //                             <label for="overtime">OverTime (hours)</label>
// //                             <input type="text" class="form-control" id="overtime" onChange={this.onChange} placeholder={item.overtime}/>
// //                         </div>

// //                         <div class="form-group">
// //                             <label for="basicSalary">Basic Salary</label>
// //                             <input type="text" class="form-control" id="basicSalary" onChange={this.onChange} placeholder={item.basicSalary}/>
// //                         </div>

// //                         <div class="form-group">
// //                             <label for="house_a">House Allowance Rent (HRA)</label>
// //                             <input type="text" class="form-control" id="house_a" onChange={this.onChange} placeholder={item.house_a}/>
// //                         </div>

// //                         <div class="form-group">
// //                             <label for="other_a">Other Allowance</label>
// //                             <input type="text" class="form-control" id="other_a" onChange={this.onChange} placeholder={item.other_a}/>
// //                         </div>

// //                         <div class="form-group">
// //                             <label for="pf">Provident Fund (PF)</label>
// //                             <input type="text" class="form-control" id="pf" onChange={this.onChange} placeholder={item.pf}/>
// //                         </div>

// //                         <div class="form-group">
// //                             <label for="esi">Employee's state Insurance (ESI)</label>
// //                             <input type="text" class="form-control" id="esi" onChange={this.onChange} placeholder={item.esi}/>
// //                         </div>
// //                         <hr/>
// //                         <div class="form-group">
// //                             <label for="netpay">NET PAY</label>
// //                             <input type="text" class="form-control" id="netpay" onChange={this.onChange} placeholder={item.netpay}/>
// //                         </div>

// //                         <hr/>

// //                         <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Save</button>
// //                         </form>
// //          </div>               
// //              </div>            


// //         )
// //     }
// //     }

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// // //////////////////////////////////////////////////////////////////////////////////////
import React, { Component } from 'react'
import axios from 'axios';
//import './addSalary.css';
import SalarysideMenu from '../SalarysideMenuCompnent/SalarysideMenu';

export default class EditSalary  extends Component {

    constructor(props){
        super(props);
        this.state ={Salary: [] ,

            salary_id:'',
            month:'',
            overtime:'',
            basicSalary:'',
            house_a:'',
            other_a:'',
            pf:'',
            esi:''

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit(e){
        const add_sal ={
            salary_id:this.state.salary_id,
            month:this.state.month,
            overtime:this.state.overtime,
            basicSalary:this.state.basicSalary,
            house_a:this.state.house_a,
            other_a:this.state.other_a,
            pf:this.state.pf,
            esi:this.state.esi
        }
        console.log(add_sal);

        axios.post(`http://localhost:8087/salary/update`+this.props.salary_id,add_sal)
        .then(res =>{
            console.log("Successfully registered");
            window.location = "/viewSalary";
        }).catch((err) =>{
            console.log("Error",err);
        }) 
    }

    componentDidMount(){
        axios.get(`http://localhost:8087/salary/`+this.props.salary_id)
        .then(res =>{
            this.setState({
                salary_id : res.data.salary_id,
                month : res.data.month,
                overtime: res.data.overtime,
                basicSalary: res.data.basicSalary,
                house_a: res.data.house_a,
                other_a: res.data.other_a,
                pf:res.data.pf,
                esi: res.data.esi,
            }).catch((err) =>{
                console.log("Error",err);
            }) 
        })
    }

    render() {

        return (
            <div> 
                <SalarysideMenu/>
                <div className ="Salcontainer">
            <div className ="container">
            <div className="SalaryAdd">
            <h1>Edit Salary Details</h1>

            <form className="AddSalForm">
                        <div class="form-group">
                            <label for="salary_id">Salary ID</label>
                            <input type="text" class="form-control" id="salary_id" onChange={this.onChange} />
                        </div>

                        <div class="form-group">
                            <label for="month">Month of pay</label>
                            <input type="text" class="form-control" id="month" onChange={this.onChange} placeholder="MMMMMMM"/>
                        </div>

                        <div class="form-group">
                            <label for="overtime">OverTime (hours)</label>
                            <input type="text" class="form-control" id="overtime" onChange={this.onChange} placeholder="hours"/>
                        </div>

                        <div class="form-group">
                            <label for="basicSalary">Basic Salary</label>
                            <input type="text" class="form-control" id="basicSalary" onChange={this.onChange} placeholder="Rs."/>
                        </div>

                        <div class="form-group">
                            <label for="house_a">House Allowance Rent (HRA)</label>
                            <input type="text" class="form-control" id="house_a" onChange={this.onChange} placeholder="Rs."/>
                        </div>

                        <div class="form-group">
                            <label for="other_a">Other Allowance</label>
                            <input type="text" class="form-control" id="other_a" onChange={this.onChange} placeholder="Rs."/>
                        </div>

                        <div class="form-group">
                            <label for="pf">Provident Fund (PF)</label>
                            <input type="text" class="form-control" id="pf" onChange={this.onChange} placeholder="Rs."/>
                        </div>

                        <div class="form-group">
                            <label for="esi">Employee's state Insurance (ESI)</label>
                            <input type="text" class="form-control" id="esi" onChange={this.onChange} placeholder="Rs."/>
                        </div>
                        <hr/>
                        <div class="form-group">
                            <label for="netpay">NET PAY</label>
                            <input type="text" class="form-control" id="netpay" onChange={this.onChange} placeholder="Rs."/>
                        </div>

                        <hr/>

                        <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Save</button>
                        </form>
         </div>               
             </div>
             </div>
             </div>
        )
    }
}





// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // import React,{useState, useEffect} from "react";
// // import axios from "axios";
// // import { useParams } from "react-router";


// // function EditSalary(){

// //     const [salary_id, setsalary_id] = useState("");
// //     const [month, setmonth] = useState("");
// //     // const [age, setAge] = useState("");
// //     // const [contactNumber, setContactNumber] = useState("");
// //     // const [gender, setGender] = useState("");
// //     // const [jobTitle, setJobTitle] = useState("");
// //     // const [email, setEmail] = useState("");

// //   const {id} = useParams();
// //   useEffect(() => {
// //     function getSalary() {
// //       axios.get(`http://localhost:8070/salary/get/${id}`)
// //       .then((res) => {

// //         console.log(res.data.employee);
// //         setsalary_id(res.data.salary.salary_id);
// //         setmonth(res.data.salary.month);
// //         // setAge(res.data.employee.age);
// //         // setContactNumber(res.data.employee.contactNumber);
// //         // setGender(res.data.employee.gender);
// //         // setJobTitle(res.data.employee.jobTitle);
// //         // setEmail(res.data.employee.email);
// //       })
// //       .catch((err) => {
// //         console.log(err.message);
// //       });
// //     }
// //     getSalary();
// //   }, []);



// //   function sendUpdateSalary(e){
// //     e.preventDefault();

// //       const updateSalary = {

// //         salary_id,
// //         month
// //         // age,
// //         // contactNumber,
// //         // gender,
// //         // jobTitle,
// //         // email


// //       }

// //     axios.put(`http://localhost:8070/salary/update/${id}`, updateSalary).then(()=>{
// //       alert("Salary is Updated");

// //     }).catch((err)=>{
// //       alert(err);
// //     })
// //   }

// //     return(
// //         <div> 

// //         <div className ="Salcontainer">
// //     <div className ="container">
// //     <div className="SalaryAdd">
// //     <h1>Add Salary Details</h1>

// //     <form onSubmit={sendUpdateSalary}  className="AddSalForm">
// //                 <div class="form-group">
// //                     <label for="salary_id">Salary ID</label>
// //                     <input type="text" class="form-control" id="salary_id"  value={salary_id}
// //                       onChange={(e)=>{

// //                         setsalary_id(this.target.value)
// //                        }}/>
// //                 </div>

// //                 {/* <div class="form-group">
// //                     <label for="month">Month of pay</label>
// //                     <input type="text" class="form-control" id="month" onChange={this.onChange} placeholder="MMMMMMM"/>
// //                 </div> */}
// // {/* 
// //                 <div class="form-group">
// //                     <label for="overtime">OverTime (hours)</label>
// //                     <input type="text" class="form-control" id="overtime" onChange={this.onChange} placeholder="hours"/>
// //                 </div>

// //                 <div class="form-group">
// //                     <label for="basicSalary">Basic Salary</label>
// //                     <input type="text" class="form-control" id="basicSalary" onChange={this.onChange} placeholder="Rs."/>
// //                 </div>

// //                 <div class="form-group">
// //                     <label for="house_a">House Allowance Rent (HRA)</label>
// //                     <input type="text" class="form-control" id="house_a" onChange={this.onChange} placeholder="Rs."/>
// //                 </div>

// //                 <div class="form-group">
// //                     <label for="other_a">Other Allowance</label>
// //                     <input type="text" class="form-control" id="other_a" onChange={this.onChange} placeholder="Rs."/>
// //                 </div>

// //                 <div class="form-group">
// //                     <label for="pf">Provident Fund (PF)</label>
// //                     <input type="text" class="form-control" id="pf" onChange={this.onChange} placeholder="Rs."/>
// //                 </div>

// //                 <div class="form-group">
// //                     <label for="esi">Employee's state Insurance (ESI)</label>
// //                     <input type="text" class="form-control" id="esi" onChange={this.onChange} placeholder="Rs."/>
// //                 </div>
// //                 <hr/>
// //                 <div class="form-group">
// //                     <label for="netpay">NET PAY</label>
// //                     <input type="text" class="form-control" id="netpay" onChange={this.onChange} placeholder="Rs."/>
// //                 </div> */}

// //                 <hr/>

// //                 <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Save</button>
// //                 </form>
// //  </div>               
// //      </div>
// //      </div>
// //      </div>

// //     );
// // }
// // export default EditSalary;


















// /////////////////////////////////////////////////////////////////////
// import React, { Component } from 'react';
// import axios from "axios";


// class editSalary extends Component {
// constructor(props){
// super();
// this.state = { Salary: [],
//                  salary_id:'',
//                 month:'',
//                 overtime:'',
//                 basicSalary:'',
//                 house_a:'',
//                 other_a:'',
//                 pf:'',
//                 esi:''
// }

// this.onChangesalary_id = this.onChangesalary_id.bind(this);
// this.onChangemonth = this.onChangemonth.bind(this);
// this.onChangeovertime = this.onChangeovertime.bind(this);
// this.onChangebasicSalary = this.onChangebasicSalary.bind(this);
// this.onChangehouse_a = this.onChangehouse_a.bind(this);
// this.onChangeother_a = this.onChangeother_a.bind(this);
// this.onChangepf = this.onChangepf.bind(this);
// this.onChangeesi = this.onChangeesi.bind(this);
// this.onSubmit = this.onSubmit.bind(this);
// }
// componentDidMount() {
// axios.get('http://localhost:8087/salary/'+this.props.match.params.id)
// .then(res => {
// this.setState({
// // salary_id: res.data.salary_id,
// // Month res.data.description,
// // overtime: res.data.overtime,
// // date: new Date(res.data.date),
//                 salary_id : res.data.salary_id,
//                 month : res.data.month,
//                 overtime: res.data.overtime,
//                 basicSalary: res.data.basicSalary,
//                 house_a: res.data.house_a,
//                 other_a: res.data.other_a,
//                 pf:res.data.pf,
//                 esi: res.data.esi,
// })
// })
// .catch(function (error){
// console.log(error);
// })
// axios.get('http://localhost:8087/salary/') 
// .then(response => {
// if(response.data.length > 0) {
// this.setState({
// salary: response.data.map(salary => salary.salary_id)
// });
// }
// })
// }
// onChangesalary_id(e) {
// this.setState({ salary_id: e.target.value})
// }
// onChangemonth(e) {
// this.setState({ month: e.target.value})
// }
// onChangeovertime(e) {
// this.setState({ overtime: e.target.value})
// }
// onChangebasicSalary(e) {
// this.setState({basicSalary : e.target.value})
// }
// onChangehouse_a(e) {
//  this.setState({ house_a: e.target.value})
// }
// onChangeother_a(e) {
//   this.setState({ other_a: e.target.value})
// }
// onChangepf(e) {
//   this.setState({pf : e.target.value})
// }
// onChangeesi(e) {
//     this.setState({esi : e.target.value})
//   }
// onSubmit(e) {
// e.preventDefault();

// const salary= {
//     salary_id:this.state.salary_id,
//     month:this.state.month,
//     overtime:this.state.overtime,
//     basicSalary:this.state.basicSalary,
//     house_a:this.state.house_a,
//     other_a:this.state.other_a,
//     pf:this.state.pf,
//     esi:this.state.esi
// }
// console.log(salary);
// axios.post('http://localhost:8087/salary/update/'+this.props.match.params.id, salary)
// .then(res => console.log(res.data));
// window.location = "/viewSalary";
// }

// render() {
// return (
// <div className="container">
// <h3>Edit Exercise Log</h3>
// <form >
// <div className="form-group">
// <label>Salary ID: </label>
// <select
// required
// className="form-control"
// value={this.state.salary_id}
// onChange={this.onChangesalary_id} >
// {
// this.state.Salary.map(function(salary) {
// return <option key={salary} value={salary}>{salary}</option>;
// })
// }
// </select>
// </div>
// <div className="form-group">
// <label>Month </label>
// <input
// type="text" required
// className="form-control"
// value={this.state.month}
// onChange={this.onChangemonth}
// />
// </div>
// <div className="form-group">
// <label>Overtime </label>
// <input
// type="text"
// className="form-control"
// value={this.state.overtime}
// onChange={this.onChangeovertime}
// />
// </div>

// <div className="form-group">
// <label>Basic Salary </label>
// <input
// type="text"
// className="form-control"
// value={this.state.basicSalary}
// onChange={this.onChangebasicSalary}
// />

// </div>
// <div className="form-group">
// <input type="submit" value="Edit Exercise Log"  onClick={this.onSubmit}className="btn btn-primary" />
// </div>
// </form>
// </div>
// );
// }
// }
// export default editSalary;