import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container about__inner">
        <div className="about__media">
          <div className="about__avatar serif italic">RP</div>
        </div>

        <div className="about__content">
          <div className="section-label">About</div>
          <h2 className="about__heading serif">
            I'm <span className="italic">Rishil Pasunuri</span>.
          </h2>

          <p>
            An Electronics and Communication Engineering student at B V Raju Institute of
            Technology, focused on AI/ML. I work primarily in Python, building deep learning
            models, NLP pipelines, and agentic LLM systems.
          </p>

          <p>
            My recent work spans medical image segmentation with U-Nets and a production-grade
            multi-model LLM routing platform — taking an idea from research to a deployed,
            secure, observable service.
          </p>

          <p>
            I learn by building. When I'm not on a project, I'm working through certifications
            (IBM, AWS, Udacity) and exploring how agent workflows and routing can make AI
            cheaper and more reliable in production.
          </p>

          <a className="about__link" href="https://github.com/" target="_blank" rel="noreferrer">
            Find me on GitHub →
          </a>
        </div>
      </div>
    </section>
  )
}
