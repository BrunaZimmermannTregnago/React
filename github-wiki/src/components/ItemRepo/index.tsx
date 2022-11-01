import React from 'react';
import { ItemContainer } from './styles';

function ItemRepo(props:any){

    function handleRemove(){
        props.handleRemoverRepo(props.repo.id);
    }

    return (
        <ItemContainer>
            <h3>{props.repo.name}</h3>
            <p>{props.repo.full_name}</p>
            <a href={props.repo.html_url} rel="noreferrer">Ver repositório</a>
            <button onClick={handleRemove} className="remover">Remover</button>
            <hr/>
        </ItemContainer>
    )
}

export default ItemRepo;