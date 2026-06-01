import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Truck, ShieldCheck, Package } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import PillarTabs from '../components/PillarTabs';
import FAQAccordion from '../components/FAQAccordion';
import { QuoteSection } from '../components/QuoteForm';
import { products } from '../data/products';
import { site, standApart, qualityBullets, trustBadges } from '../data/site';
import { images } from '../data/images';
import { fadeUp, staggerContainer, scaleIn, viewportOnce } from '../utils/motion';

const standApartIcons = [Leaf, ShieldCheck, Package, Truck];

export default function Home() {
  return (
    <>
      <Hero />

      {/* Intro — matches Agro "Globally Trusted Name" */}
      <section className="section intro-section">
        <div className="container intro-section__inner">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <h2 className="agro-title">A Globally Trusted Name in Groundnut Oil Exports</h2>
            <p className="agro-subtitle">We handle the details so you can focus on your business</p>
            <p className="agro-text">
              {site.parentBrand} is a leading groundnut oil export company focusing on risk reduction
              over volume. We ensure transparency through moisture control, multi-stage processing, and
              sample honesty. Our oils guarantee that bulk shipments match approved grades, providing
              long-term reliability for every international buyer.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How We Stand Apart — 4 icon boxes */}
      <section className="section section--cream">
        <div className="container">
          <motion.h2
            className="agro-title agro-title--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            How {site.name} Stands Apart
          </motion.h2>
          <motion.div
            className="stand-apart-grid"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {standApart.map((item, i) => {
              const Icon = standApartIcons[i];
              return (
                <motion.div key={item.title} className="stand-apart-card" variants={scaleIn}>
                  <div className="stand-apart-card__icon">
                    <Icon size={28} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Where Quality Takes Shape — process image */}
      <section className="section quality-shape">
        <div className="container quality-shape__inner">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <h2 className="agro-title">Where Quality Takes Shape</h2>
            <p className="agro-text">
              Quality is not a claim. It's a process that you can see. From careful sourcing and
              multi-stage processing to grading, moisture control, and final packing — each step
              is handled with a focus on export reliability.
            </p>
          </motion.div>
          <motion.div
            className="quality-shape__media"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scaleIn}
          >
            <img src={images.qualityProcess} alt="From farm to bottle quality process" />
          </motion.div>
        </div>
      </section>

      {/* Premium Exporter + Tabs */}
      <section className="section">
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <h2 className="agro-title agro-title--center">
              Premium Quality Groundnut Oil Exporter from India
            </h2>
            <p className="agro-text agro-text--center">
              We are a leading Indian groundnut oil exporter straight from Gujarat farms to your port.
              We believe transparency builds real trust — giving buyers complete visibility into
              processing from sourcing to final packing.
            </p>
          </motion.div>
          <PillarTabs />
        </div>
      </section>

      {/* Premium Quality Bullets */}
      <section className="section section--dark">
        <div className="container">
          <motion.h2
            className="agro-title agro-title--center agro-title--light"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            Premium Quality Oil, Exported with Consistency
          </motion.h2>
          <motion.ul
            className="quality-bullets"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {qualityBullets.map((b) => (
              <motion.li key={b.title} variants={scaleIn}>
                <strong>{b.title}</strong>
                <span>{b.text}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Our Products */}
      <section className="section section--cream">
        <div className="container">
          <motion.h2
            className="agro-title agro-title--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            Our Products
          </motion.h2>
          <div className="products-grid">
            <ProductCard product={products.coldPress} index={0} />
            <ProductCard product={products.refined} index={1} />
          </div>
        </div>
      </section>

      {/* Trust badges row */}
      <section className="trust-badges">
        <div className="container trust-badges__inner">
          {trustBadges.map((badge) => (
            <div key={badge} className="trust-badge">{badge}</div>
          ))}
        </div>
      </section>

      {/* From India to Global Markets */}
      <section className="section export-block">
        <div className="container export-block__inner">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <h2 className="agro-title">From India to Global Markets: Trusted Oil Exporter</h2>
            <p className="agro-text">
              At {site.parentBrand}, we manage the complete export process — from farm-level sourcing
              and rigorous quality control to coordinated logistics and on-time delivery at your
              designated port.
            </p>
            <Link to="/contact" className="btn btn--primary">Contact Us</Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scaleIn}
          >
            <img src={images.qualityCheck} alt="Quality inspection" className="export-block__img" />
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--cream">
        <div className="container container--narrow">
          <motion.h2
            className="agro-title agro-title--center"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            Frequently Asked Questions
          </motion.h2>
          <FAQAccordion limit={3} />
        </div>
      </section>

      <QuoteSection />

      {/* Footer CTA banner */}
      <section className="partner-banner">
        <div className="container partner-banner__inner">
          <h2>Partner with India&apos;s Premier Groundnut Oil Exporter</h2>
          <Link to="/contact" className="btn btn--primary btn--lg">Contact Us</Link>
        </div>
      </section>
    </>
  );
}
