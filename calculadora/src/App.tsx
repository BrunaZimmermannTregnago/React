import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import { Container, Content, Row } from './styles';

function App() {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operacao, setOperacao] = useState('');

  function handleAddNumber(number: String) {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`);
  }

  function handleOnClear() {
    setCurrentNumber('0');
    setFirstNumber('0');
  }

  function handleOperacao(op:String){
    setOperacao(String(op));
    setFirstNumber(currentNumber);
    setCurrentNumber('0');
  }

  function handleOperatorNumbers() {
    if(firstNumber === '0' && operacao === ''){
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
    }else{
      let sum:Number = 0; 
      switch (operacao){
        case  '+':
          sum = Number(firstNumber) + Number(currentNumber);
          break;
          case  '-':
            sum = Number(firstNumber) - Number(currentNumber);
            break;
            case  '*':
              sum = Number(firstNumber) * Number(currentNumber);
              break;
              case  '/':
                sum = Number(firstNumber) / Number(currentNumber);
                break;
      }
      setCurrentNumber(String(sum));
      setOperacao('');
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={() => handleOperacao('*')} />
          <Button label="/" onClick={() => handleOperacao('/')} />
          <Button label="C" onClick={() => handleOnClear()} />
          <Button label="X" onClick={() => setCurrentNumber('0')} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={() => handleOperacao('-')} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={() => handleOperacao('+')} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={() => handleOperatorNumbers()} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
