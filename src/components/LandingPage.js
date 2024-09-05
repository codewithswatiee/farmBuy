import React from 'react';
import './LandingPage.css'; // Import the CSS file

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <a className="logo" href="#"><span className='agro'>Agro</span>Bond
        </a>
        <nav className="nav">
          <button className='btn-primary'>Sign Up</button>
        </nav>
      </header>

      <main className="main">
      <section className="landing-section">
      <h1 className="landing-title">Connect with Local Farmers, Easily</h1>
      <div className="landing-container">
        <div className="landing-grid">
        <img
            src="/landingPage.png"
            alt="Hero"
            width="550"
            height="550"
            className="landing-image"
          />
          <div className="landing-content">
            <div className="landing-header">
              <p className="landing-subtitle">
              AgroBond is the premier platform for connecting local farmers with buyers who want fresh, high-quality produce. Streamline your supply chain and support your community by sourcing the best local produce available.
              </p>
            </div>
            <div className="landing-buttons">
              <button className='btn-primary'>Sign Up</button>
              <button className='btn-secondary'>Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>

        <section className="features-section">
          <div className="features-grid">
            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feature-icon"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
                <path d="M15 18H9"></path>
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
                <circle cx="17" cy="18" r="2"></circle>
                <circle cx="7" cy="18" r="2"></circle>
              </svg>
              <h3 className="feature-title">Streamlined Logistics</h3>
              <p className="feature-description">
                Our platform makes it easy to streamline your supply chain and manage your logistics.
              </p>
            </div>
            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feature-icon"
              >
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
              </svg>
              <h3 className="feature-title">Fresh, Local Produce</h3>
              <p className="feature-description">
                Connect with local farmers to source the freshest, highest quality produce for your business or customers.
              </p>
            </div>
            <div className="feature-item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feature-icon"
              >
                <line x1="12" x2="12" y1="2" y2="22"></line>
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
              </svg>
              <h3 className="feature-title">Fair Pricing</h3>
              <p className="feature-description">Our transparent pricing model ensures fair prices for all.</p>
            </div>
          </div>
        </section>

        <section className="testimonials-section">
          <div className="testimonials-content">
            <div className="text-center">
              <h2 className="testimonials-title">What Our Customers Say</h2>
              <p className="testimonials-subtitle">Hear from the farmers and buyers who trust Farmr.</p>
            </div>
            <div className="testimonials-grid">
              <div className="testimonial-item">
                <div className="testimonial-author">
                  <span className="author-avatar">JD</span>
                  <div>
                    <h4 className="author-name">John Doe</h4>
                    <p className="author-role">Farmer</p>
                  </div>
                </div>
                <p className="testimonial-text">"Farmr has been a game-changer for me as a local farmer."</p>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-author">
                  <span className="author-avatar">SM</span>
                  <div>
                    <h4 className="author-name">Sarah Miller</h4>
                    <p className="author-role">Restaurant Owner</p>
                  </div>
                </div>
                <p className="testimonial-text">"I love using Farmr to connect with local farmers."</p>
              </div>
              <div className="testimonial-item">
                <div className="testimonial-author">
                  <span className="author-avatar">TW</span>
                  <div>
                    <h4 className="author-name">Tom Wilson</h4>
                    <p className="author-role">Grocery Store Owner</p>
                  </div>
                </div>
                <p className="testimonial-text">
                  "Farmr has been a game-changer for my grocery store. I can easily connect with local farmers and offer
                  my customers the freshest, most high-quality produce."
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-content">
            <div className="text-center">
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-subtitle">Sign up today to start connecting with local farmers and buyers.</p>
            </div>
            <div className="cta-buttons">
              <a href="#" className="btn-primary">
                Sign Up
              </a>
              <a href="#" className="btn-secondary">
                Learn More
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">© 2023 AgroBond. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
