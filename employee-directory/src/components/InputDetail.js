import React, { Component } from "react";

class InputDetail extends Component {


    render() {
        return (
            <form className='d-flex flex-row justify-content-even'>
                <select id='sort' name='sort'>
                    <option value='' selected disabled hidden>Sort Order</option>
                    <option value='lastname'>Last Name</option>
                    <option value='email'>Email Address</option>
                    <option value='zip'>Zipcode</option>
                </select>
                <button>Sort</button>
            </form>
        )
    }
}

export default InputDetail;