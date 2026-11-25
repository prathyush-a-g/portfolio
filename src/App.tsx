import { useEffect, useState } from 'react'
import { certificates, education, projects, skillGroups } from './data'

const Arrow = () => <span aria-hidden="true">↗</span>

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <div className="section-heading reveal"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{intro && <p className="section-intro">{intro}</p>}</div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className="navbar"><a className="brand" href="#top" onClick={closeMenu}><span>G</span>P.</a><button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>☰</button><nav className={menuOpen ? 'nav-links open' : 'nav-links'}>{['About', 'Skills', 'Projects', 'Education', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}</nav></header>

    <main id="top">
      <section className="hero section-wrap"><div className="hero-copy reveal"><p className="eyebrow">Hello, I’m Prathyusha <span className="wave">✦</span></p><h1>Building useful things<br /><em>for the web.</em></h1><p className="hero-intro">Full Stack Developer | AI/ML Enthusiast. I enjoy turning thoughtful ideas into clean, practical digital experiences.</p><div className="button-row"><a className="button button-primary" href="#projects">View Projects <Arrow /></a><a className="button button-secondary" href="/Gurugubelli-Prathyusha-Resume.pdf" download>Download Resume <span aria-hidden="true">↓</span></a></div></div><div className="hero-note reveal"><span className="dot" /><p>Currently exploring<br /><strong>AI / ML</strong> &amp; RAG applications</p></div></section>

      <section id="about" className="section-wrap about-section"><SectionHeading eyebrow="01 / About" title="A little about me." /><div className="about-grid reveal"><p className="about-lead">I’m a B.Tech CSE student at Lovely Professional University who builds full-stack MERN applications and is exploring AI/ML.</p><p>I like working across the stack — from shaping a simple interface to designing the APIs and data models behind it. I’m also learning data analysis with NumPy and Pandas and building RAG-based applications.</p></div></section>

      <section id="skills" className="section-wrap section-muted"><SectionHeading eyebrow="02 / Skills" title="What I work with." /><div className="skills-grid">{skillGroups.map((group) => <article className="skill-card reveal" key={group.label}><h3>{group.label}</h3><div className="tag-list">{group.items.map((item) => <span className="tag" key={item}>{item}</span>)}</div></article>)}</div></section>

      <section className="section-wrap ai-section"><div className="ai-heading reveal"><div><SectionHeading eyebrow="03 / AI + ML" title="Curious about what’s next." /></div><p>Learning by building, one practical idea at a time.</p></div><div className="ai-grid">{[['01', 'Python for data', 'Using NumPy and Pandas for data handling and analysis.'], ['02', 'RAG', 'Understanding and building Retrieval-Augmented Generation pipelines.'], ['03', 'AI in projects', 'Exploring AI-powered features in the Quick Response Coordination System.']].map(([number, title, copy]) => <article className="ai-card reveal" key={number}><span className="card-number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="certification reveal"><span>✦</span> Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</p></section>

      <section id="projects" className="section-wrap section-muted"><SectionHeading eyebrow="04 / Selected work" title="Things I’ve built." intro="A few projects where I’ve put the stack to work." /><div className="projects-grid">{projects.map((project) => <article className="project-card reveal" key={project.title}><div className="project-top"><span className="card-number">{project.number}</span><span className="project-date">{project.date}</span></div><h3>{project.title}</h3><p>{project.description}</p><p className="project-details">{project.details}</p><div className="tag-list">{project.tech.map((item) => <span className="tag" key={item}>{item}</span>)}</div><a className="text-link" href="#" onClick={(event) => event.preventDefault()}>View on GitHub <Arrow /></a></article>)}</div></section>

      <section className="section-wrap training-section"><div className="two-column"><div><SectionHeading eyebrow="05 / Learning" title="Training & certificates." /><article className="training-card reveal"><span className="card-number">Training</span><h3>MERN Stack Development with Generative AI</h3><p>Lovely Professional University · Jun '26 – Jul '26</p><small>Built an e-commerce website with MERN.</small></article></div><div className="certificate-list">{certificates.map(([title, issuer, date]) => <a className="certificate reveal" href="#" onClick={(event) => event.preventDefault()} key={title}><span><strong>{title}</strong><small>{issuer} · {date}</small></span><Arrow /></a>)}</div></div></section>

      <section id="education" className="section-wrap section-muted"><SectionHeading eyebrow="06 / Education" title="Where I’m learning." /><div className="timeline">{education.map((item) => <article className="timeline-item reveal" key={item.title}><span className="timeline-dot" /><div><p className="project-date">{item.period}</p><h3>{item.title}</h3><p>{item.school}</p></div><strong>{item.result}</strong></article>)}</div></section>

      <section id="contact" className="section-wrap contact-section"><div className="contact-content reveal"><SectionHeading eyebrow="07 / Contact" title="Let’s connect." intro="Have a project, an idea, or just want to say hello? I’d be happy to hear from you." /><a className="email-link" href="mailto:prathyugurugubelli@gmail.com">prathyugurugubelli@gmail.com <Arrow /></a><div className="contact-links"><a href="https://www.linkedin.com/in/prathyu-g/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a><a href="https://github.com/prathyush-a-g/" target="_blank" rel="noreferrer">GitHub <Arrow /></a><a href="tel:+918143190888">+91 8143190888 <Arrow /></a></div></div></section>
    </main>
    <footer><p>© 2026 Gurugubelli Prathyusha. Built with care.</p><a href="#top">Back to top ↑</a></footer>
  </div>
}

export default App
