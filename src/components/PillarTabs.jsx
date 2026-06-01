import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { images } from '../data/images';

const tabs = [
  {
    id: 'roots',
    label: 'Roots',
    title: 'Roots',
    text: 'Rooted in India\'s rich agricultural legacy, we work closely with trusted sourcing networks to ensure the highest quality raw materials for groundnut oil production and global export.',
    image: images.roots,
  },
  {
    id: 'expertise',
    label: 'Expertise',
    title: 'Expertise',
    text: 'We specialize in cold-pressed and refined groundnut oil export services. Our team masters every grade and processing method, meeting diverse international requirements with precision.',
    image: images.expertise,
  },
  {
    id: 'progress',
    label: 'Progress',
    title: 'Progress',
    text: 'We\'ve evolved from traditional oil processing to modern export-grade facilities. Continuous innovation in extraction and logistics strengthens our position as a leading oil exporter.',
    image: images.progress,
  },
  {
    id: 'commitment',
    label: 'Commitment',
    title: 'Commitment',
    text: 'Our commitment goes beyond transactions. We are partners invested in your success by ensuring consistent quality, transparent processes, and reliable delivery worldwide.',
    image: images.commitment,
  },
];

export default function PillarTabs() {
  const [active, setActive] = useState('roots');
  const current = tabs.find((t) => t.id === active);

  return (
    <div className="pillar-tabs">
      <div className="pillar-tabs__nav">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`pillar-tabs__btn${active === tab.id ? ' pillar-tabs__btn--active' : ''}`}
            onClick={() => setActive(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          className="pillar-tabs__panel"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
        >
          <div className="pillar-tabs__content">
            <h3>{current.title}</h3>
            <p>{current.text}</p>
          </div>
          <div className="pillar-tabs__image">
            <img src={current.image} alt={current.title} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
