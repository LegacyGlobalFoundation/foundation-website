import React, { useState } from 'react';
import Navigation from '../Navigation';
import { HeaderProps } from './Header.types';
import { NavigationItem } from '../Navigation/Navigation.types';

const Header: React.FC<HeaderProps> = ({
  navigationItems,
  activeSection,
  onNavigationClick
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavigationClick = (item: NavigationItem) => {
    // Close mobile menu when a navigation item is clicked
    setIsMobileMenuOpen(false);
    
    // Call optional callback
    if (onNavigationClick) {
      onNavigationClick(item);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <span className="header__logo-icon">🔗</span>
          <a href="#home" className="header__logo-text">
            LGF
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="header__nav">
          <Navigation
            items={navigationItems}
            activeSection={activeSection}
            onItemClick={handleNavigationClick}
          />
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="header__mobile-toggle"
          onClick={handleMobileToggle}
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`header__mobile-menu ${isMobileMenuOpen ? '' : 'header__mobile-menu--hidden'}`}>
        <Navigation
          items={navigationItems}
          activeSection={activeSection}
          onItemClick={handleNavigationClick}
        />
      </div>
    </header>
  );
};

export default Header;