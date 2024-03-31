import React, { useState } from 'react'
import './SignUP.scss'
import { TextField, Button, Box,Typography } from '@mui/material';
import { Link,Redirect } from 'react-router-dom';
import Signin from '../SignIN/Signin';


const Signup = () => {

  const [user, setUser] = useState({ username: '', password: '', confirmPassword: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if username and password are provided
    if (user.username && user.password && user.password === user.confirmPassword) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  if (isSubmitted) {
    return <Link to="/home" />;
  }

  return (
    <div className='container'>
    <Box onSumbit={handleSubmit}>
        <Typography>
            Sign up
        </Typography>
        <TextField 
          label="Username" 
          type='email'
          variant="outlined" 
          placeholder='username' 
          name="username" 
          value={user.username} 
          onChange={handleChange} 
          />
        <TextField 
          label="Password" 
          type="password" 
          variant="outlined" 
          placeholder='password' 
          name="password" 
          value={user.password} 
          onChange={handleChange} 
          />
        <TextField 
          label="Confirm Password" 
          type="confirm password" 
          variant="outlined" 
          placeholder='confirm password' 
          name="confirmPassword" 
          value={user.confirmPassword} 
          onChange={handleChange} 
        />

        <div>
          <Button 
          type='sumbit' 
          variant="contained" 
          color="primary">
            <h2>Submit</h2>
          </Button>
          <div className='link'>
            Already signed Up? 
            <Link to="/signin" path={<Signin/> }>
              Go to Sign in
            </Link>
          </div>
        </div>
        
    </Box>
    {/* Xabar, agar username va password kiritilmagan bo'lsa */}
    {!isSubmitted && (!user.username || !user.password || user.password !== user.confirmPassword) && (
        <Typography variant="body1" color="error">Please fill in all fields correctly</Typography>
      )}
</div>

  )
}

export default Signup