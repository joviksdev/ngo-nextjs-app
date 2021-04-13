import React, { Fragment } from 'react';

const NavBar = () => {
  return (
    <header>
      <div className='container header d-flex align-items-center justify-content-between'>
        <div> logo </div>
        <nav className='navbar d-none d-md-block p-0'>
          <ul className='navbar-nav d-flex flex-row header-navbar navbar-inline'>
            <li className='nav-item mx-3 p-0'>
              <a href='/'>Home</a>
            </li>
            <li className='nav-item mx-3 p-0'>
              <a href='#'>Services</a>
            </li>
            <li className='nav-item mx-3 p-0'>
              <a href='#'>About</a>
            </li>
            <li className='nav-item ml-3 p-0'>
              <a href='/contact-us'>Contact</a>
            </li>
          </ul>
        </nav>
        <div className='toggler-wrapper d-md-none'>
          <input type='checkbox' name='toggler' className='menu-toggler' />
          <div className='menu-toggler-icon'></div>
        </div>
      </div>
      <nav className='navbar nav-drawer w-75'>
        <ul className='navbar-nav d-flex flex-column w-100 align-items-center justify-content-center header-navbar'>
          <li className='nav-item mx-2 active'>
            <a href='/'>Home</a>
          </li>
          <li className='nav-item mx-2'>
            <a href='#'>Services</a>
          </li>
          <li className='nav-item mx-2'>
            <a href='#'>About</a>
          </li>
          <li className='nav-item ml-2'>
            <a href='/contact-us'>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
