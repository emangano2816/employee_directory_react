import React, { Component } from "react";


class InputDetail extends Component {

         

    render() {

        return (
            <form className='d-flex flex-row justify-content-even'>
                <select name='sort' id='sort' >
                    <option value=''>Sort Order</option>
                    <option value='lastname'>Last Name</option>
                    <option value='email'>Email Address</option>
                    <option value='zip'>Zipcode</option>
                </select>
                <button className='w-25 ml-3'>Sort</button>
            </form>
        )
    }
}

export default InputDetail;