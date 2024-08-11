import React, { useState, useRef, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Card, CardContent, Grid, Typography, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import PostAddIcon from '@mui/icons-material/PostAdd';
import PublishIcon from '@mui/icons-material/Publish';
import { posts } from '../../data/dummyData';

const TableContainer = styled('div')({
  overflowX: 'auto',
  marginTop: '20px',
  padding: '0 16px',
});

const PostListing = () => {
  const [page, setPage] = useState(1);
  const postsPerPage = 8;

  const sortedPosts = [...posts].sort((a, b) => b.createdAt - a.createdAt);
  
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const paginatedPosts = sortedPosts.slice((page - 1) * postsPerPage, page * postsPerPage);

  const totalPosts = sortedPosts.length;
  const postsLast24Hrs = sortedPosts.filter(post => (new Date() - post.createdAt) <= 86400000).length;

  // Ref to measure content width
  const mediaUrlCellRef = useRef(null);

  useEffect(() => {
    if (mediaUrlCellRef.current) {
      const maxWidth = Array.from(mediaUrlCellRef.current.querySelectorAll('td')).reduce((max, cell) => {
        return Math.max(max, cell.scrollWidth);
      }, 0);

      mediaUrlCellRef.current.style.minWidth = `${maxWidth}px`;
    }
  }, [paginatedPosts]);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', minHeight: '80vh', paddingBottom: '80px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card className="card total-posts">
            <CardContent>
              <div className="icon-container">
                <PostAddIcon style={{color:"white"}} fontSize="large" />
              </div>
              <Typography variant="h5">Total Posts</Typography>
              <div className="count">{totalPosts}</div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card style={{backgroundColor:"rgb(6, 80, 63)"}} className="card posts-published">
            <CardContent>
              <div className="icon-container">
                <PublishIcon style={{color:"white"}} fontSize="large" />
              </div>
              <Typography variant="h5">Posts Published Last 24 Hours</Typography>
              <div className="count">{postsLast24Hrs}</div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <TableContainer>
        <Table sx={{ minWidth: 650, tableLayout: 'fixed', fontSize: '0.75rem' }}>
          <TableHead>
            <TableRow sx={{ background: 'linear-gradient(#f7f9fc, #6b9a67)' }}>
              <TableCell style={{ fontSize: '0.65rem', padding: '8px' }}>Post ID</TableCell>
              <TableCell style={{ fontSize: '0.65rem', padding: '8px' }}>Caption</TableCell>
              <TableCell style={{ fontSize: '0.65rem', padding: '8px' }}>Media URL</TableCell>
              <TableCell style={{ fontSize: '0.65rem', padding: '8px' }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedPosts.map(post => (
              <TableRow key={post.id} sx={{ backgroundColor: "rgb(243, 245, 244)" }}>
                <TableCell style={{ padding: '8px' }}>{post.id}</TableCell>
                <TableCell style={{ padding: '8px' }}>{post.caption}</TableCell>
                <TableCell style={{ padding: '8px', minWidth: '200px' }} ref={mediaUrlCellRef}>
                  <a href={post.mediaUrl} style={{ wordBreak: 'break-all', display: 'block' }}>{post.mediaUrl}</a>
                </TableCell>
                <TableCell style={{ padding: '8px' }}>
                  <Button variant="contained" color="primary" size="small">
                    Delete
                  </Button>
                  <Button variant="contained" color="secondary" size="small" style={{ marginLeft: '10px' }}>
                    Hide
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <div style={{
        marginTop: '20px',
        marginBottom: '80px',
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

export default PostListing;
