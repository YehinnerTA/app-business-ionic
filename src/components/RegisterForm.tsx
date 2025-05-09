import React from 'react';
import { useHistory } from 'react-router';
import './LoginForm.css';
import './RegisterForm.css'

const RegisterForm: React.FC = () => {
    // Redireccionar -> Login
    const history = useHistory();

    const handleLogin = () => {
        history.push('/login');
    };

    return (
        <div id="container" className="container-bg">
            {/* Imagen del Logo */}
            <img src="/assets/logos/logo-company.svg" alt="Logo" className="logo-img log-reg" />

            {/* Mensaje de Bienvenida */}
            <strong>Diseñado para conquistarte</strong>

            {/* Formulario de Registro */}
            <form action="" className='auth-form'>
                <div className='input-box'>
                    <input type="text" required placeholder='' />
                    <label className='nam-ape-label'>Nombre completo</label>
                    <i className="fa-regular fa-user"></i>
                </div>

                <div className='input-box'>
                    <input type="email" required placeholder='' />
                    <label className='email-label'>Email</label>
                    <i className="fa-regular fa-envelope"></i>
                </div>

                <div className='input-box'>
                    <input type="password" required placeholder='' />
                    <label className='pass-label'>Contraseña</label>
                    <i className="fa fa-lock"></i>
                </div>

                <div className='input-box'>
                    <input type="password" required placeholder='' />
                    <label className='cpass-label'>Confirmar contraseña</label>
                    <i className="fa fa-lock"></i>
                </div>

                <button className='btn' type='submit'>Registrarse</button>
                <button className='btn' type='button' onClick={handleLogin}>Volver al Login</button>
            </form>
        </div>
    );
};

export default RegisterForm;