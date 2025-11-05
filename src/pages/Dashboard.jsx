import React, { useEffect } from 'react';
import { account } from '../appwrite';
import { logoutUser } from '../appwrite';
import globalStyles from '../Global.module.css';
import styles from './Dashboard.module.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Card from '../components/dashboard/Card';
import DonutChart from '../components/dashboard/DonutChart';
import AreaChart from '../components/dashboard/AreaChart';

const Dashbaord = () => {
    useEffect(() => {    
        // Verifica si hay sesión activa
        const checkSession = async () => {
        try {
            const session = await account.getSession('current');
            console.log('Usuario logueado:', session);
        } catch {
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
                    <Card title="Market Cap" value="843,1 M$" description="Capital total del mercado" imgUrl="./market-cap-img.jpg" />
                    <Card title="Volumen 24h" value="27,0 M$" description="Volumen de mercado últimas 24h" imgUrl="./volume24h-img.jpg" />
                    <Card title="Bitcoin" value="49,9%" description="Valor total en mercado" imgUrl="./bitcoin-img.jpg" />
                </div>
                <div className={styles.graphsContainer}>
                    <div className={styles.donutGraphContainer}>
                        <DonutChart
                            title="Distribución de Marcket Cap"
                        />
                    </div>
                    <div className={styles.barGraphContainer}>
                        <AreaChart
                            title="Evolución Market Cap"
                            data={[
                                { time: "2025-10-21", value: 24 },
                                { time: "2025-10-22", value: 31 },
                                { time: "2025-10-23", value: 29 },
                                { time: "2025-10-24", value: 33 },
                                { time: "2025-10-25", value: 40 },
                                { time: "2025-10-26", value: 34 },
                                { time: "2025-10-27", value: 45 },
                            ]}
                        />                    
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Dashbaord;