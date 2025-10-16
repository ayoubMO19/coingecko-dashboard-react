import { useState } from 'react';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import commonStyles from '../../Global.module.css';
import styles from './Hero.module.css';
import { registerNewUser, loginUser, getCurrentUser } from '../../appwrite.js';

const Hero = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
    });

    // Mensajes de alertas
    const notify = async (type, message) => {
        const config = {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        }

        if (type === 'error') toast.error(message, config);
        if (type === 'success') toast.success(message, config);
    }


    const { email, password, confirmPassword } = formData;

    // Procesar submit de formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Flujo de registro
        if (isRegistering) {
            // si confirm password no es igual a password se notifica y termian el proceso
            if (password != confirmPassword) {
                notify('error', 'Confirm Password no es igual a Password. Compruebe los datos porfavor.');
                return
            }

            // Registramos el nuevo usaurio
            const response = await registerNewUser(formData);
            if (response.success) {
                setIsRegistering(false); // vuelve al modo login
                // alerta de usuario logueado con éxito
                await notify('success', 'Usuario registrado con éxito. Ya puede loguearse.');
            } else {
                // alerta de usuario existente
                await notify('error', 'El usuario ya existe. Utilice otro correo o utilice el formulario de Login.');
            }
        // Flujo de login
        } else {
            const response = await loginUser(formData);

            if (response.success) {
                // alerta de usuario logueado con éxito
                await notify('success', 'Usuario logueado con éxito.');
                // redirigir al dashboard
                setTimeout(() => { window.location.href = '/dashboard' }, 800);
            }
            
            if (response?.error?.code === 401) {
                const result = await getCurrentUser();

                if (result.success) {
                    await notify('success', 'Usuario logueado con éxito.');
                    // redirigir al dashboard
                    setTimeout(() => { window.location.href = '/dashboard' }, 800);
                    return;
                }
            }

            // Alerta de login incorrecto
            await notify('error', 'Email o Password incorrectos. Inténtelo de nuevo.');
        }
    };

    const cleanInputs = () => {
        setFormData({
            email: '',
            password: '',
            confirmPassword: ''
        });
    }

    return (
        <div className={styles.container}>
            <div className ={styles.subContainer}>
                <div className={styles.titleContainer}>
                    <h1>Welcome to <strong>VEXA</strong></h1>
                    <h2>{isRegistering ? 'Create an account' : 'Dashboard access'}</h2>
                    <p>
                        {
                            isRegistering
                            ? <>Crea tu cuenta para acceder a herramientas exclusivas y un dashboard personalizado.</>
                            : (
                                <>
                                    Accede a un dashboard exclusivo con información en tiempo real del mercado de criptomonedas. Consulta porcentajes de variación, gráficos interactivos y datos clave que te permitirán seguir las tendencias más importantes del sector.<br /><br />
                                    Descubre análisis detallados y herramientas que te ayudarán a interpretar el comportamiento del mercado de forma más precisa. ¡Ingresa ahora y aprovecha todo el potencial que nuestro panel pone a tu alcance!
                                </>
                            )
                        }
                    </p>
             </div>
                <div className={styles.accessContainer}>
                    <div className={styles.accessTitle}>
                        <h1>{isRegistering ? 'User Register' : 'User Login'}</h1>
                    </div>
                    <form className={styles.accessForm} onSubmit={handleSubmit}>
                        <div className={styles.accessInputs}>                        
                            <div className={styles.accessInput}>
                                <span>Email</span>
                                <input
                                    value={email}
                                    onChange={(e) =>
                                    setFormData({ ...formData, email: e.target.value })
                                    }
                                    placeholder="Input your Email"
                                    type="email"
                                    required
                                />
                            </div>                        
                            <div className={styles.accessInput}>
                                <span>Password</span>
                                <input
                                    value={password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    placeholder='Input your Password'
                                    type='password' 
                                    required
                                />
                            </div> 
                            {isRegistering && (
                                <div className={styles.accessInput}>
                                    <span>Confirm Password</span>
                                    <input
                                        value={confirmPassword}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                confirmPassword: e.target.value
                                            })
                                        }
                                        placeholder="Confirm your Password"
                                        type="password"
                                        required
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.accessButton}>
                            <span>
                                {isRegistering ? (
                                <>
                                    Already have an account?{' '}
                                    <a
                                    href="#"
                                    onClick={() => {
                                        cleanInputs();
                                        setIsRegistering(false);
                                    }}
                                    >
                                    Login
                                    </a>
                                </>
                                ) : (
                                <>
                                    Don't have an account?{' '}
                                    <a
                                    href="#"
                                    onClick={() => {
                                        cleanInputs();
                                        setIsRegistering(true);
                                    }}
                                    >
                                    Sign Up
                                    </a>
                                </>
                                )}
                            </span>
                            <button type="submit">
                                {isRegistering ? 'Register' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Hero;