import Experience from "@/components/Experience";
import "./page.css";

export default function Home() {
  return (
    <main className="main-content">
      <section className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1>Gopal Jadhav</h1>
            <p>QA Automation Engineer | Selenium • Java • TestNG • API Automation</p>
            <p className="location">📍 Pune, Maharashtra | 📧 gopaljadhav4657@gmail.com | 📱 +91-8999727194</p>
            <a href="#experience" className="cta-button">View My Experience</a>
          </div>
          <div className="hero-right">
            <img src="/profile.jpg" alt="Gopal Jadhav" className="hero-photo" />
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about-container">
          <h2>About</h2>
          <p>
            QA Automation Engineer with 5 years of experience in Manual and Automation Testing 
            across Education, Telecom, and E-commerce domains. Expertise in Selenium WebDriver, Java, 
            TestNG, REST Assured, and SQL, with strong experience in Page Object Model and Data-Driven Frameworks.
          </p>
          <p>
            Proven ability to reduce regression execution time by 60% and deliver high-quality software 
            in Agile environments. Skilled in test automation, API testing, and comprehensive test coverage 
            to ensure robust software solutions.
          </p>
        </div>
      </section>

      <Experience />
    </main>
  );
}
