import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container contact__inner">
        <p className="contact__eyebrow">Available for AI/ML internships and freelance work, now booking for 2026.</p>

        <h2 className="contact__heading serif">
          Have a problem worth <span className="italic">solving with AI</span>?
        </h2>

        <p className="contact__sub">
          If you'd like to chat about a collaboration, internship, or research project — get in touch.
        </p>

        <a href="mailto:rishilpasunuri@gmail.com" className="contact__email serif">
          rishilpasunuri@gmail.com →
        </a>

        <div className="contact__links">
          <a href="tel:+919032916912">+91 9032916912</a>
          <span>·</span>
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <span>·</span>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </section>
  )
}
