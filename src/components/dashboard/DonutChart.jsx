import React, {useEffect} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './donutChart.module.css';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2],
      backgroundColor: [
        '#25E678',
        '#1AB25A',
        '#0A9252',
        '#00683D',
        '#005331ff',
      ],
      borderWidth: 1,
    },
  ],
};

const donutChart = ({}) => {
    useEffect(() => {
        // Preparar la grafica y Cargar datos
    }, []);
    
    return (
        <div className={styles.container}>
            <h3>Distribución de Marcket Cap</h3>
            <Doughnut data={data}/>
        </div>
    )
}

export default donutChart;