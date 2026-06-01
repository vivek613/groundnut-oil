import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { site } from '../data/site';
import { images } from '../data/images';
import { fadeUp, staggerContainer } from '../utils/motion';

const lines = ['Connecting India', 'Exporting', 'Globally'];

export default function Hero() {
  return (
    <section className="hero hero--agro">
      <div className="hero__bg">
        <img src={images.heroPour} alt="" className="hero__bg-image" aria-hidden="true" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__inner hero__inner--agro">
        <motion.div
          className="hero__titles"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {lines.map((line, i) => (
            <motion.h1
              key={line}
              className="hero__line"
              variants={fadeUp}
              transition={{ delay: i * 0.15 }}
            >
              {line}
            </motion.h1>
          ))}
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="btn btn--primary btn--lg hero__cta">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
