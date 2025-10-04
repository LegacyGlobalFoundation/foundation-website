import React from 'react';
import { NavigationProps, NavigationItem } from './Navigation.types';

const Navigation: React.FC<NavigationProps> = ({
  items,
  activeSection,
  onItemClick,
  className = ''
}) => {
  const handleItemClick = (item: NavigationItem) => {
    // Smooth scroll to section
    const element = document.querySelector(item.href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    // Call optional callback
    if (onItemClick) {
      onItemClick(item);
    }
  };

  return (
    <nav className={`navigation ${className}`}>
      <ul className="navigation__list">
        {items.map((item) => (
          <li key={item.id} className="navigation__item">
            <a
              href={item.href}
              className={`navigation__link ${
                activeSection === item.id ? 'navigation__link--active' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleItemClick(item);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;