import { ButtonContainer } from './style';

function Button(props:any) {
    return (
        <ButtonContainer onClick={props.onClick}>
            {props.label}
        </ButtonContainer>
    );
}

export default Button;