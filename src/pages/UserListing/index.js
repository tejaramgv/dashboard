import React, { useState, useEffect, useRef } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Card, CardContent, Grid, Typography, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import PeopleIcon from '@mui/icons-material/People';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { users } from '../../data/dummyData';

// Styled component for button container
const MobileActionsWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

// Styled component for buttons
const ActionButton = styled(Button)(({ theme }) => ({
  marginBottom: '10px',
  [theme.breakpoints.up('sm')]: {
    marginBottom: '0',
    marginRight: '10px',
  },
}));

const UserListing = () => {
  const [page, setPage] = useState(1);
  const usersPerPage = 8;  // Number of users per page
  
  // Filter and sort users
  const activeUsers = users.filter(user => user.active);
  const sortedActiveUsers = [...activeUsers].sort((a, b) => b.lastActiveAt - a.lastActiveAt);

  const totalPages = Math.ceil(sortedActiveUsers.length / usersPerPage);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const paginatedUsers = sortedActiveUsers.slice((page - 1) * usersPerPage, page * usersPerPage);

  const totalUsers = users.length;
  const usersActiveLast24Hrs = users.filter(user => (new Date() - user.lastActiveAt) <= 86400000).length;

  // Ref to measure content width
  const emailCellRef = useRef(null);

  useEffect(() => {
    if (emailCellRef.current) {
      const maxWidth = Array.from(emailCellRef.current.querySelectorAll('td')).reduce((max, cell) => {
        return Math.max(max, cell.scrollWidth);
      }, 0);

      emailCellRef.current.style.minWidth = `${maxWidth}px`;
    }
  }, [paginatedUsers]);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', minHeight: '80vh', paddingBottom: '80px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
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
      </Grid>

      <div style={{ overflowX: 'auto', marginTop: '20px' }}>
        <Table sx={{ minWidth: 650, tableLayout: 'fixed', fontSize: '0.75rem' }}>
          <TableHead>
            <TableRow sx={{ background: 'linear-gradient(#f7f9fc, #782020)' }}>
              <TableCell style={{ fontSize: '0.65rem', padding: '8px' }}>User ID</TableCell>
              <TableCell style={{ fontSize: '0.65rem', padding: '8px' }}>Username</TableCell>
              <TableCell style={{ fontSize: '0.65rem', padding: '8px' }}>Name</TableCell>
              <TableCell style={{ fontSize: '0.65rem', width: '170px', padding: '8px' }}>Email</TableCell>
              <TableCell style={{ fontSize: '0.65rem', padding: '8px' }}>Active</TableCell>
              <TableCell style={{ fontSize: '0.65rem', padding: '8px' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.map(user => (
              <TableRow sx={{ backgroundColor: "rgb(241, 237, 237)" }} key={user.id}>
                <TableCell style={{ padding: '8px' }}>{user.id}</TableCell>
                <TableCell style={{ padding: '8px' }}>{user.username}</TableCell>
                <TableCell style={{ padding: '8px' }}>{user.name}</TableCell>
                <TableCell style={{ padding: '8px', minWidth: '300px' }} ref={emailCellRef}>{user.email}</TableCell>
                <TableCell style={{ padding: '8px' }}>{user.active ? 'Active' : 'Inactive'}</TableCell>
                <TableCell style={{ padding: '8px' }}>
                  <MobileActionsWrapper>
                    <ActionButton sx={{backgroundColor:"#074848"}} variant="contained" color="primary" size="small">
                      Edit
                    </ActionButton>
                    <ActionButton sx={{backgroundColor:"rgb(222, 73, 73)"}} variant="contained" color="secondary" size="small">
                      Ban
                    </ActionButton>
                  </MobileActionsWrapper>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div style={{
        marginTop: '20px',
        marginBottom: '80px',  // Adjust this value to be greater than or equal to the height of your BottomBar
        display: 'flex',
        justifyContent: 'center',
        padding: '0 16px'
      }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handleChangePage}
          color="primary"
        />
      </div>
    </div>
  );
};

export default UserListing;
