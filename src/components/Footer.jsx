import { FaLinkedin, FaGithub, FaEnvelope, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../constants/resumeData';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-socials">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>
          <p className="footer-copy">
            © {year} <span>{personalInfo.name}</span>. Built with React &amp; <FaHeart style={{ display: 'inline', color: '#ef4444', verticalAlign: 'middle' }} />
          </p>
        </div>
      </div>
    </footer>
  );
}

