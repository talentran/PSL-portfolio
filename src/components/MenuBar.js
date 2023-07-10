import React, { useContext } from 'react';
import { PageContext } from '../PageContext';
import './styles/MenuBar.css';

const MenuBar = () => {
  const { setPage } = useContext(PageContext);

  return (
    <div className="menu-bar">
      <button onClick={() => setPage('home')}>Home</button>
      <button onClick={() => setPage('about')}>About</button>
      <a href="https://online.flippingbook.com/view/699845232/" target="_blank" rel="noopener noreferrer">
        <button>Resume</button>
      </a>
      <button onClick={() => setPage('projects')}>Projects</button>
      <button onClick={() => setPage('contact')}>Contact Me</button>
    </div>
  );
};

export default MenuBar;
