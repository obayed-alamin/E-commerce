import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink , useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Register = () => {
    const [loginData,setLoginData] =useState({});
    const history = useHistory()
    const {user ,registerUser ,isLoading,authError} = useAuth();
    const handleOnBlur = (e) =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] =value;
        console.log(field,value,newLoginData);
        setLoginData(newLoginData);
    }

   

    const handleLogin =(e) => {
        if(loginData?.password !== loginData?.password2){
            alert('Your password did not matched')
            return;
        }
        registerUser(loginData?.email , loginData?.name, loginData?.password , history)
        e.preventDefault()
    }

    return (
        <Container sx={{mt:2}}>
            <Grid container spacing={2}>
         <Grid sx={{mt:10}} item xs={12} md={6}>
         <Typography variant="body1" gutterBottom>Register</Typography>
         {!isLoading && 
         <form onSubmit={handleLogin}>
         <TextField 
         sx={{width:'75%' , m:1}}
         name='name'
         type='text'
         onBlur={handleOnBlur}
         label='Your Name'
         id="standard-basic"  variant="standard" />
         <br />
         <TextField 
         sx={{width:'75%' , m:1}}
         name='email'
         type='email'
         onBlur={handleOnBlur}
         label='Your email'
         id="standard-basic"  variant="standard" />
         <br />
         <TextField
         name="password"
         onBlur={handleOnBlur} 
         sx={{width:'75%' , m:1}}
         label='Your password'
         type='password'
         id="standard-basic"  
         variant="standard" />
         <TextField
         name="password2"
         onBlur={handleOnBlur} 
         sx={{width:'75%' , m:1}}
         label='Re-type password'
         type='password'
         id="standard-basic"  
         variant="standard" />
        
         <Button 
         type="submit"
         variant="contained" 
         sx={{bgcolor:'#36DDCC' , width:'75%' , m:2}} 
         style={{fontWeight:500}}>
             Sign Up
        </Button>
        <br />
         <Typography variant="caption">Already Registered??</Typography>
         <NavLink style={{textDecoration:'none'}} to='/login'><Button variant="text">Please login</Button></NavLink>
         </form>
         }
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

export default Register;