import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.githubContainer}>
                <h1>
                    <a href="https://github.com/ayoubMO19">
                        <img src="./github-logo.png"></img>
                        <span>AyoubMO19</span>
                    </a>
                </h1>
            </div>
            <div><h1>|</h1></div>
            <div className={styles.linkedinContainer}>    
                <h1>
                    <a href="https://www.linkedin.com/in/ayoub-morghi-ouhda/">
                        <img src="./linkedin-logo.png"></img>
                        <span>Ayoub Morghi Ouhda</span>
                    </a>
                </h1>
            </div>
        </div>
    )
}

export default Footer;