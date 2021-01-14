const Calculator = () => {
  return (
    <div className="calculator">
      <div className="display">8000</div>
      <div className="keypad">
        <button className="key" name='1'>1</button>
        <button className="key" name='2'>2</button>
        <button className="key" name='3'>3</button>
        <button className="key" name='C'>C</button>
        <button className="key" name='4'>4</button>
        <button className="key" name='5'>5</button>
        <button className="key" name='6'>6</button>
        <button className="key" name='half'>&frac12;</button>
        <button className="key" name='7'>7</button>
        <button className="key" name='8'>8</button>
        <button className="key" name='9'>9</button>
        <button className="key thousend" name='1000'>1000</button>
        <button className="key minus" name='-'>-</button>
        <button className="key" name='0'>0</button>
        <button className="key plus" name='+'>+</button>
        <button className="key" name='00'>00</button>
      </div>
    </div>
  );
}
 
export default Calculator;