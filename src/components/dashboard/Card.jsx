import { React } from 'react';
import styles from './Card.module.css'

const Card = ({title, value, description}) => {
    
    return (
        <div className={styles.card}>
            <p className={styles.title}>{title}</p>
            <p className={styles.value}>{value}</p>
        </div>
    )
}

export default Card;