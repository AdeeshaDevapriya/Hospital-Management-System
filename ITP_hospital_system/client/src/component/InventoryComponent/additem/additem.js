import React, { Component } from 'react'
import './additem.css';
import axios from 'axios';
import imgsint from '../../../Images/Checking boxes-rafiki.png'
import InventorySideMenu from '../InventorySideMenuComponent/InventorySideMenu'

export default class additem extends Component {

    constructor(props){
        super(props);
        this.state ={
            Production_Name : "",
            Category : "",
            Current_quantity : "" ,
            Manufacturer : "",
            Item_Number : "",
            Price : "",
            Expiry_Date : "",
            Descriptions : "",
           
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit = async (e) => {
      e.preventDefault();
        const datasetInt = {  
            Production_Name : this.state.Production_Name, 
            Category : this.state.Category,
            Current_quantity : this.state.Current_quantity,
            Manufacturer : this.state.Manufacturer,
            Item_Number : this.state.Item_Number,
            Price : this.state.Price,
            Expiry_Date : this.state.Expiry_Date,
            Descriptions : this.state.Descriptions,
    
        }
        console.log(datasetInt);
        

        
        axios.post(`http://localhost:8087/Production/add`, datasetInt)
        .then(res =>{
            console.log("Successfully registered");
            alert("Product successfully added!");
          window.location = "/viewitem";
        }).catch((err) =>{
            console.log("Error",err);
            alert("Fields are empty!");
        }) 
    } 
    
    
    render() {
        
        return (
          <div>
                <InventorySideMenu/>
          
            <div className ="container">
            <div className="additem">
            <br></br><h1>Add New Product</h1><br></br>

            <form className="AddIntForm">
  <div class="form-group">
    <label for="Production_Name">Production Name</label>
    <input type="text" class="form-control" id="Production_Name" onChange={this.onChange} placeholder="Production name"/>
  </div>

  <div class="form-group">
    <label for="Category">Category</label>
    <input type="text" class="form-control" id="Category" onChange={this.onChange} placeholder="Category"/>
  </div>

  <div class="form-group">
    <label for="Current_quantity">Current quantity</label>
    <input type="text" class="form-control" id="Current_quantity" onChange={this.onChange} placeholder="Current quantity"/>
  </div>

  <div class="form-group">
    <label for="Manufacturer">Manufacturer</label>
    <input type="text" class="form-control" id="Manufacturer" onChange={this.onChange} placeholder="Manufacturer"/>
  </div>

  <div class="form-group">
    <label for="Item_Number">Item Number</label>
    <input type="text" class="form-control" id="Item_Number" onChange={this.onChange} placeholder="Item number"/>
  </div>

  <div class="form-group">
    <label for="Price">Price</label>
    <input type="text" class="form-control" id="Price" onChange={this.onChange} placeholder="Rs."/>
  </div>
  
  <div class="form-group">
    <label for="Expiry_Date">Expiry Date</label>
    <input type="date" class="form-control" id="Expiry_Date" onChange={this.onChange} placeholder="DD/MM/YYYY"/>
  </div>

  <div class="form-group">
    <label for="Descriptions">Descriptions</label>
    <input type="text" class="form-control" id="Descriptions" onChange={this.onChange} placeholder="Add description"/>
  </div>
 <br></br>
  <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Add Product</button>
</form>
         </div>               
             </div>
             <img className="imgsint2" src={imgsint} alt="Search icon" ></img>
             </div>
        )
    }
}

