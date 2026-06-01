import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import { site, aboutPillars } from '../data/site';
import { images } from '../data/images';
import SectionHeading from '../components/SectionHeading';
import { fadeUp, staggerContainer, scaleIn, viewportOnce } from '../utils/motion';

const pillarImages = {
  roots: images.roots,
  expertise: images.expertise,
  progress: images.progress,
};

export default function About() {
  return (
    <div className="page">
      <PageHero
        eyebrow={`About ${site.name}`}
        title="Elevating Indian Quality to Global Markets"
        subtitle="We represent the excellence of Indian agriculture by delivering premium groundnut oil from origin to global markets."
        image={images.roots}
      />

      <section className="section">
        <div className="container about-intro">
          <motion.div
            className="about-intro__content"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <h2>About {site.parentBrand}</h2>
            <p>
              {site.parentBrand} was founded with a clear vision — to bring India's quality,
              capability, and authenticity to the global marketplace. As an emerging export
              company, we are dedicated to building strong and reliable international trade
              connections while consistently delivering products that meet global standards.
            </p>
            <p>
              As part of our expanding portfolio, we proudly introduce <strong>{site.name}</strong>
              — a product line that reflects our dedication to purity, quality, and authentic sourcing.
            </p>
            <h3 className="mt-lg">Our Philosophy</h3>
            <p>
              We believe that enduring relationships are the true foundation of global success.
              By combining trust, consistency, and a forward-looking approach, we strengthen
              existing partnerships while expanding our presence across international markets.
            </p>
          </motion.div>
          <motion.div
            className="about-intro__image"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scaleIn}
          >
            <img src={images.logo} alt={site.name} />
          </motion.div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading title="Our Foundation, Expertise & Evolution" />
          <div className="pillars-grid">
            {aboutPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                className="pillar-card"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <img
                  src={pillarImages[pillar.imageKey]}
                  alt={pillar.title}
                  className="pillar-card__image"
                />
                <div className="pillar-card__body">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="about-naturals"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <img src={images.heroProduct} alt={site.name} className="about-naturals__product" />
            <h2>About {site.name}</h2>
            <p>
              {site.name} reflects our commitment to delivering consistently high-quality
              Groundnut Oil, crafted to meet global standards. With a focus on precision and
              reliability, every stage—from sourcing to processing—is managed with care and
              attention to detail.
            </p>
            <p>
              Our oils retain their natural essence, offering characteristic aroma, taste, and
              purity. We provide a versatile range, including cold-pressed, filtered, and refined
              variants, tailored to diverse international requirements.
            </p>
            <p><strong>Origin:</strong> {site.origin}</p>
            <Link to="/products" className="btn btn--outline">Explore Products</Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
