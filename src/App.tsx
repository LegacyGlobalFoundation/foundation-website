import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { NavigationItem } from './components/Navigation/Navigation.types';
import './styles/main.scss';

// Navigation items based on the specifications
const navigationItems: NavigationItem[] = [
  { id: 'mission', label: 'Our Story', href: '#mission' },
  { id: 'focus', label: 'Our Focus', href: '#focus' },
  { id: 'partnership', label: 'Partnership', href: '#partnership' },
  { id: 'contact', label: 'Contact Us', href: '#contact' }
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [showSocialSidebar, setShowSocialSidebar] = useState<boolean>(false);

  // Track active section based on scroll position and control social sidebar visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.getElementById('hero');
      
      // Show social sidebar when scrolled past the hero section
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowSocialSidebar(scrollPosition > heroBottom - 100);
      }
      
      const sections = navigationItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Handle smooth scrolling for all anchor links
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id!);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  const handleNavigationClick = (item: NavigationItem) => {
    setActiveSection(item.id);
  };

  return (
    <div className="App">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Sticky Social Media Links */}
      <aside className={`social-sidebar ${showSocialSidebar ? 'social-sidebar--visible' : ''}`}>
        <div className="social-sidebar__container">
          <a 
            href="https://facebook.com/legacyglobalfoundation" 
            className="social-sidebar__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          
          <a 
            href="https://instagram.com/legacyglobalfoundation" 
            className="social-sidebar__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a 
            href="https://twitter.com/legacyglobalfoundation" 
            className="social-sidebar__link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Twitter"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
          
          <a 
            href="mailto:info@legacyglobalfoundation.com" 
            className="social-sidebar__link social-sidebar__link--email"
            aria-label="Send us an email"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.89 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </aside>

      {/* Header with Navigation */}
      <Header
        navigationItems={navigationItems}
        activeSection={activeSection}
        onNavigationClick={handleNavigationClick}
      />

      {/* Main Content */}
      <main id="main-content" style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section id="hero" className="hero">
          <div className="hero__container">
            <h1 className="hero__headline">
              Reaching Forward. <br />Giving Chances.
            </h1>
          </div>
          <div className="hero__scroll-indicator">
            Scroll to explore
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="mission">
          <div className="mission__container">
            <div className="mission__hero">
              <h1 className="mission__hero-title">
                WE ARE THE <span className="mission__hero-accent">CHANGEMAKERS</span>
              </h1>
              <div className="mission__hero-line"></div>
              <p className="mission__hero-description">
                Legacy Global Foundation has a storied commitment to bridging gaps in communities around the globe. 
                It's the legacy of visionary leadership, community partnership, and true collaborative spirit. 
                The Foundation is an ode to the greatest gift we can offer - opportunity. Fueled by our love 
                for empowerment, for giving people a chance, and for the partnerships that got us to where we are today; 
                the Foundation honestly believes opportunity is the seed from which everything grows.
              </p>
              <div className="mission__hero-pattern">
                <svg viewBox="0 0 300 300" className="mission__pattern-svg">
                  <defs>
                    {/* Fingerprint pattern definition */}
                    <pattern id="fingerprint" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
                      <path d="M2,0 Q3,1 2,2 Q1,3 2,4" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.6"/>
                      <path d="M0,2 Q1,1 2,2 Q3,3 4,2" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.4"/>
                    </pattern>
                    
                    {/* Concentric fingerprint rings */}
                    <g id="fingerprintRings">
                      <ellipse cx="0" cy="0" rx="20" ry="18" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.7"/>
                      <ellipse cx="0" cy="0" rx="16" ry="14" fill="none" stroke="currentColor" strokeWidth="0.6" opacity="0.6"/>
                      <ellipse cx="0" cy="0" rx="12" ry="10" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                      <ellipse cx="0" cy="0" rx="8" ry="6" fill="none" stroke="currentColor" strokeWidth="0.4" opacity="0.4"/>
                      <ellipse cx="0" cy="0" rx="4" ry="3" fill="none" stroke="currentColor" strokeWidth="0.3" opacity="0.3"/>
                    </g>
                  </defs>
                  
                  {/* Simplified African continent outline with fingerprint pattern */}
                  <path 
                    d="M150,50 
                       C180,45 210,60 220,90
                       C225,110 230,130 235,150
                       C240,170 245,190 250,210
                       C255,230 250,250 240,265
                       C225,275 200,280 175,275
                       C150,270 125,260 110,245
                       C95,230 85,210 80,190
                       C75,170 70,150 75,130
                       C80,110 90,90 105,75
                       C120,60 135,50 150,50 Z"
                    fill="url(#fingerprint)" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    opacity="0.8"
                  />
                  
                  {/* Fingerprint rings scattered across the continent */}
                  <g transform="translate(130,80)">
                    <use href="#fingerprintRings" transform="scale(0.8) rotate(15)"/>
                  </g>
                  <g transform="translate(180,120)">
                    <use href="#fingerprintRings" transform="scale(0.6) rotate(-30)"/>
                  </g>
                  <g transform="translate(160,180)">
                    <use href="#fingerprintRings" transform="scale(0.7) rotate(45)"/>
                  </g>
                  <g transform="translate(200,200)">
                    <use href="#fingerprintRings" transform="scale(0.5) rotate(-15)"/>
                  </g>
                  <g transform="translate(140,220)">
                    <use href="#fingerprintRings" transform="scale(0.4) rotate(60)"/>
                  </g>
                  
                  {/* Additional fingerprint details */}
                  <g opacity="0.3">
                    <circle cx="120" cy="100" r="15" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                    <circle cx="120" cy="100" r="10" fill="none" stroke="currentColor" strokeWidth="0.4"/>
                    <circle cx="190" cy="160" r="12" fill="none" stroke="currentColor" strokeWidth="0.4"/>
                    <circle cx="190" cy="160" r="8" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                    <circle cx="170" cy="240" r="10" fill="none" stroke="currentColor" strokeWidth="0.3"/>
                  </g>
                </svg>
              </div>
            </div>
            
            <div className="mission__cards">
              <div className="mission__cards-row">
                <div className="mission__card mission__card--vision">
                  <h3 className="mission__card-title">
                    OUR <span className="mission__card-accent">VISION</span>
                  </h3>
                  <p className="mission__card-content">
                    We envision a world where communities are empowered to break cycles of poverty and build sustainable futures. 
                    When people are equipped with basic needs and forward-looking tools, they drive innovation and create 
                    solutions to social challenges in their communities. Their collective action yields a better, 
                    fairer world for all.
                  </p>
                </div>

                <div className="mission__card mission__card--mission">
                  <h3 className="mission__card-title">
                    OUR <span className="mission__card-accent">MISSION</span>
                  </h3>
                  <p className="mission__card-content">
                    Our mission is to mobilize collaborative partnerships that empower communities with both 
                    immediate support and long-term tools for independence. Through our dual approach of 
                    addressing basic needs while building pathways to economic freedom, we create sustainable 
                    change that transforms lives and strengthens communities.
                  </p>
                </div>
              </div>

              <div className="mission__card mission__card--goals mission__card--full-width">
                <h3 className="mission__card-title">
                  OUR <span className="mission__card-accent">GOALS</span>
                </h3>
                <p className="mission__card-content">
                  At Legacy Global Foundation, we increase equitable access to opportunity for individuals and families 
                  in underserved communities. To do this, we work alongside a network of global and local partners, 
                  organizations, and communities to build intentionally designed collaborative models that are conducive 
                  for sustainable growth and lasting positive change.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* focus Section */}
        <section id="focus" className="focus">
          <div className="focus__container">
            <div className="focus__header">
              <h2 className="focus__title">
                GET TO <span className="focus__title-accent">KNOW US</span>
              </h2>
              <div className="focus__title-line"></div>
              <p className="focus__description">
                Did you know that we regularly share our impact stories? We document our community work, 
                partnership successes, and the real change happening in communities via our updates and stories. 
                Learn more about our work below or visit our social channels to see more.
              </p>
            </div>

            {/* Founders Quotes Section */}
            <div className="focus__founders">
              <h3 className="focus__founders-title">WORDS FROM OUR FOUNDERS</h3>
              <p className="focus__founders-subtitle">Meet the visionary leaders driving our mission forward</p>
              <div className="focus__founders-grid">
                <div className="focus__founder">
                  <blockquote className="focus__founder-quote">
                    "The best way to find yourself is to lose yourself in the service of others."
                  </blockquote>
                  <div className="focus__founder-info">
                    <h4 className="focus__founder-name">Sarah Johnson</h4>
                    <p className="focus__founder-title">Co-Founder & CEO</p>
                    <a 
                      href="https://linkedin.com/in/sarahjohnson" 
                      className="focus__founder-linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View LinkedIn Profile
                    </a>
                  </div>
                </div>

                <div className="focus__founder">
                  <blockquote className="focus__founder-quote">
                    "Education is the most powerful weapon which you can use to change the world."
                  </blockquote>
                  <div className="focus__founder-info">
                    <h4 className="focus__founder-name">Michael Chen</h4>
                    <p className="focus__founder-title">Co-Founder & Director</p>
                    <a 
                      href="https://linkedin.com/in/michaelchen" 
                      className="focus__founder-linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View LinkedIn Profile
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="focus__content">
              {/* Basic Needs Focus Area */}
              <div className="focus__item">
                <div className="focus__item-media">
                  <img 
                    src="/children-santiser.jpg" 
                    alt="Basic Needs Support Program" 
                    className="focus__item-image"
                  />
                </div>
                <div className="focus__item-content">
                  <h3 className="focus__item-title">
                    SUPPORTING <span className="focus__item-accent">BASIC NEEDS</span>
                  </h3>
                  <div className="focus__item-line"></div>
                  <p className="focus__item-description">
                    Legacy Global Foundation partners with Ripple Beams Legacy to provide essential support 
                    for daily life. Our Basic Needs initiative ensures families have access to nutritious meals, 
                    personal hygiene supplies, and emergency assistance. We believe that addressing immediate needs 
                    creates the foundation for long-term growth and community development.
                  </p>
                  <p className="focus__item-quote">
                    "When basic needs are met, families can focus on building their future and creating 
                    opportunities for themselves and their community," says our Partnership Director.
                  </p>
                </div>
              </div>

              {/* Forward Tools Focus Area */}
              <div className="focus__item focus__item--reverse">
                <div className="focus__item-content">
                  <h3 className="focus__item-title">
                    BUILDING <span className="focus__item-accent">FORWARD TOOLS</span>
                  </h3>
                  <div className="focus__item-line"></div>
                  <p className="focus__item-description">
                    Through our partnership with LineaBlu Lawyers, we provide pro bono legal support, 
                    business development guidance, and financial literacy education. Our Forward Tools 
                    initiative focuses on building pathways to independence and economic empowerment 
                    for individuals and families in our partner communities.
                  </p>
                  <p className="focus__item-quote">
                    "Education and empowerment are the keys to transforming communities. The higher the level 
                    of support and tools we provide, the higher chance people have of creating a sustainable 
                    future for themselves and collectively, a stronger community."
                  </p>
                </div>
                <div className="focus__item-media">
                  <img 
                    src="/children-school.jpg" 
                    alt="Forward Tools Development Program" 
                    className="focus__item-image"
                  />
                </div>
              </div>

              {/* Collaborative Impact */}
              <div className="focus__item">
                <div className="focus__item-media">
                  <img 
                    src="/family.jpg" 
                    alt="Collaborative Community Impact" 
                    className="focus__item-image"
                  />
                </div>
                <div className="focus__item-content">
                  <h3 className="focus__item-title">
                    COLLABORATIVE <span className="focus__item-accent">IMPACT</span>
                  </h3>
                  <div className="focus__item-line"></div>
                  <p className="focus__item-description">
                    Our Collaborative Contribution Model ensures that every partnership creates maximum 
                    impact through transparent, results-driven co-investment. We work alongside our partners 
                    to double the impact, reaching more families with shared purpose and measurable outcomes 
                    that strengthen entire communities.
                  </p>
                  <p className="focus__item-quote">
                    "Legacy Global Foundation exists because we have seen the gap, and we are committed 
                    to becoming part of the bridge that connects immediate needs with long-term opportunity."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section id="partnership" className="partnership">
          <div className="partnership__container">
            <div className="partnership__header">
              <h2>Collaborative Contribution Model</h2>
              <p className="partnership__header-subtitle">Strategic partnerships for maximum impact</p>
              <p className="partnership__header-description">
                We don't solicit donations. Instead, we invite strategic partners to join our transparent, 
                results-driven co-investment approach that creates real change in communities.
              </p>
            </div>

            <div className="partnership__philosophy">
              <p>
                Legacy Global Foundation operates on a <strong>Collaborative Contribution Model</strong> designed 
                for transparent, results-driven co-investment in community outcomes. This approach creates maximum 
                impact and establishes partners as active contributors to social change.
              </p>
            </div>

            <div className="partnership__steps">
              <h3 className="partnership__steps-title">The Three Steps to Collaboration</h3>
              <div className="partnership__steps-grid">
                <div className="partnership__step">
                  <div className="partnership__step-number">1</div>
                  <h4 className="partnership__step-title">WE INVEST FIRST</h4>
                  <p className="partnership__step-description">
                    We initiate the partnership by committing a defined investment (groceries, essential supplies, 
                    legal time, or goods) derived from our founding partners.
                  </p>
                </div>
                
                <div className="partnership__step">
                  <div className="partnership__step-number">2</div>
                  <h4 className="partnership__step-title">YOU JOIN US</h4>
                  <p className="partnership__step-description">
                    We invite our partners to match a portion of this investment through products, services, 
                    or equivalent value contributions. This is targeted collaboration, not general donation.
                  </p>
                </div>
                
                <div className="partnership__step">
                  <div className="partnership__step-number">3</div>
                  <h4 className="partnership__step-title">TOGETHER WE DOUBLE THE IMPACT</h4>
                  <p className="partnership__step-description">
                    This co-investment maximizes resources, increases efficiency, and allows us to reach 
                    significantly more families with a shared sense of purpose.
                  </p>
                </div>
              </div>
            </div>

            <div className="partnership__advantages">
              <h3 className="partnership__advantages-title">The Advantage of This Model</h3>
              <div className="partnership__advantages-grid">
                <div className="partnership__advantage">
                  <h4 className="partnership__advantage-title">Transparency</h4>
                  <p className="partnership__advantage-description">
                    Every contribution is directly tied to a specific outcome or resource commitment.
                  </p>
                </div>
                
                <div className="partnership__advantage">
                  <h4 className="partnership__advantage-title">Results-Driven</h4>
                  <p className="partnership__advantage-description">
                    Focus is placed on tangible outputs, such as units of food delivered or hours of legal support provided.
                  </p>
                </div>
                
                <div className="partnership__advantage">
                  <h4 className="partnership__advantage-title">Maximization</h4>
                  <p className="partnership__advantage-description">
                    We ensure the efficiency and reach of every resource is maximized for greatest impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Partners Logos Section */}
            <div className="partnership__partners">
              <h3 className="partnership__partners-title">MEET OUR PARTNERS</h3>
              <p className="partnership__partners-subtitle">
                Our success lies in cross-sector coordination between the non-profit, corporate, 
                and government. We achieve community-wide progress through our partnerships 
                by working together towards a common goal.
              </p>
              <div className="partnership__partners-logos">
                <div className="partnership__partner-logo">
                  <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Google</title>
                    {/* Google Logo SVG */}
                    <path d="M71.8 35.8c0-2.4-.2-4.7-.6-6.9H36.2v13.1h20c-.9 4.6-3.5 8.5-7.4 11.1v9.2h12c7-6.5 11-16 11-26.5z" fill="#4285f4"/>
                    <path d="M36.2 70.4c10 0 18.4-3.3 24.5-9l-12-9.2c-3.3 2.2-7.5 3.5-12.5 3.5-9.6 0-17.7-6.5-20.6-15.2h-12.4v9.5c6.1 12.1 18.6 20.4 33 20.4z" fill="#34a853"/>
                    <path d="M15.6 41.5c-.8-2.2-1.2-4.6-1.2-7s.4-4.8 1.2-7v-9.5H3.2C1.2 24.6 0 29.1 0 34.5s1.2 9.9 3.2 16.5l12.4-9.5z" fill="#fbbc04"/>
                    <path d="M36.2 13.7c5.4 0 10.3 1.9 14.1 5.6l10.6-10.6C54.6 3.1 46.2 0 36.2 0 21.8 0 9.3 8.3 3.2 18l12.4 9.5c2.9-8.7 11-15.2 20.6-15.2z" fill="#ea4335"/>
                  </svg>
                </div>
                <div className="partnership__partner-logo">
                  <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>PKF Octagon</title>
                    {/* PKF Octagon Logo SVG */}
                    <polygon points="25,15 45,15 55,25 55,45 45,55 25,55 15,45 15,25" fill="#FF8800" stroke="#4C2A70" strokeWidth="2"/>
                    <text x="35" y="38" fill="#4C2A70" fontSize="12" fontWeight="bold" textAnchor="middle">PKF</text>
                    <text x="70" y="28" fill="#36332C" fontSize="14" fontWeight="bold">OCTAGON</text>
                    <text x="70" y="42" fill="#36332C" fontSize="10">Professional Services</text>
                  </svg>
                </div>
                <div className="partnership__partner-logo">
                  <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Microsoft</title>
                    {/* Microsoft Logo SVG */}
                    <rect x="15" y="15" width="12" height="12" fill="#f25022"/>
                    <rect x="30" y="15" width="12" height="12" fill="#7fba00"/>
                    <rect x="15" y="30" width="12" height="12" fill="#00a4ef"/>
                    <rect x="30" y="30" width="12" height="12" fill="#ffb900"/>
                    <text x="50" y="30" fill="#36332C" fontSize="16" fontWeight="600">Microsoft</text>
                    <text x="50" y="42" fill="#36332C" fontSize="8" opacity="0.8">Technology Partner</text>
                  </svg>
                </div>
                <div className="partnership__partner-logo">
                  <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>Education Department Gauteng</title>
                    {/* Education Department Logo SVG */}
                    <circle cx="25" cy="35" r="15" fill="#FF8800" opacity="0.2"/>
                    <path d="M20 28h10l-2 4h-6l-2-4zm2 6h6v8h-6v-8z" fill="#4C2A70"/>
                    <circle cx="25" cy="25" r="2" fill="#4C2A70"/>
                    <text x="45" y="28" fill="#36332C" fontSize="11" fontWeight="bold">EDUCATION DEPT</text>
                    <text x="45" y="38" fill="#36332C" fontSize="9">Gauteng Province</text>
                    <text x="45" y="47" fill="#36332C" fontSize="7" opacity="0.7">Government Partner</text>
                  </svg>
                </div>
                <div className="partnership__partner-logo">
                  <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>JPCCC</title>
                    {/* JPCCC Logo SVG */}
                    <rect x="15" y="20" width="25" height="25" rx="3" fill="#4C2A70" opacity="0.1"/>
                    <text x="27.5" y="35" fill="#4C2A70" fontSize="14" fontWeight="bold" textAnchor="middle">JP</text>
                    <text x="50" y="28" fill="#36332C" fontSize="16" fontWeight="bold">JPCCC</text>
                    <text x="50" y="40" fill="#36332C" fontSize="10">Community Centre</text>
                    <text x="50" y="50" fill="#36332C" fontSize="8" opacity="0.7">Local Partner</text>
                  </svg>
                </div>
                <div className="partnership__partner-logo">
                  <svg width="140" height="70" viewBox="0 0 140 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <title>JM Learning Centre</title>
                    {/* JM Learning Centre Logo SVG */}
                    <circle cx="25" cy="30" r="12" fill="#FF8800" opacity="0.2"/>
                    <path d="M20 26v8m5-8v8m5-4h-8" stroke="#4C2A70" strokeWidth="2" fill="none"/>
                    <circle cx="25" cy="22" r="2" fill="#4C2A70"/>
                    <text x="45" y="28" fill="#36332C" fontSize="14" fontWeight="bold">JM Learning</text>
                    <text x="45" y="40" fill="#36332C" fontSize="12">Centre</text>
                    <text x="45" y="50" fill="#36332C" fontSize="8" opacity="0.7">Education Partner</text>
                  </svg>
                </div>
              </div>
            </div>

            <div className="partnership__cta">
              <a href="#contact" className="partnership__cta-button">
                Start a Partnership
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact">
          <div className="contact__container">
            <div className="contact__content">
              <div className="contact__main">
                <h2 className="contact__title">Get In Touch</h2>
                <p className="contact__subtitle">Ready to create impact together ?</p>
                
                <div className="contact__info-grid">
                  <div className="contact__info-item">
                    <div className="contact__info-icon">✉</div>
                    <div className="contact__info-details">
                      <h4>Email Us</h4>
                      <a href="mailto:info@legacyglobalfoundation.com">
                        info@legacyglobalfoundation.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact__info-item">
                    <div className="contact__info-icon">🤝</div>
                    <div className="contact__info-details">
                      <h4>Partnership Focus</h4>
                      <p>Collaborative contributions, not donations</p>
                    </div>
                  </div>
                  
                  <div className="contact__info-item">
                    <div className="contact__info-icon">⏱</div>
                    <div className="contact__info-details">
                      <h4>Response Time</h4>
                      <p>2-3 business days</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact__form">
                <h3>Send Message</h3>
                <form className="contact__form-grid">
                  <input 
                    type="text" 
                    placeholder="Full Name"
                    required 
                  />
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    required 
                  />
                  <input 
                    type="text" 
                    placeholder="Organization (Optional)"
                  />
                  <input 
                    type="text" 
                    placeholder="Subject"
                    required 
                  />
                  <textarea 
                    placeholder="Tell us about your collaboration proposal..."
                    className="contact__form-message"
                    required
                  ></textarea>
                  <button type="submit" className="contact__form-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;