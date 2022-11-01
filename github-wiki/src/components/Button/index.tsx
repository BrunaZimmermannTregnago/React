import React from 'react';
import {ButtonContainer} from './styles';

function Button(props:any){
    return (
        <ButtonContainer onClick={props.onClick}>
            Buscar
        </ButtonContainer>
    )
}

export default Button;