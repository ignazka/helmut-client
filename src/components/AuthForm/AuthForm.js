import React from 'react';
import { TextField } from '@mui/material';

function AuthForm() {
  return (
    <div>
      <TextField
        id='outlined-basic'
        label='Email'
        variant='outlined'
        type='email'
      />
      <TextField
        id='outlined-basic'
        label='Password'
        variant='outlined'
        type='password'
      />
    </div>
  );
}

export default AuthForm;
