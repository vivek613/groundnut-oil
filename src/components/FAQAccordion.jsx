import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { homeFaqs } from '../data/products';

export default function FAQAccordion({ items = homeFaqs, limit }) {
  const [open, setOpen] = useState(null);
  const list = limit ? items.slice(0, limit) : items;

  return (
    <div className="faq-accordion">
      {list.map((faq, i) => (
        <div key={faq.q} className={`faq-item${open === i ? ' faq-item--open' : ''}`}>
          <button
            type="button"
            className="faq-item__question"
            onClick={() => setOpen(open === i ? null : i)}
          >
            {faq.q}
            <ChevronDown size={20} className="faq-item__chevron" />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                className="faq-item__answer"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <p>{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
