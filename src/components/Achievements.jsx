import { motion } from 'framer-motion';
import { achievements } from '../constants/resumeData';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Awards & Certifications
        </motion.h2>
        <motion.p
          className="section-subtitle"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Recognition for delivering excellence and continuous learning
        </motion.p>

        <div className="achievements-grid">
          {achievements.map((ach, i) => (
            <motion.div
              className="achievement-card"
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="achievement-icon">{ach.icon}</div>
              <div className="achievement-text">
                <h4 className="achievement-title">{ach.title}</h4>
                <p className="achievement-desc">{ach.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

