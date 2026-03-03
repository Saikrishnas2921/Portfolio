import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown, HiMail } from 'react-icons/hi';
import { personalInfo, typedStrings } from '../constants/resumeData';
import profilePhoto from '../assets/krishna.PNG';

function useTypewriter(strings, typingSpeed = 80, deletingSpeed = 50, pause = 2000) {
  const [display, setDisplay] = useState('');
  const [strIndex, setStrIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = strings[strIndex];
    let timeout;

    if (!isDeleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, typingSpeed);
    } else if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, deletingSpeed);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setStrIndex((strIndex + 1) % strings.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, strIndex, strings, typingSpeed, deletingSpeed, pause]);

  return display;
}

export default function Hero() {
  const typed = useTypewriter(typedStrings);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="hero-greeting">👋 Hello, I'm</p>
            <h1 className="hero-name">
              <span>{personalInfo.name}</span>
            </h1>
            <p className="hero-title">
              I'm a <span className="typed-text">{typed}</span>
            </p>
            <p className="hero-description">
              Building scalable, high-performing applications across financial, energy, and insurance domains.
              AWS Certified Developer &amp; SAFe 5 Practitioner with expertise in cloud-native architectures.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn-primary">
                <HiMail /> Get In Touch
              </a>
              <a href="#experience" className="btn-outline">
                <HiArrowDown /> View My Work
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">{personalInfo.yearsExperience}</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{personalInfo.projectsDelivered}</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{personalInfo.certifications}</div>
                <div className="stat-label">Certifications</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-avatar"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            <div className="avatar-ring">
              <div className="avatar-inner">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="avatar-photo"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

