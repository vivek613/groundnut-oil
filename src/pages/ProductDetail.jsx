import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';
import { fadeUp, staggerContainer, scaleIn, viewportOnce } from '../utils/motion';

export default function ProductDetail({ type }) {
  const product = products[type];

  if (!product) {
    return (
      <div className="container page-hero">
        <h1>Product not found</h1>
        <Link to="/products">Back to products</Link>
      </div>
    );
  }

  return (
    <div className={`page page--product-detail page--${product.id}`}>
      <section
        className="product-hero"
        style={{ '--product-color': product.heroColor, '--product-accent': product.accentColor }}
      >
        <div className="container product-hero__inner">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <Link to="/products" className="back-link">
              <ArrowLeft size={16} /> All Products
            </Link>
            <span className="product-hero__badge">{product.badge}</span>
            <h1>{product.name}</h1>
            <p className="product-hero__tagline">{product.tagline}</p>
            <p className="product-hero__desc">{product.description}</p>
            <p className="product-hero__desc">{product.extendedDescription}</p>
            <Link to="/contact" className="btn btn--primary">Request Quote</Link>
          </motion.div>

          <motion.div
            className="product-hero__visual"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img src={product.image} alt={product.name} className="product-hero__image" />
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div
            className="benefits-grid"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {product.benefits.map((b) => (
              <motion.div key={b.title} className="benefit-card" variants={scaleIn}>
                <Check className="benefit-card__icon" size={22} />
                <h3>{b.title}</h3>
                <p>{b.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container two-col">
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <h2>Product Specifications</h2>
            <table className="spec-table">
              <tbody>
                {product.specs.map((s) => (
                  <tr key={s.label}>
                    <th>{s.label}</th>
                    <td>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={viewportOnce} variants={fadeUp}>
            <h2>Chemical Specifications</h2>
            <table className="spec-table">
              <tbody>
                {product.chemicalSpecs.map((s) => (
                  <tr key={s.label}>
                    <th>{s.label}</th>
                    <td>{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Applications in Food Processing</h2>
          <div className="applications-grid">
            {product.applications.map((app, i) => (
              <motion.div
                key={app.title}
                className="application-card"
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
              >
                <img src={app.image} alt={app.title} className="application-card__image" />
                <div className="application-card__body">
                  <h3>{app.title}</h3>
                  <p>{app.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="section-title">Nutritional Profile (Per 100 ml)</h2>
          <p className="section-note">Values may vary slightly based on processing method and origin.</p>
          <motion.div
            className="nutrition-grid"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={staggerContainer}
          >
            {product.nutrition.map((n) => (
              <motion.div key={n.label} className="nutrition-card" variants={scaleIn}>
                <span className="nutrition-card__value">{n.value}</span>
                <span className="nutrition-card__label">{n.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
