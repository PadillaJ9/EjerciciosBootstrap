import React, { useState } from 'react';
import './calcu.css';

const Display = ({ contenido }) => {
  return <div className="display">{contenido}</div>;
};

const Tecla = ({ valor, pulsar }) => {
  return (
    <button onClick={() => pulsar(valor)}>
      {valor}
    </button>
  );
};

const Calculadora = () => {
  const [display, setDisplay] = useState('0');
  const [valorAnterior, setValorAnterior] = useState(null);
  const [operacion, setOperacion] = useState(null);

  const borrarDisplay = () => {
    setDisplay('0');
    setValorAnterior(null);
    setOperacion(null);
  };

  const pulsar = (x) => {
    if (!isNaN(x) || x === ',') {
      setDisplay(display === '0' ? x.toString() : display + x.toString());
    } else if (['/', '+', '-', '*'].includes(x)) {
      setValorAnterior(parseFloat(display.replace(',', '.')));
      setOperacion(x);
      setDisplay('0');
    } else if (x === '=') {
      calcular();
    } else if (x === 'C') {
      borrarDisplay();
    }
  };

  const calcular = () => {
    if (valorAnterior == null || operacion == null) return;

    let resultado;
    const valorActual = parseFloat(display.replace(',', '.'));

    switch (operacion) {
      case '+':
        resultado = valorAnterior + valorActual;
        break;
      case '-':
        resultado = valorAnterior - valorActual;
        break;
      case '*':
        resultado = valorAnterior * valorActual;
        break;
      case '/':
        resultado = valorAnterior / valorActual;
        break;
      default:
        return;
    }

    setDisplay(resultado.toString().replace('.', ','));
    setValorAnterior(null);
    setOperacion(null);
  };

  return (
    <div className="calculadora">
      <Display contenido={display} />
      <div className="teclado">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', '+', '-', '*', '/', '=', 'C'].map((valor) => (
          <Tecla key={valor} valor={valor} pulsar={pulsar} />
        ))}
      </div>
    </div>
  );
};

export default Calculadora;
