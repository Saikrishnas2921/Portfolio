import { motion } from 'framer-motion';
import { HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { experience } from '../constants/resumeData';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Professional Experience
        </motion.h2>
        <motion.p
          className="section-subtitle"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          My career journey building impactful software solutions
        </motion.p>

        <div className="timeline">
          {experience.map((exp, i) => (
            <motion.div
              className="timeline-item"
              key={i}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-card">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">{exp.company}</h3>
                    <p className="timeline-role">{exp.role}</p>
                  </div>
                </div>
                <div className="timeline-meta">
                  <span><HiCalendar /> {exp.period}</span>
                  <span><HiLocationMarker /> {exp.location}</span>
                </div>
                <ul className="timeline-points">
                  {exp.points.map((point, j) => (
                    <li key={j}>{point}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

