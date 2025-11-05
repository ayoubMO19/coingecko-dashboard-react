import { getGlobalInfo, getTopTenCoins, getCoinDetails } from './api';

export async function processGetGlobalInfo() {
    try {
        const response = await getGlobalInfo();
        
        if (response.data) {
            return { success: true, data: response.data };
        }
        
        return { success: false, error: "No data received" };
    } catch (error) {
        // Manejo específico de errores de login
        if (error.response?.status === 401) {
            return { success: false, error: "Usuario no logueado" };
        }
        return { success: false, error: "Error de conexión" };
    }
}

export async function processGetTopTenCoins() {
    try {
        const response = await getTopTenCoins();
        
        if (response.data) {
            return { success: true, data: response.data };
        }
        
        return { success: false, error: "No data received" };
    } catch (error) {
        // Manejo específico de errores de login
        if (error.response?.status === 401) {
            return { success: false, error: "Usuario no logueado" };
        }
        return { success: false, error: "Error de conexión" };
    }
}

export async function processGetCoinDetails() {
    try {
        const response = await getCoinDetails();
        
        if (response.data) {
            return { success: true, data: response.data };
        }
        
        return { success: false, error: "No data received" };
    } catch (error) {
        // Manejo específico de errores de login
        if (error.response?.status === 401) {
            return { success: false, error: "Usuario no logueado" };
        }
        return { success: false, error: "Error de conexión" };
    }
}