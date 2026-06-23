import './Skills.css'

const groups = [
  {
    label: 'Languages',
    items: ['Python', 'C'],
  },
  {
    label: 'Core Concepts',
    items: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Machine Learning',
      'Deep Learning',
      'Artificial Intelligence',
      'LLM Orchestration',
      'Agent Workflows',
    ],
  },
  {
    label: 'Libraries & Frameworks',
    items: [
      'NumPy',
      'Pandas',
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'OpenCV',
      'NLTK',
      'Streamlit',
      'FastAPI',
      'LangGraph',
      'Next.js',
    ],
  },
  {
    label: 'Tools',
    items: [
      'GitHub',
      'Jupyter Notebook',
      'Google Colab',
      'VS Code',
      'Claude Code',
      'PyCharm',
      'Docker',
      'PostgreSQL',
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-label">Toolkit</div>
        <h2 className="skills__heading serif">
          A practical stack for shipping <span className="italic">AI</span> end-to-end.
        </h2>

        <div className="skills__grid">
          {groups.map((g) => (
            <div className="skill-group" key={g.label}>
              <h3 className="skill-group__label">{g.label}</h3>
              <div className="skill-group__items">
                {g.items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
