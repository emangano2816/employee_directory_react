import React from "react";

function EmpTable (props) {

    return (
        <table className='table-striped table-bordered'>
           <thead className='thead-dark'>
               <tr>
                   <th>Last Name</th>
                   <th>First Name</th>
                   <th>Email</th>
                   <th>Gender</th>
                   <th>Phone</th>
                   <th>Zipcode</th>
               </tr>
           </thead>
           <tbody>
            {props.results.map((employee, index) => 
                        <tr key={index}>
                           <td>{employee.name.last}</td>
                           <td>{employee.name.first}</td>
                           <td>{employee.email}</td>
                           <td>{employee.gender}</td>
                           <td>{employee.phone}</td>
                           <td>{employee.location.postcode}</td>
                       </tr>
            )}

           </tbody>
       </table>
    )

}


export default EmpTable;