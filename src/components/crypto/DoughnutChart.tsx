import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import useCryptoData from '../../hooks/useCryptoData';
import {Chart, ArcElement} from 'chart.js'
Chart.register(ArcElement);

const DoughnutChart = () => {
  const cryptoData = useCryptoData();

  const data = {
    labels: cryptoData ? Object.keys(cryptoData) : [],
    datasets: [
      {
        data: cryptoData ? Object.values(cryptoData).map((item) => (item as { usd: number }).usd) : [],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56'],
      },
    ],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
