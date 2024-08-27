import React, { useState } from 'react';

const Login = ({ nombre_correcto, password_correcto }) => {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    const [loginValido, setLoginValido] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        if (nombre === nombre_correcto && password === password_correcto) {
            setLoginValido(true);
        } else {
            setLoginValido(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label>
                        Nombre:
                        <input 
                            type="text" 
                            value={nombre} 
                            onChange={(e) => setNombre(e.target.value)} 
                        />
                    </label>
                    <div 
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: loginValido === null ? 'red' : (loginValido ? 'green' : 'red'),
                            marginLeft: '10px'
                        }}
                    ></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <label>
                        Password:
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </label>
                    <div 
                        style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: loginValido === null ? 'red' : (loginValido ? 'green' : 'red'),
                            marginLeft: '10px'
                        }}
                    ></div>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
