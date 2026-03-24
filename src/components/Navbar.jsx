import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = ({ onPrayerClick, theme, onThemeToggle, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const isDark = theme === 'dark';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-icon">{content.logoIcon}</span>
          <span className="logo-text">{content.logo}</span>
        </Link>

        <div className="navbar-links-desktop">
          {content.links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
              {isActive(link.path) && (
                <motion.div
                  className="active-indicator"
                  layoutId="activeIndicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          <button className="prayer-btn" onClick={onPrayerClick}>
            {content.prayerButton}
          </button>
          <button 
            className="theme-toggle" 
            onClick={onThemeToggle}
            aria-label={content.themeToggleLabel[theme]}
          >
            {content.themeToggle[theme]}
          </button>
        </div>

        <button
          className={`menu-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {content.links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`mobile-link ${isActive(link.path) ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button className="mobile-prayer-btn" onClick={() => {
              setIsOpen(false);
              onPrayerClick();
            }}>
              {content.prayerButton}
            </button>
            <button 
              className="mobile-theme-toggle"
              onClick={() => {
                setIsOpen(false);
                onThemeToggle();
              }}
            >
              {content.themeToggle[theme]} {content.themeToggleLabel[theme]}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
