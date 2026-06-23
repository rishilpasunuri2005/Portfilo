import './Projects.css'

const projects = [
  {
    year: '2026',
    title: 'OmniRoute AI',
    tagline:
      'Production-ready, security-first AI SaaS platform that dynamically routes prompts across Groq, OpenRouter, and NVIDIA NIM by task type and complexity — for ~10x cost savings over single-model routing.',
    points: [
      'LangGraph multi-agent workflow with Router, Planner, Execution and Validation nodes plus a self-healing fallback repair node for malformed completions.',
      'Security-first stack: Clerk JWT via JWKS, Pydantic payload validation, CSP/HSTS/CORS, per-user daily token budgets, SlowAPI rate limiting.',
      'Real-time NDJSON streaming, granular telemetry (latency, tokens, provider, cost), Dockerised deploy on Railway.',
    ],
    stack: ['Python', 'FastAPI', 'LangGraph', 'Next.js', 'PostgreSQL', 'Docker'],
  },
  {
    year: '2025',
    title: 'Retinal Vessel Segmentation',
    tagline:
      'Deep learning diagnostic-aid tool for retinal vessel segmentation on the DRIVE and STARE benchmark datasets, reaching ~0.82 Dice and ~0.70 IoU.',
    points: [
      'CNN/U-Net with skip connections and batch normalisation — 15% fewer false positives over an FCN baseline.',
      'Preprocessing pipeline: patch extraction, CLAHE enhancement, and augmentation (rotation, flipping, elastic distortion) for limited-data generalisation.',
      'Deployed with visualisation overlays so clinicians can inspect segmented vessels alongside the original fundus image.',
    ],
    stack: ['Python', 'TensorFlow', 'OpenCV', 'CNN/U-Net'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-label">Selected Work</div>

        <h2 className="projects__heading serif">
          Projects that turn <span className="italic">research</span> into{' '}
          <span className="italic">real systems</span>.
        </h2>

        <div className="projects__list">
          {projects.map((p) => (
            <article key={p.title} className="project">
              <div className="project__meta">
                <span className="project__year">{p.year}</span>
              </div>
              <div className="project__body">
                <h3 className="project__title serif">{p.title}</h3>
                <p className="project__tagline">{p.tagline}</p>
                <ul className="project__points">
                  {p.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
                <div className="project__stack">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
