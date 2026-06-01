import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { site, navLinks } from '../data/site';
import { images } from '../data/images';

export default function Footer() {
  const productLinks = navLinks.find((l) => l.children)?.children ?? [];

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={images.logo} alt={site.name} className="footer__logo" />
          <p className="footer__tagline">{site.subTagline}</p>
          <p className="footer__desc">
            {site.parentBrand} — premium groundnut oil from Gujarat, India.
            Cold-pressed and refined variants for global markets.
          </p>
        </div>

        <div>
          <h4>Products</h4>
          <ul>
            {productLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/quality">Certification</Link></li>
            <li><Link to="/quality">Quality</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer__contact">
            <li><MapPin size={16} /> {site.address}</li>
            <li><Phone size={16} /> {site.phone}</li>
            <li><Mail size={16} /> {site.email}</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {site.parentBrand}. All rights reserved.</p>
        <p>{site.name} — {site.tagline}</p>
      </div>
    </footer>
  );
}
