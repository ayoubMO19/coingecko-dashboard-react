import { React } from 'react';
import styles from './Card.module.css'

const Card = ({title, value, description}) => {
    
    return (
        <div className={styles.card}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.value}>{value}</p>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default Card;