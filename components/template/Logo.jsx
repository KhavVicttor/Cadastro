import React from 'react';
import './Logo.css';
import logo from '../../assets/imgs/logoAlpha.png';

export default props => (
  <aside className="logo">
    <a href="/" className="logo">
      <img src={logo} alt="logo" height="80" width="80" />
    </a>
  </aside>
);
