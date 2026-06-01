import { motion } from 'framer-motion';
import { Shield, FlaskConical, Eye, FileCheck } from 'lucide-react';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import { site, certifications, qualitySteps, labValidation } from '../data/site';
import { images } from '../data/images';
import { fadeUp, staggerContainer, scaleIn, viewportOnce } from '../utils/motion';

const qualityPillars = [
  {
    icon: Shield,
    title: 'Safety First',
    text: 'Strict quality controls ensuring every batch meets international safety standards.',
  },
  {
    icon: FlaskConical,
    title: 'Lab Verified',
    text: 'Multi-stage testing of FFA, peroxide value, moisture, and chemical parameters.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    text: 'Samples from live production batches match approved specifications.',
  },
  {
    icon: FileCheck,
    title: 'Export Ready',
    text: 'Full documentation and compliance for global agricultural exports.',
  },
];

export default function Quality() {
  return (
    <div className="page">
      <PageHero
        eyebrow="Certifications & Quality Assurance"
        title="India's Quality Benchmark for Global Edible Oil Markets"
        subtitle={`"Quality is not claimed — it is verified." At ${site.parentBrand}, this philosophy is embedded in every stage of our process.`}
        image={images.qualityCheck}
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Certifications"
            title="Global Accreditations & Compliance"
          />
          <motion.div
            className="certs-grid certs-grid--detailed"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {certifications.map((cert) => (
              <motion.div key={cert.title} className="cert-card" variants={scaleIn}>
                <h3>{cert.title}</h3>
                <p>{cert.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--alt" id="quality">
        <div className="container two-col quality-lab">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <h2>Laboratory Validation & Quality Control</h2>
            <p>Our multi-stage testing ensures that every shipment matches defined specifications.</p>
            <ul className="check-list check-list--large">
              {labValidation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className="quality-lab__image"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scaleIn}
          >
            <img src={images.qualityCheck} alt="Quality control testing" />
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading title="Quality Control Process" />
          <motion.div
            className="quality-process-visual"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <img src={images.qualityProcess} alt="From farm to bottle – three phase quality process" />
          </motion.div>
          <motion.div
            className="process-timeline process-timeline--compact"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {qualitySteps.map((step, i) => (
              <motion.div key={step.step} className="process-step" variants={scaleIn}>
                <div className="process-step__number">{step.step}</div>
                <div className="process-step__content">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
                {i < qualitySteps.length - 1 && <div className="process-step__line" />}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <motion.div
            className="quality-grid"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {qualityPillars.map((item) => (
              <motion.div key={item.title} className="quality-card" variants={scaleIn}>
                <item.icon size={32} className="quality-card__icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
