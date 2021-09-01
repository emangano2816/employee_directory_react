import React from 'react';
import InputDetail from './InputDetail';

function InputContainer() {
    return (
        <div className='d-flex flex-row justify-content-between'>
            <InputDetail type='sort'/>
        </div>
    )
}

export default InputContainer;