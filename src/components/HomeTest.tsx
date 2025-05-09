import React from 'react';
import { useHistory } from 'react-router';
import { signOut } from 'firebase/auth';
import { app_auth } from '../firebaseConfig';
import './HomeTest.css';

const HomeTest: React.FC = () => {

    const history = useHistory();

    const handleLogout = async () => {
        try {
            await signOut(app_auth);
            history.push('/login');
        } catch (err) {
            console.error("ERROR AL CERRAR SESIÓN ", err);
        }
    };

    return (
        <div className="home-container">
            <h1>¡Bienvenido a la página de inicio!</h1>
            <p>Hola, usuario. ¡Estamos felices de tenerte con nosotros!</p>
            <button className='btn-Home' onChange={handleLogout}>Cerrar Sesión</button>
        </div>
    );
};

export default HomeTest;