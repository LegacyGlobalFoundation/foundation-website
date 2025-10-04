import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import { NavigationItem } from './components/Navigation/Navigation.types';
import './styles/main.scss';

// Navigation items based on the specifications
const navigationItems: NavigationItem[] = [
  { id: 'mission', label: 'Our Story', href: '#mission' },
  { id: 'pillars', label: 'Pillars', href: '#pillars' },
  { id: 'partnership', label: 'Partnership', href: '#partnership' },
  { id: 'contact', label: 'Contact Us', href: '#contact' }
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
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
              Reaching Forward. Giving Chances.
            </h1>
            <p className="hero__subheading">
              We are the bridge between immediate need and lasting opportunity, 
              connecting communities with the resources and tools they need to build 
              sustainable futures together.
            </p>
            <div className="hero__cta">
              <a href="#mission" className="hero__button hero__button--primary">
                Learn More
              </a>
              <a href="#partnership" className="hero__button hero__button--secondary">
                Get Involved
              </a>
            </div>
          </div>
          <div className="hero__scroll-indicator">
            Scroll to explore
          </div>
        </section>

        {/* Mission Section */}
        <section id="mission" className="mission">
          <div className="mission__container">
            <div className="mission__header">
              <h2 className="mission__title">Our Story</h2>
              <p className="mission__subtitle">Bridging the Legacy Gap</p>
            </div>
            
            <div className="mission__content">
              <p className="mission__intro">
                Legacy Global Foundation is born from two essential perspectives that define the human condition we aim to address:
              </p>
              
              <div className="mission__perspectives">
                <div className="mission__perspective">
                  <p>
                    A lived understanding of what it means to grow up without consistent access to care, nourishment, or a reliable support system; and,
                  </p>
                </div>
                
                <div className="mission__perspective">
                  <p>
                    Appreciating the desires of so many for economic freedom, but lacking the necessary structural tools and guidance on how to secure that freedom.
                  </p>
                </div>
              </div>
              
              <div className="mission__closing">
                <p>
                  This foundation is about reaching forward and giving chances, no matter the background or backstory. We believe there is always a way to rise and take one step toward a future that is healthy and full of opportunities to achieve dreams.
                </p>
                <span className="mission__closing-highlight">
                  Legacy Global Foundation exists because we have seen the gap, and we are committed to becoming part of the bridge.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section id="pillars" className="pillars">
          <div className="pillars__container">
            <div className="pillars__header">
              <h2>Our Two Pillars</h2>
              <p className="pillars__header-subtitle">Foundation for lasting change</p>
              <p className="pillars__header-description">
                We believe in addressing immediate needs while building pathways to independence. 
                Our dual approach ensures comprehensive support for every individual and family we serve.
              </p>
            </div>
            
            <div className="pillars__grid">
              <div className="pillars__pillar pillars__pillar--basic-needs">
                <div className="pillars__pillar-header">
                  <span className="pillars__pillar-icon">🔗</span>
                  <div>
                    <h3 className="pillars__pillar-title">Basic Needs</h3>
                    <p className="pillars__pillar-subtitle">Essential support for daily life</p>
                  </div>
                </div>
                
                <div className="pillars__pillar-partner">
                  <p><strong>Partner:</strong> Ripple Beams Legacy - Community-focused organization dedicated to sustainable impact</p>
                </div>

                <ul className="pillars__pillar-features">
                  <li className="pillars__pillar-feature">
                    <span className="pillars__pillar-feature-icon"></span>
                    <div className="pillars__pillar-feature-content">
                      <h4>Comprehensive Nutrition Programs</h4>
                      <p>Nutritious meals, food pantries, and educational workshops on healthy cooking and meal planning</p>
                    </div>
                  </li>
                  <li className="pillars__pillar-feature">
                    <span className="pillars__pillar-feature-icon"></span>
                    <div className="pillars__pillar-feature-content">
                      <h4>Personal Hygiene Kits</h4>
                      <p>Essential hygiene supplies and health education resources to maintain dignity and wellness</p>
                    </div>
                  </li>
                  <li className="pillars__pillar-feature">
                    <span className="pillars__pillar-feature-icon"></span>
                    <div className="pillars__pillar-feature-content">
                      <h4>Essential Goods Distribution</h4>
                      <p>Clothing, household items, and emergency supplies delivered with compassion and respect</p>
                    </div>
                  </li>
                  <li className="pillars__pillar-feature">
                    <span className="pillars__pillar-feature-icon"></span>
                    <div className="pillars__pillar-feature-content">
                      <h4>Emergency Assistance</h4>
                      <p>Rapid response support for urgent situations including temporary shelter and crisis intervention</p>
                    </div>
                  </li>
                  <li className="pillars__pillar-feature">
                    <span className="pillars__pillar-feature-icon"></span>
                    <div className="pillars__pillar-feature-content">
                      <h4>Community Wellness Programs</h4>
                      <p>Mental health support, stress management workshops, and peer support groups</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pillars__pillar pillars__pillar--forward-tools">
                <div className="pillars__pillar-header">
                  <span className="pillars__pillar-icon">🛠️</span>
                  <div>
                    <h3 className="pillars__pillar-title">Forward Tools</h3>
                    <p className="pillars__pillar-subtitle">Building pathways to independence</p>
                  </div>
                </div>
                
                <div className="pillars__pillar-partner">
                  <p><strong>Partner:</strong> LineaBlu Lawyers - Legal expertise dedicated to empowering communities through accessible justice</p>
                </div>

                <ul className="pillars__pillar-features">
                  <li className="pillars__pillar-feature">
                    <span className="pillars__pillar-feature-icon"></span>
                    <div className="pillars__pillar-feature-content">
                      <h4>Pro Bono Legal Support</h4>
                      <p>Free legal consultations, document preparation, and representation for essential legal matters</p>
                    </div>
                  </li>
                  <li className="pillars__pillar-feature">
                    <span className="pillars__pillar-feature-icon"></span>
                    <div className="pillars__pillar-feature-content">
                      <h4>Business Development Guidance</h4>
                      <p>Entrepreneurship training, business plan development, and startup mentorship programs</p>
                    </div>
                  </li>
                  <li className="pillars__pillar-feature">
                    <span className="pillars__pillar-feature-icon"></span>
                    <div className="pillars__pillar-feature-content">
                      <h4>Tailored Learning Modules</h4>
                      <p>Skills training, professional development, and certification programs aligned with market needs</p>
                    </div>
                  </li>
                  <li className="pillars__pillar-feature">
                    <span className="pillars__pillar-feature-icon"></span>
                    <div className="pillars__pillar-feature-content">
                      <h4>Financial Literacy Education</h4>
                      <p>Budget management, credit building, investment basics, and long-term financial planning</p>
                    </div>
                  </li>
                  <li className="pillars__pillar-feature">
                    <span className="pillars__pillar-feature-icon"></span>
                    <div className="pillars__pillar-feature-content">
                      <h4>Career Development Support</h4>
                      <p>Resume building, interview preparation, job placement assistance, and professional networking</p>
                    </div>
                  </li>
                </ul>
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
            <div className="contact__header">
              <h2>Get In Touch</h2>
              <p className="contact__header-subtitle">Start a collaboration</p>
              <p className="contact__header-description">
                Ready to join our Collaborative Contribution Model? Reach out to explore how we can 
                create meaningful impact together.
              </p>
            </div>

            <div className="contact__content">
              <div className="contact__info">
                <h3 className="contact__info-title">Contact Information</h3>
                
                <div className="contact__info-item">
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@legacyglobalfoundation.com">
                      info@legacyglobalfoundation.com
                    </a>
                  </p>
                </div>

                <div className="contact__info-item">
                  <h4>Partnership Inquiries</h4>
                  <p>
                    For strategic partnerships and collaborative contributions, please include details 
                    about your organization and proposed collaboration in your message.
                  </p>
                </div>

                <div className="contact__info-item">
                  <h4>Response Time</h4>
                  <p>
                    We typically respond to partnership inquiries within 2-3 business days. 
                    Thank you for your interest in creating positive change together.
                  </p>
                </div>
              </div>

              <div className="contact__form">
                <h3 className="contact__form-title">Send us a message</h3>
                <form>
                  <div className="contact__form-group">
                    <label htmlFor="name">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Your full name"
                      required 
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="your.email@example.com"
                      required 
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="organization">Organization (Optional)</label>
                    <input 
                      type="text" 
                      id="organization" 
                      name="organization" 
                      placeholder="Your organization name"
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject" 
                      placeholder="Partnership inquiry, collaboration proposal, etc."
                      required 
                    />
                  </div>

                  <div className="contact__form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your organization and how you'd like to collaborate with Legacy Global Foundation..."
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="contact__form-button">
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="contact__disclaimer">
              <p>
                <strong>Important:</strong> Legacy Global Foundation operates on a Collaborative Contribution Model. 
                We do not accept traditional donations or process unsolicited funding requests.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;