import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../appwrite';
import { logoutUser } from '../appwrite';
import { processLogin } from '../services/authService';
import { processGetGlobalInfo, processGetTopTenCoins } from '../services/coinService';
import { formatNumber } from '../utils/formatters';
import styles from './Dashboard.module.css';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Card from '../components/dashboard/Card';
import DonutChart from '../components/dashboard/DonutChart';
import AreaChart from '../components/dashboard/AreaChart';

const VEXA_USERNAME = 'VEXA' 
const VEXA_PASSWORD = '1234'

const Dashbaord = () => {
    const navigate = useNavigate();
    const [criptoCoins, setCriptoCoins] = useState("-");
    const [marketCap, setMarketCap] = useState("-");
    const [volume24h, setVolume24h] = useState("-");
    const [marketCapBTC, setMarketCapBTC] = useState("-");
    const [topCoins, setTopCoins] = useState({names: ["-", "-", "-", "-", "-"], values: [10, 10, 10, 10, 10]});

    useEffect(() => {    
        // Verifica si hay sesión activa
        const checkSession = async () => {
            try {
                await account.getSession('current');
                // Loguearse en vexa api y obtener datos
                const response = await processLogin(VEXA_USERNAME, VEXA_PASSWORD);
                if (response.success) {
                    await processCardsInfo(); // Obtenemos datos globales para Cards
                    await processDountChartInfo(); // Obtenemos datos de coins para grafica donut
                } else {
                    // TODO: Mostrar pop-up de mantenimiento
                    console.log(response)
                }
            } catch {
                console.log('No hay sesión, redirigiendo...');
                setTimeout(() => {
                    navigate('/', { replace: true });
                }, 800);
            }
        };
        checkSession();
    }, []);

    const processCardsInfo = async () => {
        const globalInfo = await processGetGlobalInfo();
        if (globalInfo.success) {
            const globalData = globalInfo.data.message.data;
            // Asignar la info a las variables necesarias
            setCriptoCoins(formatNumber.withCommas(globalData.active_cryptocurrencies));
            setMarketCap(formatNumber.marketCap(globalData.total_market_cap?.usd));
            setVolume24h(formatNumber.marketCap(globalData.total_volume?.usd));
            setMarketCapBTC(formatNumber.percentage(globalData.market_cap_percentage?.btc));
        }
    }

    const processDountChartInfo = async () => {
        const topTenCoins = await processGetTopTenCoins();
        if (topTenCoins.success) {
            const formattedData = {names: [], values: []};
            let coinsData = topTenCoins.data.message;
            // Recortamos el array obteniendo solo las primeras 5
            coinsData = coinsData.slice(0, 5);
            // Recorremos el array de coins para obtenerlas y formatearlas en formattedData
            coinsData.forEach(coinData => {
                formattedData.names.push(coinData.name)
                formattedData.values.push(coinData.market_cap)
            });

            setTopCoins(formattedData); // Asignamos el array de coins formateado correctamente
        }
    }

    return (
        <div className={styles.dashboard}>
            <Header />
            <div className={styles.container}>
                <div className={styles.cardsContainer}>
                    <Card title="Criptomonedas" value={criptoCoins} description="Cantidad total de criptomonedas" imgUrl="./crypto-coins-img.jpg" />
                    <Card title="Market Cap" value={marketCap} description="Capital total del mercado" imgUrl="./market-cap-img.jpg" />
                    <Card title="Volumen 24h" value={volume24h} description="Volumen de mercado últimas 24h" imgUrl="./volume24h-img.jpg" />
                    <Card title="Bitcoin" value={marketCapBTC} description="Valor total en mercado" imgUrl="./bitcoin-img.jpg" />
                </div>
                <div className={styles.graphsContainer}>
                    <div className={styles.donutGraphContainer}>
                        <DonutChart
                            title="Distribución de Marcket Cap"
                            data={topCoins}
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