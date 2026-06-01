import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Sparkles } from 'lucide-react';
import { site } from '../data/site';
import { images } from '../data/images';
import { fadeUp, staggerContainer } from '../utils/motion';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img src={images.heroPour} alt="" className="hero__bg-image" aria-hidden="true" />
        <div className="hero__overlay" />
      </div>

      <div className="container hero__inner">
        <motion.div
          className="hero__content"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.span className="hero__eyebrow" variants={fadeUp}>
            {site.tagline}
          </motion.span>
          <motion.h1 className="hero__title" variants={fadeUp}>
            {site.heroTitle}
          </motion.h1>
          <motion.p className="hero__subtitle" variants={fadeUp}>
            {site.heroSubtitle}
          </motion.p>
          <motion.div className="hero__actions" variants={fadeUp}>
            <Link to="/products/cold-press" className="btn btn--primary">
              <Leaf size={18} /> Cold-Pressed Oil
            </Link>
            <Link to="/products/refined" className="btn btn--secondary">
              <Sparkles size={18} /> Refined Oil
            </Link>
          </motion.div>
          <motion.div className="hero__trust" variants={fadeUp}>
            <span>FSSAI</span>
            <span>APEDA</span>
            <span>Export Grade</span>
            <span>Gujarat Sourced</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__product-shot"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={images.heroProduct} alt={`${site.name} groundnut oil bottle`} />
        </motion.div>
      </div>

      <motion.div
        className="hero__scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <span>Scroll</span>
        <ArrowRight size={14} className="hero__scroll-icon" />
      </motion.div>
    </section>
  );
}
