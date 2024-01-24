import React, { useState } from 'react';

const Calculator = () => {
  const [inputRow, setinputRow] = useState([
    { id: 0, value: 0, sign: '+', enabled: true },
  ] );
  
  const handleEnable = () =>
  {
    
  }
  
  const handleRemove = () =>
  {
    
  }

  const handleAdd = () =>
  {
    
  }

  const handleValue = () =>
  {
    
  };

  const calculateTotal = () =>
  {
    
  };

  const signHandler = () =>
  {
    
  }
return (
  <div>
    <button onClick={handleAdd}>Add Row</button><br></br>
    <select
      value={(0)}
      onChange={(e) => signHandler()}>
      <option value="+">+</option>
      <option value="-">-</option>
    </select>
    <input
      type="number"
      value={(0)}
      onChange={(e) => handleValue()}/>
    <button onClick={() => handleEnable()}>
      
    </button>
    <button onClick={() => handleRemove()}>Remove</button>
    
    <button onClick={handleAdd}>Add Row</button>
    <div>
      <strong>Total:</strong> {calculateTotal()}
    </div>
  </div>
  );
};

export default Calculator;