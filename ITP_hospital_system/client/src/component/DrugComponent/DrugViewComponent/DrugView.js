import React, { Component } from 'react'

import axios from 'axios';
import {Link} from 'react-router-dom';


export default class DrugView extends Component {
    constructor(props) {
        super(props); 
        this.state = {  Drugs:[],

            type : "",
            name : "",
            unit : "" ,
            supplier_name : "",
            unit_price : "",
            quantity : "",
            exp_date : ""
           
        }
        
    } 

     componentDidMount() {

        axios.get('http://localhost:8087/drug/')
            .then((res) => {console.log("data", res.data);
                this.setState({
                    Drugs : res.data
                })

            console.log(this.state.Drugs);

            this.state.Drugs.map((item,key)=>{
                console.log("item",item);
            })
                    }).catch((err) => {
                console.log("Error", err);
            })

            }
            render() {

                return ( 
                    <div>
                        <div className="container"> 
                        <h1> Drug Details </h1><br/>
                        <table class="table table-success table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col"> Drug Type </th>
                                <th scope="col"> Name </th>
                                <th scope="col"> Unit </th>
                                <th scope="col"> Supplier Name </th>
                                <th scope="col"> Unit Price </th>
                                <th scope="col"> Quantity </th>
                                <th scope="col"> Exp Date </th>
                                <th scope="col"> Remove </th>
                                <th scope="col"> Edit </th>
                            </tr>
                        </thead>
                        <tbody>

                 { this.state.Drugs.map((item,key) =>(

                 <tr>

                        <td> {item.type} </td>
                        <td> {item.name} </td>
                        <td> {item.unit} </td> 
                        <td> {item.supplier_name} </td>
                        <td> {item.unit_price}</td>
                        <td> {item.quantity} </td>   
                        <td> {item.exp_date} </td> 
                        <td> <button type="button" class="btn btn-secondary" onClick={() => deleteDrug(item._id)}> Delete </button></td>
                        {/* <td> <button type="button" class="btn btn-secondary" onClick={this.onDelete}> Delete </button></td> */}
                        <td> <button type="button" class="btn btn-secondary"> Update </button></td>  
                       
                </tr>
              ))}

             </tbody>               

             </table>               

        </div>

        </div>

         )  

    }

}

const deleteDrug = (id) => {
    axios.delete(`http://localhost:8087/drug/delete/${id}`)
    .then(res=> {
        console.log("Drug Deleted");
    alert("Drug Deleted");
    this.ComponentDidMount();
    }).catch((err) => {
        console.log("Error", err);
    })
}



// import React, { Component } from 'react'
// import axios from 'axios';
// export default class  DrugView extends Component{
//         constructor(props) {
//             super(props);
//             this.state = {drugDetails: []}
//         }
//         componentDidMount(){
//             axios.get("http://localhost:8087/drug/view")
//             .then((res) =>{
//                 console.log("data", res.data);
//                 this.setState({
//                     drugDetails: res.data
//                 })
//                 console.log(this.state.drugDetails);
//                 this.state.drugDetails.map((item,key) =>{
//                     console.log("item", item);
//                 })
//             }).catch((err) =>{
//                 console.log(err);
//             })
//         }
//         // navigateRoom = (id) =>{
//         //     window.location = '/room/view/${bid}'
//         // }
//         render(){
//             return(
//                 <div className="container">
//                     <h2>Drug Details</h2>
//                     <table className="table table-striped table-hover">
//                         <thead>
//                             <tr>
//                                 <th scope="col"> Drug Type</th>
//                                 <th scope="col"> Drug Name</th>
//                                 <th scope="col">Unit</th>
//                                 <th scope="col">Supplier Name</th>
//                                 <th scope="col"> Unit Price</th>
//                                 <th scope="col"> Quantity</th>
//                                 <th scope="col"> Expire Date</th>
                               



//                             </tr>
//                         </thead>
//                         <tbody>
//                             {this.state.drugDetails.map((item,key) =>(
//                                 <tr key = {key} onClick ={() =>{
//                                     // this.navigateRoom(item.roomId)
//                                 }
//                                     }>
//                                         <td>{item.type}</td>
//                                         <td>{item.name}</td> 
//                                         <td>{item.unit}</td>
//                                         <td>{item.supplier_name}</td>
//                                         <td>{item.unit_price}</td> 
//                                         <td>{item.quantity}</td>
//                                         <td>{item.exp_date}</td>


//                                         <a className="btn btn-warning" href={'/update/${posts.id}'}>
//                                             <i className="fas fa-edit"></i>&nbsp;Edit
//                                         </a>
//                                         &nbsp;
//                                         &nbsp;
//                                         <a className="btn btn-danger" href="#">
//                                             <i className="far fa-trash-alt"></i>&nbsp;Delete
//                                         </a>
//                                         </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                     <button className = "btn btn-success"><a href={'/DrugsAdd'}>Add Drug</a></button>
//                 </div>
//             )
//         }
// }