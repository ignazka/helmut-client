import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='Footer'>
      <Link to='/add'>add work</Link> Copyright 2022 Helmut Mark Impressum
    </div>
  );
}

export default Footer;
