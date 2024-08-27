import React from 'react';
import ReactDOM from 'react-dom';
import Calculadora from './components/Calculadora';

const App = () => {
  return (
    <div className="App">
      <h1>Calculadora</h1>
      <Calculadora />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
