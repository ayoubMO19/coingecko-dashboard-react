import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styles from './donutChart.module.css';

const DonutChart = ({title, data}) => {   
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  const chartData = {
    labels: data.names,
    datasets: [
      {
        label: '# of Votes',
        data: data.values,
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

  return (
      <div className={styles.container}>
          <h3>{title}</h3>
          <Doughnut data={chartData}/>
      </div>
  )
}

export default DonutChart;