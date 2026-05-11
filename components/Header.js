'use client';

import Link from 'next/link';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo">
          <img
            src="/profile.jpg"
            alt="Profile photo of Gopal Jadhav"
            className="profile-photo"
            onError={(e) => { e.currentTarget.src = '/profile.svg'; }}
          />
          <Link href="/">
            <div className="header-title">
              <h1>Gopal Jadhav</h1>
              <p className="subtitle">QA Automation Engineer</p>
            </div>
          </Link>
        </div>
        <nav className="header-nav">
          <Link href="/">Home</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/#about">About</Link>
          <a href="mailto:gopaljadhav4657@gmail.com">Contact</a>
        </nav>
      </div>
    </header>
  );
}
