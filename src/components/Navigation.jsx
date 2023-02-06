import React from 'react';
import { Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Navigation() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        {/* <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link> */}
      </nav>
    </>
  );
}

export default Navigation;