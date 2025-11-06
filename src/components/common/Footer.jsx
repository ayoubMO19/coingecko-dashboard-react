import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <a href="https://github.com/ayoubMO19" target="_blank" rel="noopener noreferrer" className={styles.link}>
        <img src="/github-logo.png" alt="GitHub" />
        <span>AyoubMO19</span>
      </a>

      <a href="https://www.linkedin.com/in/ayoub-morghi-ouhda/" target="_blank" rel="noopener noreferrer" className={styles.link}>
        <img src="/linkedin-logo.png" alt="LinkedIn" />
        <span>Ayoub Morghi</span>
      </a>
    </footer>
  );
};

export default Footer;
