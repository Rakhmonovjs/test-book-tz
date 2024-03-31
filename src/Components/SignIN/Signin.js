import React from 'react'
import './SignIN.scss'
import { TextField, Button, Box,Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Signin = () => {
  return (
    <div className='container'>
    <Box>
        <Typography>
            Sign in
        </Typography>
        <TextField label="Username" variant="outlined" placeholder='username' />
        <TextField label="Password" type="password" variant="outlined" placeholder='password' />
        <div>
          <Button variant="contained" color="primary"><h2>Button</h2></Button>
          <div className='link'>Already signed Up? <Link to="/">Go to Sign up</Link></div>
        </div>
        
    </Box>
</div>

  )
}

export default Signin