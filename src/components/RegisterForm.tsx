import React from 'react';
import './LoginForm.css';
import './RegisterForm.css'

const RegisterForm: React.FC = () => {
    return (
        <div id="container">
            {/* Imagen del Logo */}
            <img src="/assets/logos/logo-company.svg" alt="Logo" className="logo-img" />

            {/* Mensaje de Bienvenida */}
            <strong>¡Crea tu cuenta ahora!</strong>

            {/* Formulario de Registro */}
            <form action="" className='auth-form'>
                <div className='input-box'>
                    <input type="text" required placeholder='' />
                    <label className='email-label'>Nombre completo</label>
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
                    <label className='pass-label'>Confirmar contraseña</label>
                    <i className="fa fa-lock"></i>
                </div>

                <button className='btn' type='submit'>Registrarse</button>
                <button className='btn' type='button'>Volver al Login</button>
            </form>
        </div>
    );
};

export default RegisterForm;