const VITE_APPWRITE_PROJECT_ID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const VITE_APPWRITE_DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID;

export const registerNewUser = async () => {
    console.log(VITE_APPWRITE_PROJECT_ID, VITE_APPWRITE_DATABASE_ID)
}