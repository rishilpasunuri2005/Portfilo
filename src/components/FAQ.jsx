import { useState } from 'react'
import './FAQ.css'

const items = [
  {
    q: 'What do you specialize in?',
    a: 'AI/ML — specifically deep learning for vision (CNN/U-Net), NLP, and agentic LLM systems built with LangGraph and FastAPI. I also build full-stack interfaces for these systems with Next.js.',
  },
  {
    q: 'What kinds of projects are you open to?',
    a: 'AI/ML internships, applied research collaborations, and freelance builds — particularly anything involving LLM orchestration, retrieval, agent workflows, or computer vision.',
  },
  {
    q: 'How do you approach a new ML problem?',
    a: 'Start with the data — understand quality, distribution, and edge cases. Build a simple, honest baseline. Iterate on the model only after the loss, metrics, and evaluation harness are trustworthy.',
  },
  {
    q: 'Do you write production code or just notebooks?',
    a: 'Both. OmniRoute AI was a full production stack — FastAPI, PostgreSQL, Docker, Clerk auth, rate limiting, telemetry, and CI-ready deploys on Railway.',
  },
  {
    q: 'How can we get in touch?',
    a: "Email is fastest — rishilpasunuri@gmail.com. I'll usually reply within a day.",
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-label">Questions &amp; Answers</div>
        <h2 className="faq__heading serif">
          Things people <span className="italic">usually ask</span>.
        </h2>

        <div className="faq__list">
          {items.map((item, i) => {
            const isOpen = open === i
            return (
              <button
                key={item.q}
                className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
              >
                <div className="faq-item__row">
                  <span className="faq-item__q">{item.q}</span>
                  <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
                </div>
                <div className="faq-item__a-wrap">
                  <p className="faq-item__a">{item.a}</p>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
