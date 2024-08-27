import React from 'react';
import Login from './componentes/Login';
import Registro from './componentes/Registro';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Login Form</h1>
                <Login nombre_correcto="javier" password_correcto="padilla" />
            </header>
        </div>
    );
}

export default App;
