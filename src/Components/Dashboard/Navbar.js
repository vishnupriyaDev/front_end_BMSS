import React from 'react';
// import './'
const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Bus Management Dashboard</h2>
      <ul>
        <li><a href="#routes">Bus Routes</a></li>
        <li><a href="#notifications">Notifications</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
