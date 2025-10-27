import React, { useEffect } from 'react';
import { account } from '../appwrite';
import { logoutUser } from '../appwrite';
import globalStyles from '../Global.module.css';
import styles from './Dashboard.module.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Card from '../components/dashboard/Card';
import DonutChart from '../components/dashboard/DonutChart';

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
            <div className={styles.container}>
                <div className={styles.cardsContainer}>
                    <Card title="Criptomonedas" value="1,243" description="Cantidad total de criptomonedas" imgUrl="./crypto-coins-img.jpg" />
                    <Card title="Market Cap" value="8,431€" description="Capital total del mercado" imgUrl="./market-cap-img.jpg" />
                    <Card title="Volumen 24h" value="27" description="Volumen de mercado últimas 24h" imgUrl="./volume24h-img.jpg" />
                    <Card title="Bitcoin" value="27" description="Valor total en mercado" imgUrl="./bitcoin-img.jpg" />
                </div>
                <div className={styles.graphsContainer}>
                    <div className={styles.donutGraphContainer}>
                        <DonutChart />
                    </div>
                    <div className={styles.donutGraphContainer}>
                        <p>Graph 2</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Dashbaord;