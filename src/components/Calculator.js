import { useState } from 'react';

const Calculator = ({setFlag, onClose}) => {
  const [result, setResult] = useState(0);
  const handleNumInput = num => {
    switch (num) {
      case -1: setResult(0); break;
      case -2: setFlag({ set: true, val: result, op: 'half' }); onClose(); break;
      case -3: setResult(result + 1000); break;
      case -4: setFlag({ set: true, val: result, op: 'minus' }); onClose(); break;
      case -5: setFlag({ set: true, val: result, op: 'plus' }); onClose(); break;
      case -6: setResult(result * 100); break;
      default: setResult(result === 0 ? num : result.toString() + num.toString());
    }
  }

  return (
    <div className="calculator">
      <div className="display">{result}</div>
      <div className="keypad">
        <button className="key" name='1' onClick={() => handleNumInput(1) }>1</button>
        <button className="key" name='2' onClick={() => handleNumInput(2) }>2</button>
        <button className="key" name='3' onClick={() => handleNumInput(3) }>3</button>
        <button className="key" name='C' onClick={() => handleNumInput(-1) }>C</button>
        <button className="key" name='4' onClick={() => handleNumInput(4) }>4</button>
        <button className="key" name='5' onClick={() => handleNumInput(5) }>5</button>
        <button className="key" name='6' onClick={() => handleNumInput(6) }>6</button>
        <button className="key" name='h' onClick={() => handleNumInput(-2) }>&frac12;</button>
        <button className="key" name='7' onClick={() => handleNumInput(7) }>7</button>
        <button className="key" name='8' onClick={() => handleNumInput(8) }>8</button>
        <button className="key" name='9' onClick={() => handleNumInput(9) }>9</button>
        <button className="key thousend" name='1000' onClick={() => handleNumInput(-3) }>1000</button>
        <button className="key minus" name='-' onClick={() => handleNumInput(-4) }>-</button>
        <button className="key" name='0' onClick={() => handleNumInput(0) }>0</button>
        <button className="key plus" name='+' onClick={() => handleNumInput(-5) }>+</button>
        <button className="key" name='00' onClick={() => handleNumInput(-6) }>00</button>
      </div>
    </div>
  );
}
 
export default Calculator;