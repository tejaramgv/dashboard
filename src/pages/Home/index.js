import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PublishIcon from '@mui/icons-material/Publish';
import { users, posts } from '../../data/dummyData';
import './home.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Home = () => {
  const totalUsers = users.length;
  const totalPosts = posts.length;

  const usersActiveLast24Hrs = users.filter(user =>
    user.active && (new Date() - user.lastActiveAt) <= 86400000
  ).length;

  const postsLast24Hrs = posts.filter(post =>
    (new Date() - post.createdAt) <= 86400000
  ).length;

  const data = {
    labels: ['Total Users', 'Total Posts', 'Users Active Last 24 Hours', 'Posts Published Last 24 Hours'],
    datasets: [
      {
        label: 'Counts',
        data: [totalUsers, totalPosts, usersActiveLast24Hrs, postsLast24Hrs],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        display: false,
      },
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const responsiveStyles = {
    minHeight: window.innerWidth <= 600 ? '60vh' : window.innerWidth <= 900 ? '30vh' : '80vh',
  };

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card total-users">
            <CardContent>
              <div className="icon-container">
                <PeopleIcon style={{ color: "white" }} fontSize="large" />
              </div>
              <Typography variant="h5">Total Users</Typography>
              <div className="count">{totalUsers}</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card total-posts">
            <CardContent>
              <div className="icon-container">
                <PostAddIcon style={{ color: "white" }} fontSize="large" />
              </div>
              <Typography variant="h5">Total Posts</Typography>
              <div className="count">{totalPosts}</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card users-active">
            <CardContent>
              <div className="icon-container">
                <AccessTimeIcon style={{ color: "white" }} fontSize="large" />
              </div>
              <Typography variant="h5">Users Active Last 24 Hours</Typography>
              <div className="count">{usersActiveLast24Hrs}</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card className="card posts-published">
            <CardContent>
              <div className="icon-container">
                <PublishIcon style={{ color: "white" }} fontSize="large" />
              </div>
              <Typography variant="h5">Posts Published Last 24 Hours</Typography>
              <div className="count">{postsLast24Hrs}</div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={0} justifyContent="center" alignItems="center" style={responsiveStyles}>
        <Grid item xs={12} sm={10} md={10}>
          <Card style={{ backgroundColor: '#f5f5f5' }}>
            <CardContent>
              <Typography variant="h5" style={{ display: 'flex', alignItems: 'center', marginBottom: '13px' }}>
                <PersonIcon style={{ color: '#ff6384', marginRight: '8px' }} />
                User Stats
              </Typography>
              <div className="chart-container">
                <Bar data={data} options={options} />
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
