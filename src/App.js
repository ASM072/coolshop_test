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
    setinputRow((previnputRow) => [
      ...previnputRow,
      { id: previnputRow.length, value: 0, sign: '+', enabled: true },
    ]);
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
    { inputRow.map( ( row ) => (
      <div key={row.id}>
        <select
          value={(0)}
          onChange={(e) => signHandler()}>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <input
          type="number"
          value={(row.value)}
          onChange={(e) => handleValue()}/>
        <button onClick={() => handleEnable()}>
          Disable
        </button>
        <button onClick={() => handleRemove()}>Remove</button>
        </div>
      ))}
      <div>
        <strong>Total:</strong> {calculateTotal()}
      </div>
  </div>
  );
};

export default Calculator;