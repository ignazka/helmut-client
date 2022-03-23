import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  ButtonGroup,
  useMediaQuery,
} from '@mui/material';
import { Link } from 'react-router-dom';
import Masonry from '@mui/lab/Masonry';

import pictures from '../../pictures.json';

function Galerie() {
  const matches = useMediaQuery('(min-width:1045px)');

  const handleClick = ({ target }) => {
    console.log(target);
  };

  return (
    <div className='Galerie'>
      {/* End hero unit */}
      {matches ? (
        <Masonry columns={3} spacing={15}>
          {pictures.map((element, index) => (
            <Card key={index} sx={{ border: 'none', boxShadow: 'none', borderRadius:'0px' }}>
              <Link to={`${element.image}`}>
                <CardMedia
                  component='img'
                  sx={{
                    // 16:9
                    pt: '0',
                  }}
                  image={`${element.image}?w=162&auto=format`}
                  alt={element.material}
                />
              </Link>
              <CardContent sx={{ flexGrow: 1, paddingLeft:'0px', paddingRight:'0px' }}>
                <Typography
                  // sx={{ fontFamily: 'Alfa Slab One' }}
                  gutterBottom
                  variant='h5'
                  component='h2'
                >
                  {element.title}
                </Typography>
                <div className='description'>
                <Typography
                // sx={{ fontFamily: 'Open Sans' }}
                >
                  {element.year}
                </Typography>
                <Typography
                  // sx={{ fontFamily: 'Open Sans' }}
                  variant='h6'
                >
                  {element.material}
                </Typography>
                </div>
               
              </CardContent>
              {/* <CardActions>
                <ButtonGroup
                  variant='text'
                  aria-label='text button group'
                  color='inherit'
                  sx={{ border: 'none', background: 'none' }}
                >
                  <Button sx={{ color: 'black' }}>Edit</Button>
                  <Button sx={{ color: 'black' }}>Delete</Button>
                </ButtonGroup>
              </CardActions> */}
            </Card>
          ))}
        </Masonry>
      ) : (
        pictures.map((element, index) => {
          return (
            <Card
              key={index}
              sx={{
                border: '0px solid',
                paddingBottom: '15px', borderRadius:'0px',
              }}
            >
              <Link to={`${element.image}`}>
                <CardMedia
                  component='img'
                  sx={{
                    // 16:9
                    pt: '0',
                  }}
                  image={`${element.image}?w=162&auto=format`}
                  alt={element.material}
                />
              </Link>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  // sx={{ fontFamily: 'Alfa Slab One' }}
                  gutterBottom
                  variant='h5'
                  component='h2'
                >
                  {element.title}
                </Typography>
                <div className='description'>
                <Typography
                // sx={{ fontFamily: 'Open Sans' }}
                >
                  {element.year}
                </Typography>
                <Typography
                  // sx={{ fontFamily: 'Open Sans' }}
                  variant='h6'
                >
                  {element.material}
                </Typography>
                </div>
               
              </CardContent>
              <CardActions>
                <ButtonGroup
                  variant='text'
                  aria-label='text button group'
                  color='inherit'
                  sx={{ border: 'none', background: 'none' , display:'none'}}
                >
                  <Button>Edit</Button>
                  <Button>Delete</Button>
                </ButtonGroup>
              </CardActions>
            </Card>
          );
        })
      )}
    </div>
  );
}

export default Galerie;
