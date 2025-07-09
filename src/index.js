import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const FixedCalculator = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const fixed1 = Number(input1).toFixed(2);
  const fixed2 = Number(input2).toFixed(2);
  const sum = Number(fixed1) + Number(fixed2);

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
      <h2>Fixed Precision Calculator</h2>
      <input
        type="number"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
        placeholder="Enter first number"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <input
        type="number"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
        placeholder="Enter second number"
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <p>Rounded Input 1: {fixed1}</p>
      <p>Rounded Input 2: {fixed2}</p>
      <p>Sum: {sum}</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FixedCalculator />
  </React.StrictMode>
);
