import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col">
          <span className="serif italic footer__brand">Rishil.</span>
          <p>© {year} Rishil Pasunuri. All rights reserved.</p>
        </div>
        <div className="footer__col footer__links">
          <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:rishilpasunuri@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  )
}
