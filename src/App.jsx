import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css'

const certData = [
  {
    id: 'google-python',
    title: 'Google IT Automation with Python',
    issuer: 'Google',
    image: '/certs/google-python.png',
    description: 'This six-course certificate, developed by Google, is designed to provide IT professionals with in-demand skills -- including Python, Git, and IT automation.',
    difficulty: 'Advanced',
    effort: 'Requires passing rigorous programming assignments, mastering version control with Git, and automating system administration tasks with Python scripts.'
  },
  {
    id: 'google-cyber',
    title: 'Google Cybersecurity Professional',
    issuer: 'Google',
    image: '/certs/google-cyber.png',
    description: 'A comprehensive program covering the fundamental concepts of cybersecurity, including network security, Linux, SQL, and SIEM tools.',
    difficulty: 'Intermediate',
    effort: 'Requires completing multiple hands-on labs simulating real-world security breaches, configuring firewalls, and analyzing packet captures.'
  },
  {
    id: 'aws-cloud',
    title: 'AWS Academy Cloud Operations',
    issuer: 'AWS',
    image: '/certs/aws-cloud.png',
    description: 'Prepares students for entry-level cloud computing careers, focusing on deploying, managing, and operating scalable systems on AWS.',
    difficulty: 'Advanced',
    effort: 'Requires a deep understanding of AWS services, networking, and security, proven through complex infrastructure deployment labs.'
  },
  {
    id: 'microsoft-excel',
    title: 'Microsoft Office Specialist: Excel Associate',
    issuer: 'Microsoft',
    image: '/certs/microsoft.png',
    description: 'Validates skills in creating and managing worksheets and workbooks, creating cells and ranges, creating tables, and applying formulas and functions.',
    difficulty: 'Intermediate',
    effort: 'Requires passing a strict, timed, proctored exam demonstrating mastery over advanced data manipulation and complex nested formulas.'
  },
  {
    id: 'cisco-cyber',
    title: 'Introduction to Cybersecurity',
    issuer: 'Cisco',
    image: '/certs/cisco-cyber.png',
    description: 'Explores cyber trends, threats, and staying safe in cyberspace, protecting personal and company data.',
    difficulty: 'Beginner',
    effort: 'Requires understanding core security principles, threat vectors, and basic mitigation strategies.'
  },
  {
    id: 'cisco-ethical',
    title: 'Ethical Hacker',
    issuer: 'Cisco',
    image: '/certs/cisco-ethical.png',
    description: 'Focuses on offensive security tactics to discover and patch vulnerabilities before malicious actors can exploit them.',
    difficulty: 'Advanced',
    effort: 'Requires passing intensive penetration testing labs, mastering reconnaissance, scanning, gaining access, and covering tracks.'
  },
  {
    id: 'cisco-linux',
    title: 'Linux Essentials',
    issuer: 'Cisco',
    image: '/certs/cisco-linux.png',
    description: 'Validates foundational knowledge in the Linux operating system and open-source software.',
    difficulty: 'Intermediate',
    effort: 'Requires navigating the Linux command line, managing files, understanding permissions, and basic bash scripting.'
  },
  {
    id: 'cisco-networking',
    title: 'Networking Basics',
    issuer: 'Cisco',
    image: '/certs/cisco-networking.png',
    description: 'Covers the architecture, structure, functions, components, and models of the Internet and other computer networks.',
    difficulty: 'Intermediate',
    effort: 'Requires understanding the OSI and TCP/IP models, IP addressing, and configuring basic network topologies.'
  },
  {
    id: 'cisco-os-basics',
    title: 'Operating Systems Basics',
    issuer: 'Cisco',
    image: '/certs/cisco-os-basics.png',
    description: 'Provides a foundational understanding of operating system configuration and management.',
    difficulty: 'Beginner',
    effort: 'Requires grasping process management, memory management, and file systems across Windows and Linux environments.'
  },
  {
    id: 'cisco-hardware',
    title: 'Computer Hardware Basics',
    issuer: 'Cisco',
    image: '/certs/cisco-hardware.png',
    description: 'Focuses on the internal components of a computer, assembling a system, and troubleshooting hardware issues.',
    difficulty: 'Beginner',
    effort: 'Requires identifying components, understanding their functions, and solving practical hardware failure scenarios.'
  },
  {
    id: 'cisco-ite',
    title: 'IT Essentials',
    issuer: 'Cisco',
    image: '/certs/cisco-ite.png',
    description: 'A comprehensive curriculum covering PC hardware and software, mobile devices, networking, and troubleshooting.',
    difficulty: 'Intermediate',
    effort: 'Requires passing extensive theoretical exams and practical labs covering hardware diagnostics and software configurations.'
  },
  {
    id: 'cisco-ai',
    title: 'Introduction to Modern AI',
    issuer: 'Cisco',
    image: '/certs/cisco-ai.png',
    description: 'Explores the foundations of Artificial Intelligence, Machine Learning, and their real-world applications.',
    difficulty: 'Intermediate',
    effort: 'Requires grasping the concepts of neural networks, data modeling, and ethical considerations in AI deployment.'
  },
  {
    id: 'cisco-iot',
    title: 'Introduction to IoT',
    issuer: 'Cisco',
    image: '/certs/cisco-iot.png',
    description: 'Covers the Internet of Things, transforming digital business by connecting billions of smart devices.',
    difficulty: 'Beginner',
    effort: 'Requires understanding IoT architectures, sensor networks, and data flow from edge devices to the cloud.'
  },
  {
    id: 'cisco-data-science',
    title: 'Introduction to Data Science',
    issuer: 'Cisco',
    image: '/certs/cisco-data-science.png',
    description: 'Provides a foundation in gathering, analyzing, and visualizing data to make informed decisions.',
    difficulty: 'Intermediate',
    effort: 'Requires applying statistical methods and utilizing Python libraries to extract insights from raw datasets.'
  },
  {
    id: 'cisco-digital-awareness',
    title: 'Digital Awareness',
    issuer: 'Cisco',
    image: '/certs/cisco-digital-awareness.png',
    description: 'Focuses on responsible and secure use of digital technologies in professional environments.',
    difficulty: 'Beginner',
    effort: 'Requires demonstrating proficiency in digital communication, privacy, and online safety best practices.'
  },
  {
    id: 'cisco-data-analytics',
    title: 'Data Analytics Essentials',
    issuer: 'Cisco',
    image: '/certs/cisco-data-analytics.png',
    description: 'Covers the fundamentals of data analysis, focusing on transforming data into actionable insights.',
    difficulty: 'Intermediate',
    effort: 'Requires building data pipelines, cleaning datasets, and generating comprehensive reports using analytics tools.'
  },
  {
    id: 'fit-dbms',
    title: 'Smartbooks & Power BI DBMS',
    issuer: 'FIT Academy',
    image: '/certs/fit-academy.png',
    description: 'Specialized training in database management and utilizing Microsoft Power BI for advanced business intelligence.',
    difficulty: 'Advanced',
    effort: 'Requires designing complex relational databases and building interactive, dynamic Power BI dashboards from scratch.'
  },
  {
    id: 'eastwest-cyber1',
    title: 'Introduction to Cybersecurity 1',
    issuer: 'East West',
    image: '/certs/eastwest-cyber.png',
    description: 'Foundational training covering the primary pillars of information security and organizational defense.',
    difficulty: 'Beginner',
    effort: 'Requires understanding the CIA triad, risk management, and fundamental access control mechanisms.'
  }
];

