import React, { Component } from 'react'
import './Resignation.css';
import img from '../../../Images/Footer.png'

export default class Resignation extends Component {
    render() {
        return (
            <div>
               <div className="stResForm">
                    <h2>Formal Resignation Letter</h2>
                    <img src={img} className = "img-foot" alt="gal"/>

                    <div className="stFormrow">
                        <form class="row g-3">
                                <div class="col-md-3">
                                    <label for="inputEmail4" class="form-label">Date</label>
                                    <input type="date" class="form-control" id="inputEmail4"/>
                                </div>
                                <div class="col-md-6">
                                    <label for="inputName4" class="form-label">Full Name</label>
                                    <input type="text" class="form-control" id="inputName4"/>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputEmail4" class="form-label">Date of Departure</label>
                                    <input type="date" class="form-control" id="inputEmail4"/>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputState" class="form-label">Department</label>
                                    <select id="inputState" class="form-select">
                                    <option selected>Choose...</option>
                                    <option>Laboratory Department</option>
                                    <option>Finance Department</option>
                                    <option>Drug Department</option>
                                    <option>Surgery</option>
                                    <option>Emergency department(ED)</option>
                                    <option>labor and delivery</option>
                                    <option>cardiac care unit (CCU),</option>
                                    
                                    </select>
                                </div>
                                <div class="col-12">
                                    <label for="inputdeclaration" class="form-label">Resignation Declaration</label>
                                    <input type="text" class="form-control" id="inputdeclaration" />
                                </div>
                                <div class="col-12">
                                    <label for="inputAddress2" class="form-label">Reason For Leaving</label>
                                    <input type="text" class="form-control" id="inputAddress2" placeholder="Valid Reason"/>
                                </div>

                                <p className="stThank">Thank You!</p>
                                
                        </form>
                    </div>

                    <button className="stResSendbtn">Send</button>
               </div>


  
            </div>
                

                
            
        )
    }
}
