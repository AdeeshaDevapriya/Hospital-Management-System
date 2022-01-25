import React, { Component } from 'react'
import axios from 'axios';
import './DrugsAdd.css';
import DrugSideMenu from '../DrugSideMenuComponent/DrugSideMenu';


export default class DrugsAdd extends Component {

    constructor(props){
        super(props);
        this.state ={
      
            type : "",
            name : "",
            unit : "" ,
            supplier_name : "",
            unit_price : "",
            quantity : "",
            exp_date : "",
           
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit(){
        const datasetDrug = {  
            type : this.state.type,
            name : this.state.name, 
            unit : this.state.unit,
            supplier_name : this.state.supplier_name,
            unit_price : this.state.unit_price ,
            quantity : this.state.quantity,
            exp_date : this.state.exp_date,
    
        }
    //     console.log(datasetDrug);
        

    //     axios.post(`http://localhost:8087/drug/add`,datasetDrug)
    //     .then(res =>{
    //         console.log("Successfully added");
    //         alert("Details successfully added!");
    //       window.location = "/DrugView";
    //     }).catch((err) =>{
    //         console.log("Error",err);
    //     }) 
 
    // }
    console.log(datasetDrug);
        

   
    axios.post(`http://localhost:8087/drug/add`,datasetDrug)
    .then(res =>{
        console.log("Drug Added Successfully");
        alert("Drug Added Successfully!");
      window.location = "/DrugView";
    }).catch((err) =>{
        console.log("Error",err);
    }) 
} 


    




    
    render() {
        
        return (
            <div>
              <DrugSideMenu/>
            <div className ="Drugcontainer">   
            <div className ="container">
            <div className="AddDrug">
            <h1>Add New Drugs</h1>

            <form className="AddDrugForm">
 
  <div class="form-group">
    <label for="type">Drug Type</label>
    <input type="text" class="form-control" id="type" onChange={this.onChange} placeholder="Tablets/Liquid/Capsules" />
  </div>
  
  <div><br></br></div>

  <div class="form-group">
    <label for="name">Drug Name</label>
    <input type="text" class="form-control" id="name" onChange={this.onChange} placeholder="Name"/>
  </div>

  <div><br></br></div>

  <div class="form-group">
    <label for="unit">Unit</label>
    <input type="text" class="form-control" id="unit" onChange={this.onChange} placeholder="mg/ml" />
  </div>

  <div><br></br></div>
  <div class="form-group">
    <label for="supplier_name">Supplier Name</label>
    <input type="text" class="form-control" id="supplier_name" onChange={this.onChange} placeholder="Supplier Name"/>
  </div>
  <div><br></br></div>
  <div class="form-group">
    <label for="unit_price">Unit Price </label>
    <input type="text" class="form-control" id="unit_price" onChange={this.onChange} placeholder="Rs"/>
  </div>
  <div><br></br></div>
  <div class="form-group">
    <label for="quantity">Quantity</label>
    <input type="text" class="form-control" id="quantity" onChange={this.onChange} placeholder="Quantity"/>
  </div>
  <div><br></br></div>
  <div class="form-group">
    <label for="exp_date">Expire Date</label>
    <input type="text" class="form-control" id="exp_date" onChange={this.onChange} placeholder="Year"/>
  </div>
<div><br></br></div>

 
  < button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
</form>
         </div>               
             </div></div>               
             </div>
        )
    }
}


// import React, {useState} from 'react'
// import axios from 'axios';
// import './DrugsAdd.css';
// import DrugSideMenu from '../DrugSideMenuComponent/DrugSideMenu'


// export default function DrugsAdd() {
//     const [type, settype] = useState("");
//     const [name, setname] = useState("");
//     const [unit, setunit] = useState("");
//     const [supplier_name, setsupplier_name] = useState("");
//     const [unit_price, setunit_price] = useState("");
//     const [quantity, setquantity] = useState("");
//     const [exp_date, setexp_date] = useState("");

//     function sendData(e){
//         e.preventDefault();
        
//         const newDrug = {
//          type,
//          name,
//          unit,
//          supplier_name,
//          unit_price,
//          quantity,
//          exp_date
//         }
//  axios.post("http://localhost:8087/drug/add", newDrug)
//   .then(() =>{
//   alert("New Drug Added")
//             // settype("");
//             // setname("");
//             // setunit("");
//   }).catch((err)=>{
//   alert("error", err)
// })
// }


//     return ( 

//             <div>
//             <DrugSideMenu/>
//             <div className ="Drugcontainer">   
//             <div className="container">
//             <h1> Add Drug Details</h1>
       
//          <form onSubmit={sendData}>
        
//             <div className = "drugAdd" >
//             <label for = "type" className = "form-label" > Drug Type </label>
//             <input type = "text" className = "form-control" id = "type" placeholder = "Enter Drug Type [Tablets/Capsules/Liquid...]" onChange={(e) =>{
//               settype(e.target.value);  
            
//             }} />
//             </div>


//             <div className = "drugAdd" >
//             <label for = "name" className = "form-label" > Name</label>
//             <input type = "text" className = "form-control" id = "name " placeholder = "Enter Drug Name" onChange={(e) =>{
//               setname(e.target.value); 
//             }}/>
//             </div>
            
//             <div className = "drugAdd" >
//             <label for = "unit" className = "form-label" > Unit</label>
//             <input type = "text" className = "form-control" id = "unit " placeholder = "Enter Drug unit [mg/ml]" onChange={(e) =>{
//              setunit(e.target.value);
//             }}/>
//             </div>

                   
//             <div className = "drugAdd" >
//             <label for = "supplier_name" className = "form-label" > supplier_name</label>
//             <input type = "text" className = "form-control" id = "supplier_name " placeholder = "Enter Supplier Name" onChange={(e) =>{
//              setsupplier_name(e.target.value);
//             }}/>
//             </div>

//             <div className = "drugAdd" >
//             <label for = "unit_price" className = "form-label" > unit_price</label>
//             <input type = "text" className = "form-control" id = "unit_price " placeholder = "Enter Unit Price" onChange={(e) =>{
//              setunit_price(e.target.value);
//             }}/>
//             </div>

//             <div className = "drugAdd" >
//             <label for = "quantity" className = "form-label" > quantity</label>
//             <input type = "text" className = "form-control" id = "quantity " placeholder = "Enter Quantity" onChange={(e) =>{
//              setquantity(e.target.value);
//             }}/>
//             </div>

//             <div className = "drugAdd" >
//             <label for = "exp_date" className = "form-label" > exp_date</label>
//             <input type = "text" className = "form-control" id = "exp_date " placeholder = "Enter Expire Date(Year)" onChange={(e) =>{
//              setexp_date(e.target.value);
//             }}/>
//             </div>
//              <div><br/> </div>


//             <button type = "submit" className = "btn btn-primary" > Save </button> 
//         </form> 
      
// </div></div></div>               
// )
// }

////////////////////////////////////////////////////////////////

// import React, {useState} from 'react'
// import axios from 'axios';
// import DrugSideMenu from '../DrugSideMenuComponent/DrugSideMenu';
// import './DrugsAdd.css';


// export default function DrugsAdd() {

//         const [type, settype] = useState("");
//         const [name, setname] = useState("");
//         const [unit, setunit] = useState("");
//         const [supplier_name, setsupplier_name] = useState("");
//         const [unit_price, setunit_price] = useState("");
//         const [quantity, setquantity] = useState("");
//         const [exp_date, setexp_date] = useState("");
    
    

//     function sendData(e){
//         e.preventDefault();
        
//         const newRoom = {
//          type,
//          name,
//          unit,
//          supplier_name,
//          unit_price,
//          quantity,
//          exp_date
//         }

//         axios.post("http://localhost:8087/drugs/add")
//         .then(() =>{
//             alert("New Drug Added")
//             // setCategory("");
//             // setBedId("");
//             // setRoomId("");
//             window.location = "/DrugsView";
//         }).catch((err)=>{
//             alert(err)
//         })

//     }

//     return ( 
        
//         <div>
//           <DrugSideMenu/>
//         <div className="Drugcontainer">
//         <div className="container">
            
//             &nbsp;
//             &nbsp;
//             &nbsp;
//             <center>
//             <h2 style={{fontFamily: "Segoe UI"}}> Drug management</h2>
//             </center>
//             &nbsp;
//             &nbsp;
//             &nbsp;
//             <h4> Add Room Details</h4>
            
//         <div className="formAddRoom">
//         <form onSubmit={sendData} >
        
        
        
//           <div className = "drugAdd" >
//           <label for = "type" className = "form-label" > Drug Type </label>
//           <input type = "text" className = "form-control" id = "type" placeholder = "Enter Drug Type [Tablets/Capsules/Liquid...]" onChange={(e) =>{
              
//               settype(e.target.value);  
            
//           }} />             
//           </div>



//             &nbsp;
//             &nbsp;

//           <div className = "drugAdd" >
//           <label for = "name" className = "form-label" > Name</label>
//           <input type = "text" className = "form-control" id = "name " placeholder = "Enter Drug Name" onChange={(e) =>{
//           setname(e.target.value); 
//           }}/>
//           </div>
            

//             &nbsp;
//             &nbsp;


//           <div className = "drugAdd" >
//           <label for = "unit" className = "form-label" > Unit</label>
//           <input type = "text" className = "form-control" id = "unit " placeholder = "Enter Drug unit [mg/ml]" onChange={(e) =>{
//           setunit(e.target.value);
//           }}/>
//          </div>

                   

//             &nbsp;
//             &nbsp;


//                <div className = "drugAdd" >
//                <label for = "supplier_name" className = "form-label" > supplier_name</label>
//                <input type = "text" className = "form-control" id = "supplier_name " placeholder = "Enter Supplier Name" onChange={(e) =>{
//                setsupplier_name(e.target.value);
//                }}/>
//                </div>

// &nbsp;
// &nbsp;

//             <div className = "drugAdd" >
//             <label for = "unit_price" className = "form-label" > unit_price</label>
//             <input type = "text" className = "form-control" id = "unit_price " placeholder = "Enter Unit Price" onChange={(e) =>{
//              setunit_price(e.target.value);
//             }}/>
//             </div>

// &nbsp;
// &nbsp;
//             <div className = "drugAdd" >
//             <label for = "quantity" className = "form-label" > quantity</label>
//             <input type = "text" className = "form-control" id = "quantity " placeholder = "Enter Quantity" onChange={(e) =>{
//              setquantity(e.target.value);
//             }}/>
//             </div>

// &nbsp;
// &nbsp;
//             <div className = "drugAdd" >
//             <label for = "exp_date" className = "form-label" > exp_date</label>
//             <input type = "text" className = "form-control" id = "exp_date " placeholder = "Enter Expire Date(Year)" onChange={(e) =>{
//              setexp_date(e.target.value);
//             }}/>
//             </div>
          
        
// &nbsp;
// &nbsp;    
//             <center>
//             <button type = "submit" className = "btn btn-primary" > Save </button> 
//             </center>
//         </form> 
//        </div>
//        </div>
//        </div>
//        </div>

//     )
// }