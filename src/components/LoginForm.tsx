import React from 'react';
import './LoginForm.css';

const LoginForm: React.FC = () => {
    return (
        <div id="container">
            {/* Imagen del Logo */}
            <img src="/assets/logos/logo-company.svg" alt="Logo" className="logo-img" />

            {/* Mensaje de Bienvenida */}
            <strong>Diseñado para conquistarte</strong>

            {/* Formulario de Inicio de Sesión */}
            <form action="" className='auth-form'>
                <div className='input-box'>
                    <input type="email" required placeholder='' />
                    <label className='email-label'>Email</label>
                    <i className="fa-regular fa-user"></i>
                </div>

                <div className='input-box'>
                    <input type="password" required placeholder='' />
                    <label className='pass-label'>Contraseña</label>
                    <i className="fa fa-lock"></i>
                </div>

                <button className='btn' type='submit'>Iniciar Sesión</button>
                <button className='btn' type='button'>Registrarse</button>
            </form>
        </div>
    );
};

export default LoginForm;