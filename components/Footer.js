'use client';

import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>WebResume</h3>
            <p>A modern platform showcasing professional work experience.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/#experience">Experience</a></li>
              <li><a href="/#about">About</a></li>
              <li><a href="mailto:contact@example.com">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} All rights reserved. Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
