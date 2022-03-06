import React from 'react';
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <div className='Menu'>
      <Link to='/work'>work</Link>
      <br />
      <a href='mailto:info@info.de'>contact</a>
      <br />
      <Link to='/bio'>bio</Link>
    </div>
  );
}

export default Menu;
