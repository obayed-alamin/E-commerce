import { Button, Container, Grid, TextField, Typography ,Box, CircularProgress, AlertTitle, Alert} from '@mui/material';
import React, { useState } from 'react';
import { NavLink , useLocation ,useHistory} from 'react-router-dom';

import useAuth from '../../../hooks/useAuth';






const Login = () => {
    const {user,loginUser,isLoading,authError,signInWithGoogle} = useAuth();
    const [loginData,setLoginData] =useState({});

    const location = useLocation();
    const history = useHistory()

    const handleOnChange = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] =value;
        setLoginData(newLoginData);
    }

    

    const handleLogin =(e) => {
        loginUser(loginData.email , loginData.password , location , history)
        e.preventDefault()
    }

    const handleGoogleSignIn =() => {
        signInWithGoogle(location,history)
    }


    return (
        <Container sx={{mt:2}}>
            <Grid container spacing={2}>
         <Grid sx={{mt:10}} item xs={12} md={6}>
         <Typography variant="body1" gutterBottom>Login</Typography>
         <form onSubmit={handleLogin}>
         <TextField 
         sx={{width:'75%' , m:1}}
         name='email'
         onChange={handleOnChange}
         label='Your email'
         id="standard-basic"  variant="standard" />
         <br />
         <TextField
         name="password"
         onChange={handleOnChange} 
         sx={{width:'75%' , m:1}}
         label='Your password'
         type='password'
         id="standard-basic"  
         variant="standard" />
        
         <Button 
         type="submit"
         variant="contained" 
         sx={{bgcolor:'#36DDCC' , width:'75%' , m:2}} 
         style={{fontWeight:500}}>
             Sign In
        </Button>
        <br />
         <Typography variant="caption">New User?</Typography>
         <NavLink style={{textDecoration:'none'}} to='/register'><Button variant="text">Please Register</Button></NavLink>
         </form>
         <Button
         onClick={handleGoogleSignIn} 
         type="submit"
         variant="contained" 
         sx={{bgcolor:'#36DDCC' , width:'50%' , m:2}} 
         style={{fontWeight:500}}>
             
             Sign In With Google
        </Button>
         {
             isLoading &&  <Box sx={{ display: 'flex' }}>
             <CircularProgress />
           </Box>
         }
         {user?.email && <Alert severity="success">
         <AlertTitle>Success</AlertTitle>
            You have registered successfully — <strong>Congrats!</strong>
        </Alert>}
        {authError && 
        <Alert variant="filled" severity="error">
        {authError}
      </Alert>}
         </Grid>
         <Grid item xs={12} md={6}>
         <img src='https://i.ibb.co/ngbYcGt/Mobile-login.jpg' alt="" style={{width:'100%'}}/>
         </Grid>
         </Grid>
        </Container>
    );
};

export default Login;