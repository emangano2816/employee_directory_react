import React from "react";


function InputDetail(props) {
    console.log(props)
    return (
        <form className='d-flex flex-row justify-content-even m-3'>
            <select name={props.type} id={props.type} >
                <option value={props.defaultVal}>{props.defaultDesc}</option>
                <option value={props.val1}>{props.val1Desc}</option>
                <option value={props.val2}>{props.val2Desc}</option>
                <option value={props.val3}>{props.val3Desc}</option>
            </select>
        </form>
    )
}

export default InputDetail;