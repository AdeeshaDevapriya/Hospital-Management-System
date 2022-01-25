// import React, { Component } from 'react'
// import axios from 'axios';
// import './addSalary.css';
// import SalarysideMenu from '../SalarysideMenuCompnent/SalarysideMenu';

// export default class addSalary  extends Component {

//     constructor(props){
//         super(props);
//         this.state ={

//             salary_id:'',
//             month:'',
//             overtime:'',
//             basicSalary:'',
//             house_a:'',
//             other_a:'',
//             pf:'',
//             esi:''

//         }
//         this.onChange = this.onChange.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//     }
//     onChange(e) {
//         this.setState({[e.target.id]: e.target.value});
//     }

//     onSubmit(){
//         const add_sal ={
//             salary_id:this.state.salary_id,
//             month:this.state.month,
//             overtime:this.state.overtime,
//             basicSalary:this.state.basicSalary,
//             house_a:this.state.house_a,
//             other_a:this.state.other_a,
//             pf:this.state.pf,
//             esi:this.state.esi
//         }
//         console.log(add_sal);

//         axios.post(`http://localhost:8087/salary/add`,add_sal)
//         .then(res =>{
//             console.log("Successfully added");
//             window.location = "/viewSalary";
//         }).catch((err) =>{
//             console.log("Error",err);
//         }) 
      
//     }

//     render() {

//         return (
//             <div> 
//                 <SalarysideMenu/>
//                 <div className ="Salcontainer">
//             <div className ="container">
//             <div className="SalaryAdd">
//             <h1>Add Salary Details</h1>

//             <form className="AddSalForm">
//                         <div class="form-sal">
//                             <label for="salary_id">Salary ID</label>
//                             <input type="text" class="form-control-sal" id="salary_id" onChange={this.onChange} />
//                         </div>

//                         <div class="form-sal">
//                             <label for="month">Month of pay</label>
//                             <input type="text" class="form-control-sal" id="month" onChange={this.onChange} placeholder="MMMMMMM"/>
//                         </div>

//                         <div class="form-sal">
//                             <label for="overtime">OverTime (hours)</label>
//                             <input type="text" class="form-control-sal" id="overtime" onChange={this.onChange} placeholder="hours"/>
//                         </div>

//                         <div class="form-sal">
//                             <label for="basicSalary">Basic Salary</label>
//                             <input type="text" class="form-control-sal" id="basicSalary" onChange={this.onChange} placeholder="Rs."/>
//                         </div>

//                         <div class="form-sal">
//                             <label for="house_a">House Allowance Rent (HRA)</label>
//                             <input type="text" class="form-control-sal" id="house_a" onChange={this.onChange} placeholder="Rs."/>
//                         </div>

//                         <div class="form-sal">
//                             <label for="other_a">Other Allowance</label>
//                             <input type="text" class="form-control-sal" id="other_a" onChange={this.onChange} placeholder="Rs."/>
//                         </div>

//                         <div class="form-sal">
//                             <label for="pf">Provident Fund (PF)</label>
//                             <input type="text" class="form-control-sal" id="pf" onChange={this.onChange} placeholder="Rs."/>
//                         </div>

//                         <div class="form-sal">
//                             <label for="esi">Employee's state Insurance (ESI)</label>
//                             <input type="text" class="form-control-sal" id="esi" onChange={this.onChange} placeholder="Rs."/>
//                         </div>
//                         <hr/>
//                         <div class="form-sal">
//                             <label for="netpay">NET PAY</label>
//                             <input type="text" class="form-control-sal" id="netpay" onChange={this.onChange} placeholder="Rs."/>
//                         </div>

//                         <hr/>

//                         <button type="submit" class="btn btn-primary-sal" onClick={this.onSubmit}>Save</button>
//                         </form>
//          </div>               
//              </div>
//              </div>
//              </div>
//         )
//     }
// }

// //////////////////////////////////////////////////////import React, { Component } from 'react';
// // import axios from "axios";
// // import React, { Component } from 'react';

// // class addSalary extends Component {

// //     constructor(props) {
// //         super();
// //         this.state = {

// //             salary_id: "",
// //             month: "",
// //             overtime: "",
// //             basicSalary: '',
// //             house_a:'',
// //             other_a:'',
// //             pf:'',
// //             esi:'',
// //             salary: []
// //         }
// //         this.onChangesalary_id = this.onChangesalary_id.bind(this);
// //         this.onChangemonth = this.onChangemonth.bind(this);
// //         this.onChangeovertime = this.onChangeovertime.bind(this);
// //         this.onChangebasicSalary = this.onChangebasicSalary.bind(this);
// //         this.onChangehouse_a = this.onChangehouse_a.bind(this);
// //         this.onChangeother_a = this.onChangeother_a.bind(this);
// //         this.onChangepf = this.onChangepf.bind(this);
// //         this.onChangeesi = this.onChangeesi.bind(this);
// //         this.onSubmit = this.onSubmit.bind(this);
// //     }

