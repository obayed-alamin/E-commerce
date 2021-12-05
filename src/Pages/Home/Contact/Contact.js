import React from 'react';
import { Button, TextField , Box} from '@mui/material';

const contactBg = {
    marginTop:'50px',
    backgroundColor:'rgba(41, 59, 112  ,0.95)',
    borderRadius:'5px',
    padding:'10px',
    marginBottom:'30px',
    height:'400px'
}

const Contact = () => {
    const handleContact = (e) =>{
        alert('You will reach you soon..')
        e.preventDefault();
    }
    return (
        <Box sx={contactBg}>
        <form onSubmit={handleContact} sx={{mt:4}}>
               <TextField 
                  type="email"
                  variant="outlined" 
                  placeholder="email address"
                  sx={{ width: '90%', mt: 5 , mb:1,bgcolor:'white'}}
                  id="outlined-basic"
                  size="normal"
              />
              <TextField
                  sx={{ width: '90%', m:1,bgcolor:'white' }}
                  id="outlined-size-small"
                  size="normal"
                  placeholder="subject"
                  
              />
              
              <TextField
                  placeholder="Your Comment"
                  sx={{ width: '90%', m:1 ,bgcolor:'white'}}
                  id="outlined-multiline-static"
                  multiline
                  rows={5}
                  size="normal"
              />
             <br />
             <Button type="submit" sx={{bgcolor:'#36DDCC'}} variant="contained">Submit</Button>
   
        </form>
        
    </Box>

    );
};

export default Contact;