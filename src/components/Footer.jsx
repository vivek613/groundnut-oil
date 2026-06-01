import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { site, navLinks } from '../data/site';
import { images } from '../data/images';

export default function Footer() {
  const productLinks = navLinks.find((l) => l.children)?.children ?? [];

  return (
    <footer className="footer footer--agro">
      <div className="container footer__grid">
        <div className="footer__brand">
          <img src={images.logo} alt={site.name} className="footer__logo" />
          <div className="footer__social">
            <a href={site.social.facebook} aria-label="Facebook">Facebook</a>
            <a href={site.social.twitter} aria-label="Twitter">Twitter</a>
            <a href={site.social.youtube} aria-label="Youtube">Youtube</a>
          </div>
        </div>

        <div>
          <h4>Policies</h4>
          <ul>
            <li><Link to="/quality">Privacy Policy</Link></li>
            <li><Link to="/quality">Terms & Conditions</Link></li>
            <li><Link to="/quality">Shipping Trade Terms</Link></li>
          </ul>
        </div>

        <div>
          <h4>Products</h4>
          <ul>
            {productLinks.map((link) => (
              <li key={link.path}><Link to={link.path}>{link.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact Us</h4>
          <ul className="footer__contact">
            <li><MapPin size={16} /> {site.address}</li>
            <li><Phone size={16} /> {site.phone}</li>
            <li><Mail size={16} /> {site.email}</li>
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
