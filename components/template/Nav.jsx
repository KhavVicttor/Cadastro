import React from 'react';
import './Nav.css';

export default props => <aside className="menu-area">
  <nav className ="menu">
  <a href='#/'>
    <i className = "fa fa-home"></i>Início
  </a>
  <br/>
  <a href='#/user'>
    <i className = "fa fa-user"></i>Usuários
  </a>
  </nav>
</aside>;
