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
      <div className="header-container">
        {/* Top Section */}
        <div className="header-top">
          <div className="logo">Adv. Sweta</div>
          <button className="menu-toggle" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Contact Info - Desktop */}
        <div className="contact-info desktop">
          <div className="contact-item">
            <FaPhone className="icon" />
            <span>+91 70649 86280</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>swetatripathy1999@gmail.com</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="#about">About</Link>
          <Link href="#services">Practice Areas</Link>
          <Link href="#legal-services">Services</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        {/* Contact Info - Mobile */}
        {isMobileMenuOpen && (
          <div className="contact-info mobile">
            <div className="contact-item">
              <FaPhone className="icon" />
              <span>+91 70649 86280</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="icon" />
              <span>swetatripathy1999@gmail.com</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
