import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import SectionHeading from '../components/SectionHeading';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { images } from '../data/images';

export default function Products() {
  return (
    <div className="page page--products">
      <PageHero
        eyebrow="Our Products"
        title="Groundnut Oil Collection"
        subtitle="Cold-pressed for premium culinary markets. Refined for commercial cooking and large-scale food production."
        image={images.heroPour}
      />

      <section className="section product-showcase">
        <div className="container product-showcase__grid">
          <Link to="/products/cold-press" className="product-showcase__item">
            <img src={images.coldPress} alt="Cold-Pressed Groundnut Oil" />
            <span>Cold-Pressed Groundnut Oil</span>
          </Link>
          <Link to="/products/refined" className="product-showcase__item">
            <img src={images.refined} alt="Refined Groundnut Oil" />
            <span>Refined Groundnut Oil</span>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="products-grid">
            <ProductCard product={products.coldPress} />
            <ProductCard product={products.refined} />
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionHeading
            title="Which oil fits your market?"
            subtitle="Cold-pressed preserves natural character. Refined delivers neutral performance at scale."
          />
          <div className="product-links">
            <Link to="/products/cold-press" className="btn btn--primary">Cold-Pressed Details</Link>
            <Link to="/products/refined" className="btn btn--secondary">Refined Details</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
