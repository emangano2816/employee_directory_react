import React from 'react';
import InputDetail from './InputDetail';

function InputContainer() {
    return (
        <div className='d-flex flex-row justify-content-center py-3'>
            <InputDetail type='sort' defaultVal='' defaultDesc='Select Sort Order' val1='lastName' val1Desc='Last Name' 
                        val2='email' val2Desc='Email Address' val3='zipcode' val3Desc='Zipcode'/>
            <InputDetail type='filter' defaultVal='' defaultDesc='Select Filter Criteria' val1='male' val1Desc='Male' 
                        val2='female' val2Desc='Female'/>
        </div>
    )
}

export default InputContainer;