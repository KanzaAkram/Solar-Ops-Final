// src/scenes/EnergyConsumption.jsx

import React from 'react';
import { Grid, Card, CardContent, Typography, Divider, Box } from '@mui/material';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const EnergyConsumption = () => {
  // Dummy data for charts
  const barData = {
    labels: ['Electricity', 'Gas', 'Water', 'Renewables'],
    datasets: [
      {
        label: 'Energy Consumption (in kWh)',
        data: [1200, 800, 500, 300],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieData = {
    labels: ['Electricity', 'Gas', 'Water', 'Renewables'],
    datasets: [
      {
        label: 'Energy Distribution',
        data: [1200, 800, 500, 300],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 1,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,  // Allow the chart to occupy the entire card
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw} kWh`,
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Energy Source',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Consumption (kWh)',
        },
        beginAtZero: true,
      },
    },
  };

  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,  // Allow the chart to occupy the entire card
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw} kWh`,
        },
      },
    },
  };

  return (
    <Grid container spacing={3} style={{ padding: '20px' }}>
      <Grid item xs={12} md={6}>
        <Card style={{ height: '100%' }}>  {/* Ensure the card takes full height */}
          <CardContent style={{ height: '100%' }}>  {/* Ensure the content fills the card */}
            <Typography variant="h5" component="div">
              Energy Consumption Overview
            </Typography>
            <Divider style={{ margin: '10px 0' }} />
            <div style={{ height: '300px' }}>  {/* Set fixed height for chart */}
              <Bar data={barData} options={barOptions} height={null} /> {/* height={null} to allow scaling */}
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card style={{ height: '100%' }}>
          <CardContent style={{ height: '100%' }}>
            <Typography variant="h5" component="div">
              Energy Distribution
            </Typography>
            <Divider style={{ margin: '10px 0' }} />
            <div style={{ height: '300px' }}>
              <Pie data={pieData} options={pieOptions} height={null} />
            </div>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography 
              variant="h5" 
              component="div"
              sx={{
                backgroundColor: '#e56732',
                padding: '10px',
                borderRadius: '4px',
                color: '#333'
              }}
            >
              Summary
            </Typography>
            <Divider style={{ margin: '10px 0' }} />
            <Box>
              <Typography variant="body1">
                <strong>Total Electricity Consumption:</strong> 1200 kWh
              </Typography>
              <Typography variant="body1">
                <strong>Total Gas Consumption:</strong> 800 kWh
              </Typography>
              <Typography variant="body1">
                <strong>Total Water Consumption:</strong> 500 kWh
              </Typography>
              <Typography variant="body1">
                <strong>Total Renewables Consumption:</strong> 300 kWh
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default EnergyConsumption;
