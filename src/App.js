import React from 'react';
import { CssBaseline, Container, useMediaQuery } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Sidebar from './components/Sidebar';
import BottomBar from './components/BottomBar';
import Login from './pages/Login';
import Home from './pages/Home';
import UserListing from './pages/UserListing';
import PostListing from './pages/PostListing';

const AppContent = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <div style={{ display: 'flex', width: '100%' }}> 
      {!isMobile && !isLoginPage && <Sidebar />}
      <Container 
        style={{ 
          marginTop:"10px",
          marginLeft: isMobile || isLoginPage ? 0 :0, 
          flexGrow: 2, 
          padding: 3,
        
        }}
      >
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route path="/users" element={<UserListing />} />
          <Route path="/posts" element={<PostListing />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Container>
      {isMobile && !isLoginPage && <BottomBar />}
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={createTheme()}>
      <CssBaseline />
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
};

export default App;
