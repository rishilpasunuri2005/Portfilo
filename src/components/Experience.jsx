import './Experience.css'

const education = [
  {
    title: 'B.Tech, Electronics & Communication Engineering',
    org: 'B V Raju Institute of Technology, Narsapur',
    detail: 'CGPA 6.6 / 10',
    period: '2023 — 2027',
  },
]

const certifications = [
  { title: 'Generative AI in Action', org: 'IBM SkillsBuild' },
  { title: 'AWS Machine Learning Foundations', org: 'Amazon Web Services' },
  { title: 'Introduction to Generative AI', org: 'Udacity' },
  { title: 'Prompt Engineering for Developers', org: 'Self-paced' },
]

const achievements = [
  {
    title: 'BuildWithAI PromptWars — Virtual Edition',
    detail: 'Built a Generative AI prototype in a timed hackathon focused on real-world prompt engineering.',
  },
  {
    title: 'Consistent self-learner',
    detail: '4 industry certifications across IBM, AWS and Udacity, with active project development on GitHub.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-label">Education &amp; Recognition</div>

        <div className="experience__grid">
          <div className="exp-col">
            <h3 className="exp-col__title">Education</h3>
            {education.map((e) => (
              <div className="exp-row" key={e.title}>
                <div>
                  <div className="exp-row__title">{e.title}</div>
                  <div className="exp-row__org">{e.org}</div>
                  <div className="exp-row__detail">{e.detail}</div>
                </div>
                <div className="exp-row__period">{e.period}</div>
              </div>
            ))}
          </div>

          <div className="exp-col">
            <h3 className="exp-col__title">Certifications</h3>
            {certifications.map((c) => (
              <div className="exp-row" key={c.title}>
                <div>
                  <div className="exp-row__title">{c.title}</div>
                  <div className="exp-row__org">{c.org}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="exp-col">
            <h3 className="exp-col__title">Achievements</h3>
            {achievements.map((a) => (
              <div className="exp-row" key={a.title}>
                <div>
                  <div className="exp-row__title">{a.title}</div>
                  <div className="exp-row__org">{a.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
