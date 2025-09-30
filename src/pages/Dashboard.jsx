import { useEffect, useState } from "react";
import { getGlobalInfo, getTopTenCoins, getCoinDetails } from "../services/api";
import marketCapImg from '../assets/market_cap_img.jpg';
import volume24hImg from '../assets/volume24h-img.jpg';
import cryptoCoinsImg from '../assets/crypto-coins-img.jpg'
import header from '../components/header';
import card from '../components/card'; // Asegúrate de que la ruta sea correcta

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [global, setGlobal] = useState(null); // Global info puede no ser array, mejor usar null o {}
  const [coinIdInput, setCoinIdInput] = useState(""); // Estado para input coinId
  const [coinDetails, setCoinDetails] = useState(null); // Estado para detalles de una moneda

  useEffect(() => {
    getTopTenCoins()
      .then(res => setCoins(res.data.message))
      .catch(error => console.log(error));
    getGlobalInfo()
      .then(res => setGlobal(res.data.message))
      .catch(error => console.log(error));
  }, []);

  // Función que maneja la búsqueda y obtiene detalles asincrónicamente
  async function setDetails() {
    try {
      const res = await getCoinDetails(coinIdInput);
      setCoinDetails(res.data.message);
    } catch (error) {
      console.log(error);
      setCoinDetails(null);
    }
  }

  return (
    <div style={{ padding: 20, border: "solid black" }}>
        {header()}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", border: " green", padding: 20}}>
          {card({title: 'Market Cap Total (USD)', data: `${global.data.total_market_cap.usd} USD`, image: marketCapImg})}
          {card({title: 'Volumen 24h (USD)', data: `${global.data.total_volume.usd} USD`, image: volume24hImg})}
          {card({title: 'Nº de Criptomonedas Activas', data: `${global.data.active_cryptocurrencies}`, image: cryptoCoinsImg})}
          {card({title: '% Dominancia BTC', data: `${global.data.market_cap_percentage.btc}`, image: 'https://img.freepik.com/vector-gratis/fondo-moneda-oro-bitcoin-criptomoneda_1017-31505.jpg'})}
        </div>
      <div style={{ padding: 20, border: "solid blue" }}>
        <h2>Global info</h2>
        <pre>{global ? JSON.stringify(global, null, 2) : "Cargando..."}</pre>
      </div>
      <div style={{ padding: 20, border: "solid red" }}>
        <h2>Top 10 Coins</h2>
        <ul>
          {coins.map((coin, i) => (
            <li key={"coin-" + i}>
              {coin.name} - {coin.symbol}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ padding: 20, border: "solid blue" }}>
        <h2>Coin Details</h2>
        <input
          style={{ border: "solid black" }}
          placeholder="Introduzca el coinId"
          value={coinIdInput}
          onChange={(e) => setCoinIdInput(e.target.value)}
        />
        <button
          className="shadow-[0px_0px_10px_7px_rgba(57,255,20,0.3)] bg-[#39FF14] hover:bg-[#95FF82] text-black font-semibold py-2 px-6 rounded float-right transition"
          onClick={setDetails}
        >
          Search
        </button>

        {coinDetails ? (
          <pre>{JSON.stringify(coinDetails, null, 2)}</pre>
        ) : (
          <p>No hay detalles para mostrar</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
