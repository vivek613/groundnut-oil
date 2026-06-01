import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../utils/motion';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  return (
    <motion.div
      className={`section-heading section-heading--${align}${light ? ' section-heading--light' : ''}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
    >
      {eyebrow && <span className="section-heading__eyebrow">{eyebrow}</span>}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </motion.div>
  );
}
