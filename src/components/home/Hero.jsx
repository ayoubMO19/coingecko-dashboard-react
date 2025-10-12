import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title} >VEXA DASHBOARD</h1>
            <div className={styles.buttonsCointainer}>
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Hero;