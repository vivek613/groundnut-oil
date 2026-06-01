import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUp, viewportOnce } from '../utils/motion';

export default function ProductCard({ product, index = 0 }) {
  const isCold = product.id === 'cold-press';

  return (
    <motion.article
      className={`product-card product-card--${product.id}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -8 }}
    >
      <div className="product-card__visual">
        <img src={product.image} alt={product.name} className="product-card__image" />
        <span className="product-card__badge">
          {isCold ? 'Cold-Pressed' : 'Refined'}
        </span>
      </div>
      <div className="product-card__body">
        <h3>{product.name}</h3>
        <p className="product-card__tagline">{product.tagline}</p>
        <p className="product-card__desc">{product.description.slice(0, 140)}…</p>
    <Link to={`/products/${product.slug}`} className="btn btn--outline btn--know-more">
          Know More
        </Link>
      </div>
    </motion.article>
  );
}
