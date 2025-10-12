import React from 'react';
import styles from './Header.module.css';
const Header = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.logo}>VEXA</h1>
        </div>
    )
}

export default Header;