// App.js
import React from 'react';
import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Buttons from './components/Buttons';

function App() {
  const [operation, setOperation] = useState('');

  const handleOperationClick = (e) => {
    const value = e.target.innerText;
    if (['+', '-', '*', '/'].includes(operation.slice(-1)) && ['+', '-', '*', '/'].includes(value)) {
      setOperation(operation.slice(0, -1) + value);
    } else {
      setOperation(operation + value);
    }
  };

  const handleEqualClick = () => {
    if (operation === '' || ['+', '-', '*', '/'].includes(operation.slice(-1))) {
      setOperation('');
      return;
    }

    let result = eval(operation);
    result = Number.isFinite(result) ? result.toString() : 'Error';

    setOperation(result);
  };

  const handleACClick = () => {
    setOperation('');
  };

  const handleDelClick = () => {
    setOperation(operation.slice(0, -1));
  };

  return (
    <div className="App">
      <Display operation={operation} />
      <Buttons
        onACClick={handleACClick}
        onDelClick={handleDelClick}
        onOperationClick={handleOperationClick}
        onEqualClick={handleEqualClick}
      />
    </div>
  );
}

export default App;
