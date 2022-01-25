import React, { Component } from 'react'
import './viewitem.css';
import axios from 'axios';
import imgsint from '../../../Images/Collecting-rafiki.png'
import {Link} from 'react-router-dom';
import InventorySideMenu from '../InventorySideMenuComponent/InventorySideMenu'

export default class viewitem extends Component {
    constructor(props) {
        super(props);
        this.state = { Production: [],
            Production_Name : "",
            Category : "",
            Current_quantity : "" ,
            Manufacturer : "",
            Item_Number : "",
            Price : "",
            Expiry_Date : ""
           
        }
        

    }

    componentDidMount() {
        axios.get(`http://localhost:8087/Production/view`)
            .then((res) => {console.log("data", res);
                this.setState({
                    Production : res.data
                })
            console.log(this.state.Production);
            this.state.Production.map((item,key)=>{
                console.log("item",item);
            })
                    }).catch((err) => {
                console.log("Error", err);
            })

    }

    onSubmitAdd(){
        window.location = '/additem'
    }
    onSubmitSearch() {
        window.location = '/searchitem'
    }
    navigateIntUpdate(id){
        window.location = `/updateitem/${id}`
    }
    onGenReport(){
        window.location = '/generatereport'
    }

    render() {
        return ( 
            <div>
                <InventorySideMenu/>
            <div className="IntContainer"> 
                <div className="container"> 
                <br></br><h1> Inventory List </h1><br></br>
                <button type="submit" class="btn btn-primary" onClick={this.onSubmitSearch}>Search Product</button>
                <button type="submit" class="btn btn-primary" onClick={this.onSubmitAdd}>Add New Product</button><br></br><br></br>
                
                <table class="table table-success table-striped">

                <thead className="thead-light">
                    <tr>
                        <th scope="col"> Production Name </th>
                        <th scope="col"> Category </th>
                        <th scope="col"> Current quantity </th>
                        <th scope="col"> Manufacturer </th>
                        <th scope="col"> Item Number </th>
                        <th scope="col"> Price </th>
                        <th scope="col"> Expiry Date </th>
                        <th scope="col">  </th>
                        <th scope="col">  </th>

                    </tr>
                </thead>
             <tbody>
                 { this.state.Production.map((item,key) =>(
                 <tr>
     <td> {item.Production_Name} </td>
     <td> {item.Category} </td>
     <td> {item.Current_quantity} </td> 
     <td> {item.Manufacturer} </td>
     <td> {item.Item_Number}</td>
     <td> {item.Price} </td>
     <td> {item.Expiry_Date} </td>
     <td> <button onClick={() => deleteitem(item._id)} class="btn btn-outline-success"> Delete </button></td>
     <td> <button class="btn btn-outline-success" onClick={() =>{this.navigateIntUpdate(item._id)}} > Edit</button> </td>
     {/* <td> <button onClick={this.onDelete} class="btndoc1"> Delete </button></td> */}
     </tr>
              ))}
             </tbody>
                
                </table>
                <button type="submit" class="btn btn-primary" onClick={this.onGenReport}>GENERATE REPORT</button>
                
                
                </div>
                <img className="imgsint3" src={imgsint} alt="Search icon" ></img>
           </div>
           </div>
           
         )   
    }
}


const deleteitem = (id) => {
    axios.delete(`http://localhost:8087/Production/delete/${id}`)
    .then(res => {
      console.log("item successfully deleted");
  alert("Do you want to delete this item ?");
  window.location = "/viewitem";
  this.componentDidMount();
   }).catch((err) => {
  console.log("Error", err);
     })
     

     }