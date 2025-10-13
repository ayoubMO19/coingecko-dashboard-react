import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className ={styles.subContainer}>
                <div className={styles.titleContainer}>
                    <h1>Welcome to <strong>VEXA</strong></h1>
                    <h2>Dashboard access</h2>
                    <p>Accede a un dashboard exclusivo con información en tiempo real del mercado de criptomonedas. Consulta porcentajes de variación, gráficos interactivos y datos clave que te permitirán seguir las tendencias más importantes del sector. 
                    <br/><br/> 
                    Descubre análisis detallados y herramientas que te ayudarán a interpretar el comportamiento del mercado de forma más precisa. ¡Ingresa ahora y aprovecha todo el potencial que nuestro panel pone a tu alcance!</p>
                </div>
                <div className={styles.accessContainer}>
                    <div className={styles.accessTitle}>
                        <h1>User Login</h1>
                    </div>
                    <div className={styles.accessInputs}>
                        <div className={styles.accessInput}>
                            <span>Username</span>
                            <input placeholder='Input your Username' type="text"></input>
                        </div>
                        <div className={styles.accessInput}>
                            <span>Password</span>
                            <input placeholder='Input your Password' type='password'></input>
                        </div>
                    </div>
                    <div className={styles.accessButton}>
                        <span>Don't have an account? <a href='https://www.youtube.com/'>Sign Up</a></span>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;