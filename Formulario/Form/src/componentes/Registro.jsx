import React, { useState } from 'react';
import '../index.css';

const Registro = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [registroValido, setRegistroValido] = useState(null);

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const validatePassword = (password) => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@#&]).{8,}$/;
        return re.test(password);
    };

    const handleRegistro = (e) => {
        e.preventDefault();
        let tempErrors = {};

        if (!validateEmail(email)) {
            tempErrors.email = 'Email incorrecto';
        }

        if (!validatePassword(password)) {
            tempErrors.password = 'Password debe contener al menos 8 caracteres, una letra mayúscula, una minúscula, un número y uno de los siguientes caracteres: $@#&';
        }

        if (password !== confirmPassword) {
            tempErrors.confirmPassword = 'Passwords no coinciden';
        }

        setErrors(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            setRegistroValido(true);
        } else {
            setRegistroValido(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleRegistro}>
                <div className="form-row">
                    <label>
                        Email:
                        <input 
                            type="text" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                        />
                    </label>
                    <div 
                        className="circle"
                        style={{
                            backgroundColor: registroValido === null ? 'red' : (registroValido ? 'green' : 'red')
                        }}
                    ></div>
                </div>
                {errors.email && <div className="error">{errors.email}</div>}

                <div className="form-row">
                    <label>
                        Password:
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </label>
                    <div 
                        className="circle"
                        style={{
                            backgroundColor: registroValido === null ? 'red' : (registroValido ? 'green' : 'red')
                        }}
                    ></div>
                </div>
                {errors.password && <div className="error">{errors.password}</div>}

                <div className="form-row">
                    <label>
                        Verificación de Password:
                        <input 
                            type="password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                        />
                    </label>
                    <div 
                        className="circle"
                        style={{
                            backgroundColor: registroValido === null ? 'red' : (registroValido ? 'green' : 'red')
                        }}
                    ></div>
                </div>
                {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}

                <button type="submit">Registrar</button>
            </form>
        </div>
    );
};

export default Registro;