// //     componentDidMount() {
// //         axios.get('http://localhost:8087/salary/')
// //             .then(response => {
// //                 if (response.data.length > 0) {
// //                     this.setState({
// //                         salary: response.data.map(Salary => Salary.salary_id),
// //                         salary_id: response.data[0].salary_id
// //                     });
// //                 }
// //             })
// //     }

// //     onChangesalary_id(e) {
// //         this.setState({ salary_id: e.target.value })
// //     }
// //     onChangemonth(e) {
// //         this.setState({ month: e.target.value })
// //     }
// //     onChangeovertime(e) {
// //         this.setState({ overtime: e.target.value })
// //     }
// //     onChangebasicSalary(e) {
// //         this.setState({basicSalary : e.target.value})
// //         }
// //         onChangehouse_a(e) {
// //          this.setState({ house_a: e.target.value})
// //         }
// //         onChangeother_a(e) {
// //           this.setState({ other_a: e.target.value})
// //         }
// //         onChangepf(e) {
// //           this.setState({pf : e.target.value})
// //         }
// //         onChangeesi(e) {
// //             this.setState({esi : e.target.value})
// //           }
// //     onSubmit(e) {
// //         e.preventDefault();


// //         const salary = {
// //             salary_id: this.state.salary_id,
// //             month: this.state.month,
// //             overtime: this.state.overtime,
// //             basicSalary:this.state.basicSalary,
// //             house_a:this.state.house_a,
// //             other_a:this.state.other_a,
// //             pf:this.state.pf,
// //             esi:this.state.esi
// //         }

// //         console.log(salary);

// //         axios.post('http://localhost:8087/salary/add', salary)
// //             .then(res => console.log(res.data));

// //         window.location = "/viewSalary";
// //     }

// //     render() { 
// //         return ( 
// //             <div className="container">
// //                 <h3>Create New Log</h3>
// //                 <form onSubmit={this.onSubmit}>
// //                     <div className="form-sal">
// //                         <label>Salary ID: </label>
// //                         <select ref="salaryInput"
// //                             required
// //                             className="form-control"
// //                             value={this.state.salary_id}
// //                             onChange={this.onChangesalary_id} >
// //                             {
// //                                 this.state.salary.map(function(salary) {
// //                                     return <option key={salary} value={salary}>{salary}</option>;
// //                                 })
// //                             }
// //                         </select>
// //                     </div>
// //                     <div className="form-sal">
// //                         <label>Month </label>
// //                         <input
// //                             type="text" required
// //                             className="form-control"
// //                             value={this.state.month}
// //                             onChange={this.onChangemonth}
// //                         />
// //                     </div>
// //                     <div className="form-sal">
// //                         <label>overtime </label>
// //                         <input
// //                             type="text"
// //                             className="form-control"
// //                             value={this.state.overtime}
// //                             onChange={this.onChangeovertime}
// //                         />
// //                     </div>
// //                     <div className="form-sal">
// //                         <label>Basic Salary </label>
// //                         <input
// //                             type="text"
// //                             className="form-control"
// //                             value={this.state.basicSalary}
// //                             onChange={this.onChangebasicSalary}
// //                         />                           
                       
// //                     </div>

// //                     <div className="form-sal">
// //                         <label>House Allowance </label>
// //                         <input
// //                             type="text"
// //                             className="form-control"
// //                             value={this.state.house_a}
// //                             onChange={this.onChangehouse_a}
// //                         />                           
                       
// //                     </div>

// //                     <div className="form-sal">
// //                         <label>OtherAllowances </label>
// //                         <input
// //                             type="text"
// //                             className="form-control"
// //                             value={this.state.other_a}
// //                             onChange={this.onChangeother_a}
// //                         />                           
// //                     </div>

// //                     <div className="form-sal">
// //                         <label>PF </label>
// //                         <input
// //                             type="text"
// //                             className="form-control"
// //                             value={this.state.pf}
// //                             onChange={this.onChangepf}
// //                         />                           
// //                     </div>

// //                     <div className="form-sal">
// //                         <label>ESI</label>
// //                         <input
// //                             type="text"
// //                             className="form-control"
// //                             value={this.state.esi}
// //                             onChange={this.onChangeesi}
// //                         />                           
// //                     </div>
// //                     <div className="form-sal">
// //                         <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
// //                     </div>
// //                 </form>
// //             </div>
// //          );
// //     }
// // }

// // export default addSalary;