import React, { useEffect } from 'react';
import { account } from '../appwrite';
import { logoutUser } from '../appwrite';
import globalStyles from '../Global.module.css';
import styles from './Dashboard.module.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Card from '../components/dashboard/Card';

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
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.cardsContainer}>
                <Card title="Usuarios" value="1,243" description="Usuarios activos" />
                <Card title="Ventas" value="8,431€" description="Ingresos mensuales" />
                <Card title="Proyectos" value="27" description="En desarrollo" />
                <Card title="Proyectos" value="27" description="En desarrollo" />
            </div>
            <Footer />
        </div>
    )
};

export default Dashbaord;