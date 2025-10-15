import { useState  } from 'react';
import commonStyles from '../../Global.module.css';
import styles from './Hero.module.css';
import { registerNewUser, loginUser  } from '../../appwrite.js';

const Hero = () => {
    const [isRegistering, setIsRegistering] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
    });
    
    const { email, password, confirmPassword } = formData;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isRegistering) {
            // Comprobar si ambos passwords son correctos
            if (password != confirmPassword) {
                setErrorMessage('Confirm Password no es igual al Password introducido')
                return
            }
            setErrorMessage('')

            const response = await registerNewUser(formData);
            if (response.success) {
                setIsRegistering(false); // vuelve al modo login
                // TODO: alerta de usuario logueado con éxito
            } else {
                // TODO: alerta de usuario existente
            }
        } else {
            const response = await loginUser(formData);
            if (response.success) {
                window.location.href = '/dashboard'; // redirigir al dashboard
            } else {
                // TODO: Alerta de login incorrecto
            }
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
                                    {errorMessage && (
                                        <div className={commonStyles.alertError}>
                                            {errorMessage}
                                        </div>                                
                                    )}
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
        </div>
    )
}

export default Hero;