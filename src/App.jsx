import './App.css'

function App() {
  return (
    <>
      <nav className="navbar glass-panel">
        <div className="nav-content container">
          <h2 className="logo">Mark.</h2>
          <div className="nav-links">
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container animate-fade-in">
        <section id="hero" className="hero-section">
          <h1 className="hero-title">
            Hi, I'm <span className="highlight-cyan">Mark Angel</span>.<br/>
            I build <span className="highlight-purple">Secure & Automated</span> Systems.
          </h1>
          <p className="hero-subtitle">
            Bachelor of Science in Information Technology | Network Administrator | Cisco Certified | Cybersecurity Analyst
          </p>
          <div className="hero-cta">
            <a href="#certifications" className="btn-primary">View Credentials</a>
            <a href="https://github.com/Markyy0411" target="_blank" rel="noreferrer" className="btn-secondary">GitHub Profile</a>
          </div>
        </section>

        <section id="skills" className="skills-section">
          <h2 className="section-title">Technical Expertise</h2>
          <div className="skills-grid">
            <div className="skill-card glass-panel">
              <div className="skill-icon">🛡️</div>
              <h3>Security & Networks</h3>
              <p>Cybersecurity, Cisco Networking, Ethical Hacking, IAM, Firewall Configuration</p>
            </div>
            <div className="skill-card glass-panel">
              <div className="skill-icon">⚙️</div>
              <h3>Automation & Coding</h3>
              <p>Python, Bash, Git, IT Automation</p>
            </div>
            <div className="skill-card glass-panel">
              <div className="skill-icon">☁️</div>
              <h3>Infrastructure</h3>
              <p>Linux Administration, AWS Cloud Operations, IoT</p>
            </div>
            <div className="skill-card glass-panel">
              <div className="skill-icon">📊</div>
              <h3>Data & Analytics</h3>
              <p>Data Science, Power BI, SQL</p>
            </div>
          </div>
        </section>

        <section id="certifications" className="certs-section">
          <h2 className="section-title">Featured Certifications</h2>
          <div className="certs-grid">
            <div className="cert-card glass-panel">
              <div className="cert-header">
                <h3>Google IT Automation with Python</h3>
                <span className="cert-issuer">Google</span>
              </div>
              <p>Official certificate demonstrating proficiency in Python, Git, and IT automation.</p>
            </div>
            <div className="cert-card glass-panel">
              <div className="cert-header">
                <h3>Google Cybersecurity Professional</h3>
                <span className="cert-issuer">Google</span>
              </div>
              <p>Hands-on experience with fundamental cybersecurity concepts, including Linux, SQL, SIEM tools, and network security.</p>
            </div>
            <div className="cert-card glass-panel">
              <div className="cert-header">
                <h3>AWS Academy Cloud Operations</h3>
                <span className="cert-issuer">AWS</span>
              </div>
              <p>Completed the AWS Academy Cloud Operations course and hands-on labs.</p>
            </div>
            <div className="cert-card glass-panel">
              <div className="cert-header">
                <h3>Ethical Hacker</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
              <p>Network architecture and penetration testing basics.</p>
            </div>
            <div className="cert-card glass-panel">
              <div className="cert-header">
                <h3>Linux Essentials</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
              <p>Linux administration, command line, and server management.</p>
            </div>
            <div className="cert-card glass-panel">
              <div className="cert-header">
                <h3>IT Essentials</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
              <p>Computer Hardware Troubleshooting and configuration.</p>
            </div>
          </div>
        </section>
      </main>
      
      <footer id="contact" className="footer glass-panel">
        <div className="container footer-content">
          <div className="footer-cta">
            <h2>Ready to secure the future?</h2>
            <a href="mailto:marcangelguevarra@gmail.com" className="btn-primary">Get in Touch</a>
          </div>
          <div className="footer-links">
            <a href="https://www.linkedin.com/in/mark-angel-guevarra/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.credly.com/users/marc-angel-guevarra" target="_blank" rel="noreferrer">Credly</a>
            <a href="https://github.com/Markyy0411" target="_blank" rel="noreferrer">GitHub</a>
          </div>
          <p className="copyright">© 2026 Mark Angel Guevarra. Designed for Stellar.</p>
        </div>
      </footer>
    </>
  )
}

export default App
