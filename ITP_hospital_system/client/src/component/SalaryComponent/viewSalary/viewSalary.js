import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';



export default class viewSalary extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = { salary: [] }

    // } 

    constructor(props){
        super(props);
        this.state ={ salary: [] ,
            salary_id:'',
            month:'',
            overtime:'',
            basicSalary:'',
            house_a:'',
            other_a:'',
            pf:'',
            esi:''
           
        }
    }
     componentDidMount(){
        axios.get("http://localhost:8087/salary/")
            .then((res) => {console.log("data", res.data);
                this.setState({
                    salary : res.data
                })

            console.log(this.state.salary);
            this.state.salary.map((item,key)=>{

                console.log("item",item);
            })

                    }).catch((err) => {
                console.log("Error", err);
            })
            }
            navigateEditSalary =() =>{
                window.location = `/editSalary/${this.state.salary_id}`
            }

    render() {
        return ( 
            <div>
                <div className="container"> 
                <div className="payroll">
                <h1> Payroll Details </h1><br/>
                </div>
                <h3> + Add New Salary Details </h3><br/>
                <table class="table table-success table-striped">
                <thead className="thead-light">
                    <tr>
                        <th scope="col"> Salary ID </th>
                        <th scope="col"> Month </th>
                        <th scope="col"> Overtime </th>
                        <th scope="col"> Basic Salary </th>
                        <th scope="col"> HRA </th>
                        <th scope="col"> Other allowances </th>
                        <th scope="col"> PF </th>
                        <th scope="col"> ESI </th>
                    </tr>
                </thead>

              
             <tbody>
                 { this.state.salary.map((item,key) =>(
                 <tr>
                        <td> {item.salary_id} </td>
                        <td> {item.month} </td>
                        <td> {item.overtime} </td> 
                        <td> {item.basicSalary} </td>
                        <td> {item.house_a}</td>
                        <td> {item.other_a} </td>   
                        <td> {item.pf} </td> 
                        <td> {item.esi} </td> 
                        <td> {item.netpay} </td> 
                        <td> <button onClick={() => deleteSalary(item._id)} type="button" class="btn btn-outline-danger"> Delete </button></td>
                        <td><button class="btn btn-outline-success"><Link to={"/editSalary/"+item.salary_id} >Edit</Link></button> </td>               
                                              
                </tr>
              ))}

                    
             </tbody>               
             </table>               
        </div>
        </div>
         )  
    }
}



const updateSalary = (id) => {
    window.location = "/editSalary";
}

const deleteSalary = (id) => {
    axios.delete(`http://localhost:8087/salary/delete/${id}`)
    .then(res => {
        console.log("Delete Details Successfully");
    alert("Delete Details Successfully");

    window.location = "/viewSalary";

    this.componentDidMount();
    }).catch((err) =>{
        console.log("Error", err); 
    })

}

// //////////////////////////////////////////////////////////////////////

// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import axios from "axios";

// const salary = props => (
//     <tr>
//         <td>{props.salary.salary_id}</td>
//         <td>{props.salary.month}</td>
//         <td>{props.salary.overtime}</td>
//         <td>{props.salary.basicSalary}</td>
//         <td>{props.salary.house_a}</td>
//         <td>{props.salary.other_a}</td>
//         <td>{props.salary.pf}</td>
//         <td>{props.salary.esi}</td>
//         <td>
//             <button className="btn btn-secondary"><Link to={"/edit/"+props.salary._id} style={{color:"white"}}>Edit</Link></button> | <button className="btn btn-danger" onClick={() => {props.deleteSalary(props.salary._id) }}>Delete</button>
//         </td>
//     </tr>
// )

// class viewSalary extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             salary: []
//         }

//         this.deleteSalary = this.deleteSalary.bind(this);
//     }

//     componentDidMount() {
//         axios.get('http://localhost:8087/salary/')
//             .then(res => {
//                 this.setState({ salary: res.data })
//             })
//             .catch(error => console.log(error));
//     }

//     deleteSalary(id) {
//         axios.delete('http://localhost:8087/salary/' +id)
//             .then(res => console.log(res.data));

//         this.setState({ salary: this.state.salary.filter(el => el._id !== id)})
//     }

//     viewSalary() {
//         return this.state.salary.map(currentexercise => {
//             return <salary salary={salary} deleteSalary={this.deleteSalary} key={salary._id} />
//         })
//     }

//     render() { 
//         return ( 
//             <div className="container">
//                 <h3>Logged Exercises</h3>
//                 <table className="table">
//                     <thead className="thead-light">
//                         <tr>
//                             <th>Salary ID</th>
//                             <th>Month</th>
//                             <th>Overtime</th>
//                             <th>Basic Salary</th>
//                             <th>House Allowance</th>
//                             <th>Other Allowance</th>
//                             <th>PF</th>
//                             <th>ESI</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.viewSalary()}
//                     </tbody>
//                 </table>
//             </div>
//          );
//     }
// }
 
// export default viewSalary;