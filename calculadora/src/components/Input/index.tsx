import {InputContainer} from './style';

function Input(props: any) {
    return (
        <InputContainer>
        <input disabled value={props.value}/>
        </InputContainer>
    );
}

export default Input;