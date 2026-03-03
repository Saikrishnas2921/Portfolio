import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { HiMail, HiPhone, HiLocationMarker, HiPaperAirplane } from 'react-icons/hi';
import { FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../constants/resumeData';

// ──────────────────────────────────────────────
// Using FormSubmit.co — FREE, no signup, no API keys.
// Emails are delivered directly to saikrishnas2921@gmail.com
//
// FIRST TIME: After the first form submission, FormSubmit
// will send a confirmation email to activate your address.
// Click the link in that email ONCE — after that, all
// future messages will be delivered automatically.
// ──────────────────────────────────────────────
const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/saikrishnas2921@gmail.com';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all fields.');
      return;
    }

    setSending(true);

    try {
      const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
          _template: 'table',
        }),
      });

      const result = await response.json();

      if (result.success === 'true' || result.success === true) {
        toast.success("Message sent successfully! I'll get back to you soon. 🎉");
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('FormSubmit Error:', error);
      // Fallback: open the user's mail client
      window.location.href = `mailto:${personalInfo.email}?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}%0A%0AFrom: ${formData.email}`;
      toast.success('Opening your email client as a fallback...');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <motion.h2
          className="section-title"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          Get In Touch
        </motion.h2>
        <motion.p
          className="section-subtitle"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Interested in working together? Drop me a message!
        </motion.p>

        <div className="contact-wrapper">
          <motion.div
            className="contact-info"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3>Let's build something great together</h3>
            <p>
              Whether you have a project in mind, a job opportunity, or just want to say hello —
              my inbox is always open. I'll do my best to respond within 24 hours!
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-item-icon"><HiMail /></div>
                <div className="contact-item-text">
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><HiPhone /></div>
                <div className="contact-item-text">
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><HiLocationMarker /></div>
                <div className="contact-item-text">{personalInfo.location}</div>
              </div>
              <div className="contact-item">
                <div className="contact-item-icon"><FaLinkedin /></div>
                <div className="contact-item-text">
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* FormSubmit.co hidden fields */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Hi Saikrishna, I'd love to discuss a potential opportunity..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="form-submit" disabled={sending}>
              {sending ? (
                'Sending...'
              ) : (
                <>
                  <HiPaperAirplane /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
