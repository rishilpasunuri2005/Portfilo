import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__status">
          <span className="hero__dot" />
          Available for AI/ML internships and freelance projects
        </div>

        <h1 className="hero__title serif">
          AI/ML engineer building <span className="italic">deep learning</span>, NLP and{' '}
          <span className="italic">agentic AI</span> systems.
        </h1>

        <p className="hero__sub">
          Electronics &amp; Communication Engineering student with hands-on experience in
          medical image segmentation, multi-model LLM routing, and production-grade
          AI SaaS platforms.
        </p>

        <div className="hero__cta">
          <a href="#projects" className="btn btn--primary">View Work</a>
          <a href="mailto:rishilpasunuri@gmail.com" className="btn btn--ghost">Get in touch ↗</a>
        </div>

        <div className="hero__meta">
          <div>
            <span className="hero__meta-label">Based in</span>
            <span className="hero__meta-value">Hyderabad, India</span>
          </div>
          <div>
            <span className="hero__meta-label">Focus</span>
            <span className="hero__meta-value">AI · Deep Learning · LLMs</span>
          </div>
          <div>
            <span className="hero__meta-label">Currently</span>
            <span className="hero__meta-value">B.Tech ECE · 2023–2027</span>
          </div>
        </div>
      </div>
    </section>
  )
}
