import React from "react";

function EmpTable (props) {

    return (
        <div className='table-responsive align-self-center'>
        <table className='table table-striped table-bordered table-hover w-auto'>
           <thead className='thead-dark'>
               <tr>
                   <th>Employee</th>
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
                    <td><img src={employee.picture.thumbnail} alt="employee" height={100} width={100}></img></td>
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
       </div>
    )

}


export default EmpTable;