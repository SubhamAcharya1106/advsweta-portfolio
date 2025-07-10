'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Adv. Sweta</div>

        <div className="contact-info">
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+91 70649 86280</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>swetatripathy1999@gmail.com</span>
          </div>
        </div>

        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="#about">About</Link>
          <Link href="#services">Practice Areas</Link>
          <Link href="#legal-services">Services</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        <button className="menu-toggle" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
