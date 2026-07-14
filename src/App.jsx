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
          <img src="/certs/profile.jpg" alt="Mark Angel Guevarra" className="profile-pic" />
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
              <embed src="/certs/microsoft.pdf#toolbar=0&navpanes=0&scrollbar=0" type="application/pdf" className="cert-image" />
              <div className="cert-header">
                <h3>Microsoft Certification</h3>
                <span className="cert-issuer">Microsoft</span>
              </div>
            </div>
            
            <div className="cert-card glass-panel">
              <img src="/certs/google-python.png" alt="Google IT Automation" className="cert-image" />
              <div className="cert-header">
                <h3>Google IT Automation with Python</h3>
                <span className="cert-issuer">Google</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/google-cyber.png" alt="Google Cybersecurity" className="cert-image" />
              <div className="cert-header">
                <h3>Google Cybersecurity Professional</h3>
                <span className="cert-issuer">Google</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/aws-cloud.png" alt="AWS Cloud Operations" className="cert-image" />
              <div className="cert-header">
                <h3>AWS Academy Cloud Operations</h3>
                <span className="cert-issuer">AWS</span>
              </div>
            </div>
            
            <div className="cert-card glass-panel">
              <img src="/certs/cisco-cyber.png" alt="Intro to Cybersecurity" className="cert-image" />
              <div className="cert-header">
                <h3>Intro to Cybersecurity</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/cisco-ethical.png" alt="Ethical Hacker" className="cert-image" />
              <div className="cert-header">
                <h3>Ethical Hacker</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/cisco-linux.png" alt="Linux Essentials" className="cert-image" />
              <div className="cert-header">
                <h3>Linux Essentials</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/cisco-networking.png" alt="Networking Devices" className="cert-image" />
              <div className="cert-header">
                <h3>Networking Devices & OS Basics</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/cisco-hardware.png" alt="Computer Hardware Basics" className="cert-image" />
              <div className="cert-header">
                <h3>Computer Hardware Basics</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/cisco-ite.png" alt="IT Essentials" className="cert-image" />
              <div className="cert-header">
                <h3>IT Essentials</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/cisco-ai.png" alt="Intro to Modern AI" className="cert-image" />
              <div className="cert-header">
                <h3>Intro to Modern AI & IoT</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/cisco-data-science.png" alt="Data Science" className="cert-image" />
              <div className="cert-header">
                <h3>Intro to Data Science</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
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
