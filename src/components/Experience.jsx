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
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {exp.icon && (
                      <div className="company-icon" style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: `${exp.iconColor}15`,
                        border: `1px solid ${exp.iconColor}30`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.4rem',
                        color: exp.iconColor,
                        flexShrink: 0,
                      }}>
                        <exp.icon />
                      </div>
                    )}
                    <div>
                      <h3 className="timeline-company">{exp.company}</h3>
                      <p className="timeline-role">{exp.role}</p>
                    </div>
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

