import { useEffect, useRef, useState } from 'react'
import { profile, stats, skills, publications, projects, posts, socials, links } from './data'
import { Icon } from './Icons'

const nav = [
  { id: 'home', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'publications', label: '论文' },
  { id: 'projects', label: '项目' },
  { id: 'blog', label: '写作' },
  { id: 'contact', label: '联系' },
]

// 元素进入视口时添加动画的自定义 hook
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

function Header({ active }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="header">
      <a className="brand" href="#home" onClick={() => setOpen(false)}>
        <span className="brand-mark">{profile.name.charAt(0)}</span>
        <span className="brand-name">{profile.name}</span>
      </a>
      <nav className={`nav ${open ? 'open' : ''}`}>
        {nav.map((n) => (
          <a
            key={n.id}
            href={`#${n.id}`}
            className={active === n.id ? 'active' : ''}
            onClick={() => setOpen(false)}
          >
            {n.label}
          </a>
        ))}
      </nav>
      <button
        className="menu-btn"
        aria-label="菜单"
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="grid-overlay" />
      </div>
      <div className="hero-inner">
        <p className="hero-eyebrow" data-reveal>
          <span className="dot" /> PhD Candidate @ PolyU · 欢迎学术交流与合作
        </p>
        <h1 className="hero-title" data-reveal>
          你好，我是 <span className="gradient-text">{profile.nameCn}</span>
          <br />
          {profile.title}
        </h1>
        <p className="hero-tagline" data-reveal>
          {profile.tagline}
        </p>
        <div className="hero-actions" data-reveal>
          <a className="btn btn-primary" href="#projects">
            查看作品 <Icon name="arrow" size={16} />
          </a>
          <a className="btn btn-ghost" href="#contact">
            联系我
          </a>
        </div>
        <div className="hero-socials" data-reveal>
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="social-icon"
            >
              <Icon name={s.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <div className="section-head" data-reveal>
        <span className="section-index">01</span>
        <h2 className="section-title">关于我</h2>
      </div>
      <div className="about-grid">
        <div className="about-text" data-reveal>
          <p>{profile.intro}</p>
          <div className="about-meta">
            <span><Icon name="pin" size={16} /> {profile.location}</span>
            <a href={`mailto:${profile.email}`}>
              <Icon name="mail" size={16} /> {profile.email}
            </a>
            <span><Icon name="phone" size={16} /> {profile.phone}</span>
          </div>
        </div>
        <div className="stats" data-reveal>
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-value">
                {s.value}<span className="stat-suffix">{s.suffix}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="skills" data-reveal>
        {skills.map((s) => (
          <div className="skill-col" key={s.group}>
            <h3 className="skill-group">{s.group}</h3>
            <ul className="skill-list">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Publications() {
  return (
    <section id="publications" className="section">
      <div className="section-head" data-reveal>
        <span className="section-index">02</span>
        <h2 className="section-title">论文 · Publications</h2>
      </div>
      <div className="pub-list">
        {publications.map((p) => {
          const Tag = p.link ? 'a' : 'div'
          return (
            <Tag
              className={`pub-item${p.highlight ? ' pub-highlight' : ''}`}
              key={p.title}
              data-reveal
              {...(p.link ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {})}
            >
              <div className="pub-year">{p.year}</div>
              <div className="pub-main">
                <h3 className="pub-title">{p.title}</h3>
                <p className="pub-authors">{p.authors}</p>
                <div className="pub-meta">
                  <span className="pub-venue">{p.venue}</span>
                  {p.citations > 0 && (
                    <span className="pub-cites">被引 {p.citations}</span>
                  )}
                </div>
              </div>
            </Tag>
          )
        })}
      </div>
      <a
        className="pub-more"
        href={links.scholar}
        target="_blank"
        rel="noreferrer"
      >
        在 Google Scholar 查看全部 <Icon name="arrow" size={16} />
      </a>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-head" data-reveal>
        <span className="section-index">03</span>
        <h2 className="section-title">项目 · Projects</h2>
      </div>
      <div className="project-grid">
        {projects.map((p) => (
          <article
            className={`project-card accent-${p.accent}`}
            key={p.name}
            data-reveal
          >
            <div className="project-top">
              <Icon name="code" size={22} />
              <div className="project-links">
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" aria-label="源码">
                    <Icon name="github" size={18} />
                  </a>
                )}
                {p.link && (
                  <a href={p.link} target="_blank" rel="noreferrer" aria-label="演示">
                    <Icon name="link" size={18} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="project-name">{p.name}</h3>
            <p className="project-desc">{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function Blog() {
  return (
    <section id="blog" className="section">
      <div className="section-head" data-reveal>
        <span className="section-index">04</span>
        <h2 className="section-title">写作 · 知乎</h2>
      </div>
      <div className="post-list">
        {posts.map((p) => (
          <a
            className="post-item"
            href={p.link}
            target="_blank"
            rel="noreferrer"
            key={p.title}
            data-reveal
          >
            <div className="post-main">
              <span className="post-tag">{p.tag}</span>
              <h3 className="post-title">{p.title}</h3>
              <p className="post-summary">{p.summary}</p>
            </div>
            <div className="post-side">
              <time className="post-date">{p.date}</time>
              <Icon name="arrow" size={18} />
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="contact-card" data-reveal>
        <span className="section-index">05</span>
        <h2 className="contact-title">
          一起探索<span className="gradient-text">机器人的未来</span>
        </h2>
        <p className="contact-sub">
          有科研合作、学术交流或只是想打个招呼？欢迎通过邮件或电话联系我。
        </p>
        <a className="btn btn-primary btn-lg" href={`mailto:${profile.email}`}>
          <Icon name="mail" size={18} /> {profile.email}
        </a>
        <p className="contact-phone">
          <Icon name="phone" size={16} /> {profile.phone}
        </p>
        <div className="hero-socials">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              aria-label={s.name}
              className="social-icon"
            >
              <Icon name={s.icon} size={18} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {profile.name}. 用 ❤️ 与 React 构建。</span>
    </footer>
  )
}

export default function App() {
  const [active, setActive] = useState('home')
  const ticking = useRef(false)
  useReveal()

  useEffect(() => {
    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        const mid = window.innerHeight * 0.35
        let current = 'home'
        for (const n of nav) {
          const el = document.getElementById(n.id)
          if (el && el.getBoundingClientRect().top <= mid) current = n.id
        }
        setActive(current)
        ticking.current = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <Header active={active} />
      <main>
        <Hero />
        <About />
        <Publications />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
