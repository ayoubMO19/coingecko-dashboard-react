import React, { useEffect } from 'react';
import { account } from '../appwrite';
import { logoutUser } from '../appwrite';

const Dashbaord = () => {
    useEffect(() => {
        // Verifica si hay sesión activa
        const checkSession = async () => {
        try {
            const session = await account.getSession('current');
            console.log('Usuario logueado:', session);
        } catch (err) {
            console.log('No hay sesión, redirigiendo...');
            window.location.href = '/';
        }
        };

        checkSession();
    }, []);

    
    return (
        <div>
            <h1>Dashboard de VEXA</h1>
            <button onClick={logoutUser}>Logout</button>
        </div>
    )
};

export default Dashbaord;