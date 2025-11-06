import styles from './Footer.module.css';
import githubLogo from '../../assets/github-logo.png';
import linkedinLogo from '../../assets/linkedin-logo.png';
const Footer = () => {
  return (
    <footer className={styles.container}>
      <a href="https://github.com/ayoubMO19" target="_blank" rel="noopener noreferrer" className={styles.link}>
        <img src={githubLogo} alt="GitHub" />
        <span>AyoubMO19</span>
      </a>

      <a href="https://www.linkedin.com/in/ayoub-morghi-ouhda/" target="_blank" rel="noopener noreferrer" className={styles.link}>
        <img src={linkedinLogo} alt="LinkedIn" />
        <span>Ayoub Morghi</span>
      </a>
    </footer>
  );
};

export default Footer;
