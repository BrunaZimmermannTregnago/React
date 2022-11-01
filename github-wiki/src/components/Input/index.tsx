import React from 'react';
import {InputContainer} from './styles';

function Input(props:any){
    return (
        <InputContainer>
            <input value={props.value} onChange={props.setOnChange} />
        </InputContainer>
    )
}

export default Input;