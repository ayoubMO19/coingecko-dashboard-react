import { useState } from "react";
import { login } from "../services/api";

function LoginPage() {
    const [username, setUsername] = useState();
    const [password, setPassword] =useState();


      const handleLogin = async () => {
        try {
        const res = await login(username, password); 
        localStorage.setItem("token", res.data.token);
        window.location.href = "/dashboard";
        } catch (error) {
        alert("Error en login");
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="bg-gray-50 p-8 rounded-lg shadow-[0px_0px_10px_rgba(0,0,0,0.3)] w-full max-w-md">
                <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
                <input
                type="text"
                placeholder="Usuario"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full mb-6 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                className="shadow-[0px_0px_10px_7px_rgba(57,255,20,0.3)] bg-[#39FF14] hover:bg-[#95FF82] text-black font-semibold py-2 px-6 rounded float-right transition"
                onClick={handleLogin}
                >
                Entrar
                </button>
            </div>
        </div>

    );
}

export default LoginPage;
