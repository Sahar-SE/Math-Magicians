import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './Component/Calculator';

function App() {
  return <Calculator />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
