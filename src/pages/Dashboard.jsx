import { useEffect, useState } from "react";
import { getTopTenCoins } from "../services/api";

function Dashboard() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        getTopTenCoins()
        .then(res => setCoins(res.data.message))
        .catch(error => console.log(error));
    }, []);
    
    return (
        <div style={{ padding: 20}}>
            <h2>Top 10 Coins</h2>
            <ul>
                {coins.map((coin, i) => (
                    <li key={i}>{coin.name} - {coin.symbol}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;