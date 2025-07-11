'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">Adv. Swetangini Portfolio</div>

        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link href="#about">About</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#resume">Resume</Link>
          <Link href="#services">My Services</Link>
          <Link href="#contact">Lets Chat</Link>
        </nav>

        <button className="menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
