import { Client, Account, ID } from 'appwrite';
const PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const ENDPOINT = 'https://cloud.appwrite.io/v1'

const client = new Client()
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

const account = new Account(client);

// Función para registrar nuevo usuario
export const registerNewUser = async ({email, password, username}) => {
    try {
        const user = await account.create(ID.unique(), email, password, username);
        return { success: true, user };
    } catch(error) {
        console.error(error);
        return { success: false, error };
    }
};

// Función para hacer login
export const loginUser = async ({email, password}) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return { success: true, session };
    } catch(error) {
        return { success: false, error }
    }
};

// Función para obtener usuario actual
export const getCurrentUser = async () => {
    try {
        const user = await account.get();
        return { success: true, user };
    } catch(error) {
        return { success: false, user: null };
    }
};

// Función para hacer logout
export const logoutUser = async () => {
    try {
        await account.deleteSession('current');
        return { success: true };

    } catch(error) {
        return { success: false, error }
    }
};

export { client, account }