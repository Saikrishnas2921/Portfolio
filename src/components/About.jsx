import { motion } from 'framer-motion';
import { summary } from '../constants/resumeData';

const highlights = [
  { icon: '💼', title: '6+ Years', desc: 'Industry Experience' },
  { icon: '☁️', title: 'AWS Certified', desc: 'Developer Associate' },
  { icon: '🏗️', title: 'Microservices', desc: 'Architecture Expert' },
  { icon: '🚀', title: 'Full Stack', desc: 'End-to-End Delivery' },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="section-subtitle"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Get to know more about my journey and expertise
        </motion.p>

        <div className="about-grid">
          <motion.div
            className="about-text"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>{summary}</p>
            <p>
              I've had the privilege of working with industry leaders like <strong>American Express</strong>,{' '}
              <strong>San Diego Gas &amp; Electric</strong>, and <strong>Farmers Insurance</strong>, where
              I built mission-critical systems handling millions of transactions, developed portals supporting
              emergency wildfire operations, and implemented insurance platforms serving thousands of users daily.
            </p>
            <p>
              My passion lies in crafting clean, scalable code and turning complex business requirements into
              elegant technical solutions that make a real difference.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {highlights.map((h, i) => (
              <motion.div
                className="highlight-card"
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="highlight-icon">{h.icon}</div>
                <div className="highlight-title">{h.title}</div>
                <div className="highlight-desc">{h.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

