import React, { useState } from 'react'
import axios from 'axios';
import './updateitem.css';
import InventorySideMenu from '../InventorySideMenuComponent/InventorySideMenu'

const IntUpdate = (prop) => {

    const id = prop.match.params.id;

    console.log(id);

    const [IUpdate, setIUpdate] = useState([]);

    axios.get(`http://localhost:8087/Production/view/${id}`)
    .then((res) => setIUpdate(res.data))
    .catch((err) => console.log(err.message));
    console.log(IUpdate);

    const [Production_Name, setProduction_Name] = useState("");
    const [Category, setCategory] = useState("");
    const [Current_quantity, setCurrent_quantity] = useState("");
    const [Manufacturer, setManufacturer] = useState("");
    const [Item_Number, setItem_Number] = useState("");
    const [Price, setPrice] = useState("");
    const [Expiry_Date, setExpiry_Date] = useState("");
    const [Descriptions, setDescriptions] = useState("");

    const getIntDetails = (e) => {
        e.preventDefault();
        const datasetInt = {
            Production_Name,
            Category,
            Current_quantity,
            Manufacturer,
            Item_Number,
            Price,
            Expiry_Date,
            Descriptions



        }

        // console.log(datasetInt);

        axios.put(`http://localhost:8087/Production/update/${id}`, datasetInt)
        .then(() => alert ("Room Details updated successfully"))
        .catch((err) => console.log(err.message));
        window.location = "/viewitem";
    }

    

    return(

<div>
        <InventorySideMenu/>
        <div className="container">
            
        <br></br><h1> Update Production Details</h1><br></br>
        <div className="formUpdateRoom">
            <form onSubmit={getIntDetails}>
                <div className="roomAdd">
                    <label for = "category" className = "form-label">Production_Name</label>
                    <input type="text" 
                    className="form-control"
                    name="category"
                    placeholder="Production_Name"
                    defaultValue={IUpdate.Production_Name}
                    onChange = {(e) =>  setProduction_Name(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Category</label>
                    <input type="text" 
                    className="form-control"
                    name="RoomId"
                    placeholder="Category"
                    defaultValue={IUpdate.Category}
                    onChange = {(e) => setCategory(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Current_quantity</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Current_quantity"
                    defaultValue={IUpdate.Current_quantity}
                    onChange = { (e)=> setCurrent_quantity(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Manufacturer</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Manufacturer"
                    defaultValue={IUpdate.Manufacturer}
                    onChange = { (e)=> setManufacturer(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Item_Number</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Item_Number"
                    defaultValue={IUpdate.Item_Number}
                    onChange = { (e)=> setItem_Number(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Price</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Price"
                    defaultValue={IUpdate.Price}
                    onChange = { (e)=> setPrice(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Expiry_Date</label>
                    <input type="date" 
                    className="form-control"
                    name="BedId"
                    placeholder="Expiry_Date"
                    defaultValue={IUpdate.Expiry_Date}
                    onChange = { (e)=> setExpiry_Date(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Descriptions</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Descriptions"
                    defaultValue={IUpdate.Descriptions}
                    onChange = { (e)=> setDescriptions(e.target.value)}
                    />
                </div><br/>

                <button className="btn btn-success" type="submit" /* onClick={this.onSubmit} */>
                    <i className="far fa-check-square">
                        &nbsp; Update Product Details
                    </i>
                </button>

            </form>
            </div>
        </div>
        </div>
    )
}

export default IntUpdate;