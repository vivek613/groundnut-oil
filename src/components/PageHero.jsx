import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';

export default function PageHero({ eyebrow, title, subtitle, image, imageAlt = '' }) {
  return (
    <section className={`page-hero${image ? ' page-hero--image' : ''}`}>
      {image && (
        <>
          <img src={image} alt="" className="page-hero__bg-img" aria-hidden="true" />
          <div className="page-hero__overlay" />
        </>
      )}
      <div className="container page-hero__content">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          {eyebrow && <span className="page-hero__eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {subtitle && <p>{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
