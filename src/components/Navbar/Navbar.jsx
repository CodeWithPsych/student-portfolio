import React from 'react';
import { Link } from 'react-scroll'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="left">Code With Psych</div>
      <div className="right">
        <ul>
          <li><Link className='navList active' duration='500' to='navbar' >Home</Link></li>
          <li><Link className='navList' smooth={true} offset={-10} duration='500' to='about'>About</Link></li>
          <li><Link className='navList' smooth={true} offset={-10} duration='500' to='skill'>Skills</Link></li>
          <li><Link className='navList' smooth={true} offset={-10} duration='500' to='portfolio' >Portfolio</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
