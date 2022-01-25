import React, { useState, useEffect } from "react";
import axios from 'axios';

function SearchSal() {
    const [search, setSearch] = useState('');
    const [sal, setSal] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8087/salary/')
            .then((response) => {
                setSal(response.data);
            })
    }, [])

useEffect(() => {
    setFilteredData(
        sal.filter((sal) => sal.salary_id.toLowerCase().includes(search.toLowerCase()))
        )
}, [search], sal)


return ( 
    <div className="searchSalary">
        <br/>
    <div className="container" id="searchSalaryForm">
        <h3 className="searchSalaryDetail">SEARCH SALARY DETAILS </h3><br/><br/><br/><br/>
        <h5> Enter Salary Id to view the salary details</h5><br/>
        <input className="searchBarDoc.A" type="text" placeholder="Search..." onChange={(e) => {
            setSearch(e.target.value);
        }}/>
        <br/><br/>

        <table className="table.A">
            <thead className="thead-light">
                <tr>
                    <th> Payroll Details</th>
                </tr>
            </thead>
            <tbody>
                {filteredData.map((val) =>{
                    return <div key={val.id}>
                        <td>{val.month}</td>
                        <td>{val.overtime} </td>
                        <td>{val.basicSalary} </td>
                        <td>{val.house_a} </td>
                        <td>{val.other_a} </td>
                        <td>{val.pf} </td>
                        <td>{val.esi} </td>
                    </div>
                     })}
            </tbody>
        </table>
    </div>
    </div>
);
 }
 
 export default SearchSal;
