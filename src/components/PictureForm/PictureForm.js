import React from 'react';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function PictureForm() {
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <FormGroup className='PictureForm' onSubmit={handleSubmit}>
      <FormControl sx={{ margin: '10px' }}>
        <TextField type='text' label='title' variant='outlined' name='title' />
      </FormControl>
      <FormControl sx={{ margin: '10px' }}>
        <TextField
          type='text'
          label='material'
          variant='outlined'
          multiline
          name='material'
        />
      </FormControl>
      <FormControl sx={{ margin: '10px' }}>
        <Input
          accept='image/*'
          id='contained-button-file'
          multiple
          type='file'
        />
      </FormControl>
      <Button
        variant='outlined'
        sx={{
          width: '150px',

          margin: 'auto',
        }}
        type='submit'
      >
        add work
      </Button>
    </FormGroup>
  );
}

export default PictureForm;
