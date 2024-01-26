import React, { useState } from 'react';
import { evaluate } from 'mathjs';
import '../Styles/styles.scss'


const Calculator = () => {
  const [inputRow, setinputRow] = useState([
    { id: 0, value: 0, sign: '+', enabled: true },
  ] );
  
  //Enable and Disable State Handler 
  const handleEnable = (id, ) =>
  {
    setinputRow((previnputRow) =>
      previnputRow.map((row) => (row.id === id ? { ...row, enabled: !row.enabled } : row))
    );
  }
  
  //Remove row state handler
  const handleRemove = (id) =>
  {
    setinputRow((previnputRow) => previnputRow.filter((row) => row.id !== id));

  }

  //Add row state handler
  const handleAdd = () =>
  {
    setinputRow((previnputRow) => [
      ...previnputRow,
      { id: previnputRow.length, value: 0, sign: '+', enabled: true },
    ]);
  }

  //input value state handler
  const handleValue = (id, value) =>
  {
    setinputRow((previnputRow) =>
      previnputRow.map((row) => (row.id === id ? { ...row, value } : row))
    );
  };

  //calculate total
  const calculateTotal = () =>
  {
    const enabledRow = inputRow.filter((row) => row.enabled);
    const addition = enabledRow
      .map((row) => `${row.sign}${row.value}`)
      .join('');
    return evaluate(addition);
  };

  //sign state handler
  const signHandler = (id, sign) =>
  {
    setinputRow((previnputRow) =>
      previnputRow.map((row) => (row.id === id ? { ...row, sign } : row))
    );
  }


return (
  <div className="calculator" >
    <h1>CoolShop Test</h1>
  <button onClick={handleAdd}>Add Row</button><br></br>
    { inputRow.map( ( row ) => (
      <div key={row.id}>
        <select
          value={(row.sign)}
          onChange={(e) => signHandler(row.id, e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
        </select>
        <input
          type="number"
          value={(row.value)}
          onChange={ ( e ) => handleValue( row.id, e.target.value ) }
          disabled={!row.enabled}
        />
        <button onClick={() => handleEnable(row.id)}>
          {row.enabled?'Disable':'Enable'}
        </button>
        <button onClick={() => handleRemove(row.id)}>Remove</button>
        </div>
      ))}<br></br>
      <div>
        <strong>Total:</strong> {calculateTotal()}
      </div>
  </div>
  );
};

export default Calculator;