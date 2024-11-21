import React, { useState } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';  // Import necessary charts from react-chartjs-2
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement, ArcElement } from 'chart.js';

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  ArcElement
);

const DataAnalytics = () => {
  // State to keep track of the current chart index
  const [chartIndex, setChartIndex] = useState(0);

  // Static data for the different charts (you can replace this with dynamic data later)
  const chartsData = [
    {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Business Growth (Revenue)',
            data: [30, 45, 35, 60, 75],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Business Revenue Growth Over the Last 5 Months',
          },
        },
        scales: {
          x: { title: { display: true, text: 'Months' } },
          y: { title: { display: true, text: 'Revenue in USD' }, beginAtZero: true },
        },
      },
    },
    {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Customer Acquisition Rate',
            data: [50, 60, 55, 80, 95],
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Customer Acquisition Rate Over the Last 5 Months',
          },
        },
        scales: {
          x: { title: { display: true, text: 'Months' } },
          y: { title: { display: true, text: 'Acquisitions' }, beginAtZero: true },
        },
      },
    },
    {
      type: 'pie',
      data: {
        labels: ['Technology', 'Healthcare', 'Finance', 'Retail'],
        datasets: [
          {
            label: 'Business Distribution by Industry',
            data: [35, 25, 20, 20],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Business Distribution by Industry',
          },
        },
      },
    },
  ];

  // Handle the button click to go to the next chart
  const handleNextChart = () => {
    setChartIndex((prevIndex) => (prevIndex + 1) % chartsData.length);
  };

  const { type, data, options } = chartsData[chartIndex];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Data and Analytics</h1>
      <p>View detailed data analytics for your platform.</p>
      
      <div className="mt-6">
        {/* Render the appropriate chart based on the current chart index */}
        {type === 'bar' && <Bar data={data} options={options} />}
        {type === 'line' && <Line data={data} options={options} />}
        {type === 'pie' && <Pie data={data} options={options} />}
      </div>
      
      {/* Button to navigate to the next chart */}
      <div className="mt-6">
        <button
          onClick={handleNextChart}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next Graph
        </button>
      </div>
      
      {/* Insights section */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Insights</h3>
        <ul>
          <li>Each chart provides a different aspect of business performance, from revenue growth to industry distribution.</li>
          <li>The Bar chart tracks revenue over the last 5 months, showing growth trends.</li>
          <li>The Line chart tracks customer acquisition rates, highlighting periods of growth.</li>
          <li>The Pie chart provides insights into the business’s distribution across industries, helping with resource allocation.</li>
        </ul>
      </div>
    </div>
  );
};

export default DataAnalytics;
