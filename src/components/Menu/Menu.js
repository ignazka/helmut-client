import React from 'react';
import { Link } from 'react-router-dom';
function Menu() {
  return (
    <div className='Menu'>
      <Link to='/work'>work</Link>
      <br />
      <Link to='/vita'>vita</Link>
      <br />
      <a href='mailto:info@info.de'>contact</a>
    </div>
  );
}

export default Menu;
