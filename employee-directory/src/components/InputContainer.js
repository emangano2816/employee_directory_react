import React from 'react';
import InputDetail from './InputDetail';

function InputContainer(props) {
    return (
        <div className='d-flex flex-row justify-content-center py-3'>
            <InputDetail onChange={props.handleSortChange} type='sort' defaultVal='' defaultDesc='Select Sort Order' val1='last' val1Desc='Last Name' 
                        val2='email' val2Desc='Email Address' val3='zipcode' val3Desc='Zipcode'/>
            <InputDetail type='filter' defaultVal='' defaultDesc='Select Filter Criteria' val1='male' val1Desc='Male' 
                        val2='female' val2Desc='Female'/>
        </div>
    )
}

export default InputContainer;