import { Grid ,Box} from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
       <Box sx={{ bgcolor: 'primary.main' ,pt:3,mt:3 , color:'whitesmoke'}}>
            <Grid container spacing={2}>
             <Grid item xs={12} md={4}>
                            <h3>About E-bike</h3>
                             <p>We are authorized bike seeling company workin for a very long time.For Any information please contact us.</p>
             </Grid>
             <Grid item xs={12} md={4}>
                         <h3>Our Services</h3>
                             <p>We have the best bikes and accersories and we will get your bike at your door.Just order.</p>
             </Grid>
             <Grid item xs={12} md={4}>
                            <h3>Contact us</h3>
                             <p>Phone: 171-115-0092-119</p>
                             <p>email: e-bike@doc.com</p>
             </Grid>
             <p style={{textAlign:'center' , margin:'0 auto'}}>Created by &copy;mrinmoyarnob</p>
        </Grid>
       </Box>
    );
};

export default Footer;