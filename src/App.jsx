import './App.css'

function App() {
  return (
    <>
      <nav className="navbar glass-panel">
        <div className="nav-content container">
          <h2 className="logo">Mark.</h2>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#certifications">Certifications</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container animate-fade-in">
        <section id="hero" className="hero-section">
          <img src="/profile.jpg" alt="Mark Angel Guevarra" className="profile-pic" />
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

        <section id="about" className="about-section">
          <div className="about-content glass-panel">
            <h2 className="section-title">About Me</h2>
            <p>
              Welcome! I'm <strong>Mark Angel Guevarra</strong>, a passionate Information Technology professional specializing in Cybersecurity, Network Administration, and IT Automation. With a strong foundation in building secure, scalable systems, I thrive at the intersection of infrastructure and innovation.
            </p>
            <p>
              I hold a Bachelor of Science in Information Technology and am driven by continuous learning—having earned 18 industry-recognized certifications from tech leaders like <strong>Google, Cisco, AWS, and Microsoft</strong>. Whether it's defending networks against emerging threats, automating complex workflows with Python, or engineering cloud solutions, I am dedicated to creating secure and highly efficient digital environments.
            </p>
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
          <h2 className="section-title">Featured Certifications ({18})</h2>
          <div className="certs-grid">
            
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
              <img src="/certs/microsoft.png" alt="Microsoft Office Specialist" className="cert-image" />
              <div className="cert-header">
                <h3>Microsoft Office Specialist: Excel Associate</h3>
                <span className="cert-issuer">Microsoft</span>
              </div>
            </div>
            
            <div className="cert-card glass-panel">
              <img src="/certs/cisco-cyber.png" alt="Introduction to Cybersecurity" className="cert-image" />
              <div className="cert-header">
                <h3>Introduction to Cybersecurity</h3>
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
              <img src="/certs/cisco-networking.png" alt="Networking Basics" className="cert-image" />
              <div className="cert-header">
                <h3>Networking Basics</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/cisco-os-basics.png" alt="Operating Systems Basics" className="cert-image" />
              <div className="cert-header">
                <h3>Operating Systems Basics</h3>
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
              <img src="/certs/cisco-ai.png" alt="Introduction to Modern AI" className="cert-image" />
              <div className="cert-header">
                <h3>Introduction to Modern AI</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/cisco-iot.png" alt="Introduction to IoT" className="cert-image" />
              <div className="cert-header">
                <h3>Introduction to IoT</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/cisco-data-science.png" alt="Introduction to Data Science" className="cert-image" />
              <div className="cert-header">
                <h3>Introduction to Data Science</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/cisco-digital-awareness.png" alt="Digital Awareness" className="cert-image" />
              <div className="cert-header">
                <h3>Digital Awareness</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/cisco-data-analytics.png" alt="Data Analytics Essentials" className="cert-image" />
              <div className="cert-header">
                <h3>Data Analytics Essentials</h3>
                <span className="cert-issuer">Cisco</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/fit-academy.png" alt="FIT Academy Database Management" className="cert-image" />
              <div className="cert-header">
                <h3 style={{fontSize: '1rem'}}>Smartbooks & Power BI DBMS</h3>
                <span className="cert-issuer">FIT</span>
              </div>
            </div>

            <div className="cert-card glass-panel">
              <img src="/certs/eastwest-cyber.png" alt="East West Cybersecurity 1" className="cert-image" />
              <div className="cert-header">
                <h3 style={{fontSize: '1rem'}}>Introduction to Cybersecurity 1</h3>
                <span className="cert-issuer">East West</span>
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
