import styles from './Hero.module.css';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className ={styles.subContainer}>
                <div className={styles.titleContainer}>
                    <h1>DASHBOARD ACCESS</h1>
                </div>
                <div className={styles.accessContainer}>
                    <h1>Welcome to VEXA</h1>
                    <input placeholder='Username' type="text"></input>
                    <input placeholder='Password' type='password'></input>
                    <div>
                        <span>Don't have an account ? <a>Sign Up</a></span>
                        <button>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;