function App() {
  const [activeCert, setActiveCert] = useState(null);

  const openModal = (cert) => {
    setActiveCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveCert(null);
    document.body.style.overflow = 'unset';
  };

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
            Bachelor of Science in Information Technology <br/>
            Network Administrator | Cisco Certified | Cybersecurity Analyst
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
          <h2 className="section-title">Featured Certifications ({certData.length})</h2>
          <p className="section-subtitle" style={{textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem'}}>Click on any certification to learn more about the requirements.</p>
          <div className="certs-grid">
            
            {certData.map((cert) => (
              <div key={cert.id} className="cert-card glass-panel clickable-card" onClick={() => openModal(cert)}>
                <img src={cert.image} alt={cert.title} className="cert-image" />
                <div className="cert-header">
                  <h3>{cert.title}</h3>
                  <span className="cert-issuer">{cert.issuer}</span>
                </div>
                <div className="cert-overlay">
                  <span>View Details</span>
                </div>
              </div>
            ))}

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

      {/* Modal Backdrop and Container */}
      {activeCert && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-content glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>✕</button>
            <img src={activeCert.image} alt={activeCert.title} className="modal-image" />
            
            <div className="modal-header">
              <h2 className="modal-title">{activeCert.title}</h2>
              <span className="cert-issuer modal-issuer">{activeCert.issuer}</span>
            </div>
            
            <p className="modal-description">{activeCert.description}</p>
            
            <div className="modal-difficulty-box">
              <div className="difficulty-header">
                <h3>Acquisition Effort</h3>
                <span className={`difficulty-badge ${activeCert.difficulty.toLowerCase()}`}>
                  {activeCert.difficulty}
                </span>
              </div>
              <p className="modal-effort">{activeCert.effort}</p>
            </div>
          </div>
        </div>
      )}
      <Analytics />
    </>
  )
}

export default App
