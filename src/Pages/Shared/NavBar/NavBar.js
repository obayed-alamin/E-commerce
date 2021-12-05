import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import {  Drawer, List, ListItem,ListItemText, useTheme } from '@mui/material';

const NavBar = () => {
  const theme = useTheme()
  const useStyle = makeStyles({
    navIcon:{
      [theme.breakpoints.up('sm')]: {
        display:'none !important'
      }
    },
    navItems:{
      [theme.breakpoints.down('md')]: {
        display:'none !important'
      }
    },
    navLogo:{
      [theme.breakpoints.down('md')]: {
        textAlign:'right !important'
      }
    }
  })
    const {navIcon ,navItems ,navLogo} = useStyle()
    const {user,logOut} = useAuth()

    const [state, setState] = React.useState(false);


    const list = (
      <Box
        sx={{ width:100 , bgcolor:'primary.main' , color:'white'}}
        role="presentation"
      >
        <List>
          
            <ListItem style={{display:'flex' , flexDirection:'column' ,textDecoration:'none'}}>
               <ListItemText>
                 <NavLink style={{textDecoration:'none' , color:'white'}} to='/'>Home</NavLink>
               </ListItemText>
               <ListItemText>
                 <NavLink style={{textDecoration:'none' , color:'white'}} to='/explore'>Explore</NavLink>
               </ListItemText>
               <ListItemText>
                 <NavLink style={{textDecoration:'none' , color:'white'}} to='/dashBoard'>DashBoard</NavLink>
               </ListItemText>
               <ListItemText>
                 {user?.email ?
                 <Button onClick={logOut} color="inherit">Logout</Button>
                :
                <NavLink to='/login' style={{textDecoration:'none' , color:'white'}}><Button color="inherit">Login</Button></NavLink>
                }
               </ListItemText>
            </ListItem>
         
        </List>
      </Box>
    );
    return (
      <>
      <div>
      
        <React.Fragment>
          
          <Drawer
           
            open={state}
            onClose={()=>setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
     
    </div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            className={navIcon}
            onClick={()=>setState(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1,textAlign:'left' }}>
            E-Bike
          </Typography>
         <Box className={navItems}>
         <NavLink to='/home' style={{textDecoration:'none' , color:'white'}}><Button color="inherit">Home</Button></NavLink>
          {
            user?.email ? 
            <>
            <NavLink to='/explore' style={{textDecoration:'none' , color:'white'}}><Button color="inherit">Explore</Button></NavLink>
            
            <NavLink to='/dashboard' style={{textDecoration:'none' , color:'white'}}><Button color="inherit">DashBoard</Button></NavLink>
            <Button onClick={logOut} color="inherit">Logout</Button>
            </>
            :
            <NavLink to='/login' style={{textDecoration:'none' , color:'white'}}><Button color="inherit">Login</Button></NavLink>
          }
         </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </>
    );
};

export default NavBar;