import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ChevronDown } from 'lucide-react';
import PageHero from '../components/PageHero';
import { site } from '../data/site';
import { faqs } from '../data/products';
import { images } from '../data/images';
import { fadeUp, scaleIn, viewportOnce } from '../utils/motion';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    product: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page">
      <PageHero
        eyebrow="Contact"
        title="Ready to Define Your Specifications?"
        subtitle="Connect with our export desk to discuss your requirements, specifications, and global supply needs."
        image={images.commitment}
      />

      <section className="section">
        <div className="container contact-grid">
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <img src={images.heroProduct} alt={site.name} className="contact-info__product" />
            <h2>Connect with Our Export Desk</h2>
            <ul>
              <li><Mail size={20} /> {site.email}</li>
              <li><MapPin size={20} /> {site.address}</li>
              <li><Phone size={20} /> {site.phone}</li>
            </ul>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={scaleIn}
          >
            {submitted ? (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <h3>Thank you!</h3>
                <p>Your inquiry has been received. Our export desk will contact you shortly.</p>
              </motion.div>
            ) : (
              <>
                <h3 className="contact-form__title">Get Your Global Supply Quote</h3>
                <div className="form-row">
                  <label>
                    Full Name / Company Name
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name or company"
                    />
                  </label>
                </div>
                <div className="form-row form-row--2">
                  <label>
                    Email Address
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                    />
                  </label>
                  <label>
                    Phone No.
                    <div className="phone-input">
                      <select
                        name="countryCode"
                        value={form.countryCode}
                        onChange={handleChange}
                        className="phone-input__code"
                      >
                        <option value="+91">+91 India</option>
                        <option value="+1">+1 USA</option>
                        <option value="+44">+44 UK</option>
                        <option value="+971">+971 UAE</option>
                        <option value="+65">+65 Singapore</option>
                        <option value="+66">+66 Thailand</option>
                        <option value="+84">+84 Vietnam</option>
                        <option value="+63">+63 Philippines</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                      />
                    </div>
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Product Interest
                    <select name="product" required value={form.product} onChange={handleChange}>
                      <option value="">Select Product</option>
                      <option value="cold-press">Cold-Pressed Groundnut Oil</option>
                      <option value="refined">Refined Groundnut Oil</option>
                      <option value="both">Both Products</option>
                      <option value="other">Other</option>
                    </select>
                  </label>
                </div>
                <div className="form-row">
                  <label>
                    Specific Requirements
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Quantity, destination port, packaging requirements..."
                    />
                  </label>
                </div>
                <button type="submit" className="btn btn--primary btn--lg">
                  <Send size={18} /> Send Inquiry
                </button>
              </>
            )}
          </motion.form>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                className={`faq-item${openFaq === i ? ' faq-item--open' : ''}`}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                variants={fadeUp}
              >
                <button
                  type="button"
                  className="faq-item__question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <ChevronDown size={20} className="faq-item__chevron" />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      className="faq-item__answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
