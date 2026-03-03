import { motion } from 'framer-motion';
import { skills } from '../constants/resumeData';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.p
          className="section-subtitle"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Technologies I work with to build high-quality applications
        </motion.p>

        <div className="skills-grid">
          {skills.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                className="skill-category"
                key={i}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <Icon />
                  </div>
                  <h3 className="skill-category-name">{cat.category}</h3>
                </div>
                <div className="skill-tags">
                  {cat.items.map((skill, j) => (
                    <motion.span
                      className="skill-tag"
                      key={j}
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

