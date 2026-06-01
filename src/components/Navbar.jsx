import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { site, navLinks } from '../data/site';
import { images } from '../data/images';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <motion.header
      className="navbar"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={() => setMobileOpen(false)}>
          <img src={images.logo} alt={site.name} className="navbar__logo-img" />
        </Link>

        <nav className="navbar__desktop">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="navbar__dropdown"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <button type="button" className="navbar__link navbar__link--dropdown">
                  {link.label} <ChevronDown size={14} />
                </button>
                <AnimatePresence>
                  {productsOpen && (
                    <motion.div
                      className="navbar__dropdown-menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.children.map((child) => (
                        <NavLink key={child.path} to={child.path} className="navbar__dropdown-item">
                          {child.label}
                        </NavLink>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <NavLink
                key={link.path + link.label}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `navbar__link${isActive ? ' navbar__link--active' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ),
          )}
        </nav>

        <Link to="/contact" className="btn btn--primary navbar__cta">
          Contact Us
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label} className="navbar__mobile-group">
                  <span className="navbar__mobile-label">{link.label}</span>
                  {link.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      className="navbar__mobile-link"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink
                  key={link.path + link.label}
                  to={link.path}
                  end={link.path === '/'}
                  className="navbar__mobile-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </NavLink>
              ),
            )}
            <Link to="/contact" className="btn btn--primary" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
