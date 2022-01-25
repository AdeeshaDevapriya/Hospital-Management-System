import React, { useState, useEffect } from "react";
import axios from 'axios';
import './searchitem.css';
import imgsint from '../../../Images/Checking boxes-bro.png'
import InventorySideMenu from '../InventorySideMenuComponent/InventorySideMenu'

function SearchInt() {
    const [search, setSearch] = useState('');
    const [int, setInventory] = useState([]);
    const [filteredIntData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8087/Production/view')
            .then((response) => {
                setInventory(response.data);
            })
    }, [])

useEffect(() => {
    setFilteredData(
        int.filter((int) => int.Production_Name.toLowerCase().includes(search.toLowerCase()))
        )
}, [search], int)


return ( 
    <div class="containerg">
       
            <div>
        <InventorySideMenu/>
        </div>
        <div>
      <div className="IntSearchContainer">
    <div className="searchInventory">
        <br/>
    <div className="container" id="searchInventoryForm">
        <h1 className="searchInventoryDetail">SEARCH INVENTORY DETAILS </h1><br/><br/><br/>
        <h2> Enter Production Name To View The Product Details</h2><br/>
        <input className="searchBarInt.A" type="text" placeholder="enter product name" onChange={(e) => {
            setSearch(e.target.value);
        }}/>
        <br/><br/>
        
        
        <table className="table.A">
            <thead className="thead-light">
                <tr>
                    <th> Inventory Details </th>
                </tr>
            </thead>
            <tbody>
                {filteredIntData.map((val) =>{
                    return <div key={val.id}>
                        <tr><td>Production_Name : {val.Production_Name}</td></tr>
                        <tr><td>Category : {val.Category} </td></tr>
                        <tr><td>Current_quantity : {val.Current_quantity} </td></tr>
                        <tr><td>Manufacturer : {val.Manufacturer} </td></tr>
                        <tr><td>Item_Number : {val.Item_Number} </td></tr>
                        <tr><td>Price : {val.Price} </td></tr>
                        <tr><td>Expiry_Date : {val.Expiry_Date} </td></tr>
                        <tr><td>Descriptions : {val.Descriptions} </td></tr>
                        </div>
                     })}
            </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        
        <div>
        
        </div>
        <img className="imgsint1" src={imgsint} alt="Search icon" ></img>
        <img className="imgsint1" src={imgsint} alt="Search icon" ></img>
    </div>
  
);
 }
 
 export default SearchInt;