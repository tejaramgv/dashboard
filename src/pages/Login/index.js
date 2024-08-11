// import React, { useState } from 'react';
// import { Grid, Paper, Typography, TextField, Button, IconButton, InputAdornment, useMediaQuery } from '@mui/material';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
// import './login.css';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);

//   const navigate = useNavigate();
//   const isMobileOrTablet = useMediaQuery('(max-width: 960px)'); // Detect mobile and tablet screens


//   const handleTogglePasswordVisibility = () => {
//     setShowPassword((prevShowPassword) => !prevShowPassword);
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     if (email && password) {
//       navigate('/home');
//     }
    
//   };

//   return (
//     <Grid container className="root" style={{ width: "100vw", overflowX: "hidden" }}>
//       <Grid
//         item
//         xs={12}
//         md={6}
//         className="rightHalf"
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           order: isMobileOrTablet ? 1 : 2, 
//           padding: isMobileOrTablet ? "10px" : "40px", 
//           overflow: "hidden", 
//         }}
//       >
//         <div style={{ marginTop: isMobileOrTablet ? "0" : "-30px", textAlign: "center" }}>
//           <Typography
//             sx={{ 
//               fontFamily: "Italiana", 
//               fontSize: isMobileOrTablet ? "8vw" : "57px", 
//               fontWeight: "400", 
//               lineHeight: isMobileOrTablet ? "10vw" : "75.39px", 
//               color: "#215870" 
//             }}
//             className="text"
//           >
//             Welcome to
//           </Typography>
//           <span className="signup-span">
//             <span style={{ color: "red", fontSize: isMobileOrTablet ? "8vw" : "inherit" }}>Dash</span>Board
//           </span>
//         </div>
//         <img 
//           src='about-us.jpg' 
//           alt="Description" 
//           className="image" 
//           style={{ 
//             width: isMobileOrTablet ? "80vw" : "auto", 
//             maxWidth: "100%", 
//             height: "auto", 
//             marginTop: isMobileOrTablet ? "10px" : "inherit" 
//           }} 
//         />
//       </Grid>
      
//       <Grid
//         item
//         xs={12}
//         md={6}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: isMobileOrTablet ? "10px" : "40px", 
//           order: isMobileOrTablet ? 2 : 1, 
//           overflow: "hidden", 
//         }}
//         component={Paper}
//         className="leftHalf"
//       >
//         <div className="login-header">
//           <center>
//             <Typography variant="h5" sx={{ color: "#215870" }}>
//               Login
//             </Typography>
//           </center>
//         </div>
//         <form className="form" onSubmit={handleLogin} style={{ width: isMobileOrTablet ? "90%" : "100%" }}>
//           <TextField
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: '#215870',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#1e4560',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#1e4560',
//                 },
//               },
//               '& .MuiInputLabel-root.Mui-focused': {
//                 color: '#1e4560',
//               },
//             }}
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             sx={{
//               '& .MuiOutlinedInput-root': {
//                 '& fieldset': {
//                   borderColor: '#215870',
//                 },
//                 '&:hover fieldset': {
//                   borderColor: '#1e4560',
//                 },
//                 '&.Mui-focused fieldset': {
//                   borderColor: '#1e4560',
//                 },
//               },
//               '& .MuiInputLabel-root.Mui-focused': {
//                 color: '#1e4560',
//               },
//             }}
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type={showPassword ? "text" : "password"}
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton
//                     aria-label="toggle password visibility"
//                     onClick={handleTogglePasswordVisibility}
//                     edge="end"
//                   >
//                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <Button
//             sx={{ backgroundColor: '#215870', '&:hover': { backgroundColor: '#1e4560' } }}
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className="submit"
//           >
//             Login
//           </Button>
//         </form>
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import { Button, TextField, Typography, Box, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:768px)');

  const handleLogin = () => {
    if (email && password) {
      navigate('/home');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '98vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(135deg, #2b4360, #f7f9fc)',
        padding: '20px',
        boxSizing: 'border-box',
        overflow: 'hidden', // Prevents any overflow
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: isMobile ? '90%' : '500px',
          padding: '20px',
          backgroundColor: '#fff',
          margin: '0',
          borderRadius: '8px',
          border: '1px solid #006d77',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxSizing: 'border-box',
          overflow: 'hidden', // Prevents any overflow within the div
        }}
      >
        <Typography variant="h5" component="h2" gutterBottom align="center">
          Login
        </Typography>
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          InputProps={{
            style: { borderColor: '#006d77' }, // Peacock green border color
          }}
          InputLabelProps={{
            style: { color: '#006d77' }, // Peacock green label color
          }}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            style: { borderColor: '#006d77' }, // Peacock green border color
          }}
          InputLabelProps={{
            style: { color: '#006d77' }, // Peacock green label color
          }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{
            marginTop: '20px',
            backgroundColor: '#006d77', // Peacock green button color
            borderColor: '#006d77', // Peacock green border color
          }}
        >
          Login
        </Button>
      </div>
    </Box>
  );
};

export default Login;

