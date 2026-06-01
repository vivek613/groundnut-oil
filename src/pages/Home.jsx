import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import { products, homeFeatures } from '../data/products';
import { advantages } from '../data/site';
import { images } from '../data/images';
import { fadeUp, staggerContainer, scaleIn, viewportOnce } from '../utils/motion';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section process-banner">
        <motion.div
          className="process-banner__wrap"
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <img
            src={images.qualityProcess}
            alt="From farm to bottle – quality at every step"
            className="process-banner__img"
          />
        </motion.div>
      </section>

      <section className="section commitment-section">
        <div className="container commitment-grid">
          <motion.div
            className="commitment-image"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <img src={images.commitment} alt="Our commitment to global partnerships" />
          </motion.div>
          <motion.div
            className="commitment-content"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <span className="section-heading__eyebrow">Our Commitment</span>
            <h2>Building Long-Term Global Partnerships</h2>
            <p>
              Our commitment extends beyond supply—we build long-term partnerships. With a
              focus on consistency, transparency, and dependable delivery, we ensure a
              seamless experience for our global clients.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Why IndiCo Naturals"
            title="Premium Groundnut Oil, Defined by Consistency"
            subtitle="As a trusted groundnut oil exporter from India, we deliver premium-quality oil defined by purity, consistency, and global standards."
          />
          <motion.div
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {homeFeatures.map((f) => (
              <motion.div key={f.title} className="feature-card" variants={scaleIn}>
                <span className="feature-card__icon">{f.icon}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            eyebrow="Our Products"
            title="Cold-Pressed & Refined Groundnut Oil"
            subtitle="Two distinct product lines crafted for premium culinary and commercial food applications."
          />
          <div className="products-grid">
            <ProductCard product={products.coldPress} index={0} />
            <ProductCard product={products.refined} index={1} />
          </div>
        </div>
      </section>

      <section className="section export-section">
        <div className="container export-grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <SectionHeading
              align="left"
              eyebrow="Global Export"
              title="From India to Global Markets"
              subtitle="At IndiCo Global, we manage the complete export journey with precision and reliability."
            />
            <p className="export-text">
              From careful sourcing and controlled processing to stringent quality checks
              and seamless logistics—we ensure every shipment meets international standards
              and arrives on time. We deliver not just products, but confidence.
            </p>
            <Link to="/contact" className="btn btn--primary">Contact Export Desk</Link>
          </motion.div>
          <motion.div
            className="export-image"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scaleIn}
          >
            <img src={images.qualityCheck} alt="Quality inspection at our facility" />
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The IndiCo Advantage"
            title="Quality at Every Step"
          />
          <motion.div
            className="advantages-grid"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {advantages.map((item) => (
              <motion.div key={item.title} className="advantage-card" variants={scaleIn}>
                <span className="advantage-card__icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section cta-section">
        <div className="container">
          <motion.div
            className="cta-banner"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2>Ready to Define Your Specifications?</h2>
            <p>Connect with our export desk for quotes, samples, and global supply requirements.</p>
            <Link to="/contact" className="btn btn--primary btn--lg">Get Global Supply Quote</Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
