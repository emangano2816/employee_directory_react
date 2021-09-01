import React, { Component } from "react";
import randomUser from '../randomUser.json';

class EmpTable extends Component {


    render() {
        console.log(randomUser);
        return (
            <table>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Phone</th>
                    <th>Zipcode</th>
                </tr>
                <tr>
                    <td>{randomUser[0].results[0].name.last}</td>
                    <td>{randomUser[0].results[0].name.first}</td>
                    <td>{randomUser[0].results[0].email}</td>
                    <td>{randomUser[0].results[0].gender}</td>
                    <td>{randomUser[0].results[0].phone}</td>
                    <td>{randomUser[0].results[0].postcode}</td>
                </tr>
            </table>
        )
    }
}

export default EmpTable;