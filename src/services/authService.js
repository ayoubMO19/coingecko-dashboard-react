import { login } from './api';

export async function processLogin(username, password) {
    try {
        const response = await login(username, password);
        
        if (response.data.token) {
            localStorage.setItem("token", response.data.token);
            return { success: true, data: response.data };
        }
        
        return { success: false, error: "No token received" };
    } catch (error) {
        // Manejo específico de errores de login
        if (error.response?.status === 401) {
        return { success: false, error: "Credenciales inválidas" };
        }
        return { success: false, error: "Error de conexión" };
    }
}

export async function processLogout() {
    localStorage.removeItem("token");
}