import { site } from '../data/site';

export default function QuoteForm() {
  return (
    <div className="quote-form-wrap">
      <div className="quote-form-info">
        <h3>Ready to Define your Specs?</h3>
        <p className="quote-form-info__label">Speak to Our Export Desk</p>
        <ul className="quote-form-info__list">
          <li>{site.email}</li>
          <li>{site.address}</li>
          <li>{site.phone}</li>
        </ul>
      </div>
      <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
        <h4>Request a Professional Quote</h4>
        <label>
          Full Name / Company Name
          <input type="text" placeholder="Your name or company" required />
        </label>
        <label>
          Email
          <input type="email" placeholder="you@company.com" required />
        </label>
        <label>
          Phone No.
          <input type="tel" placeholder="+91 ..." />
        </label>
        <label>
          Product Interest
          <select required defaultValue="">
            <option value="" disabled>Select Product</option>
            <option value="cold">Cold-Pressed Groundnut Oil</option>
            <option value="refined">Refined Groundnut Oil</option>
            <option value="other">Other</option>
          </select>
        </label>
        <label>
          Message
          <textarea rows={4} placeholder="Your requirements..." />
        </label>
        <button type="submit" className="btn btn--primary">Send</button>
      </form>
    </div>
  );
}

export function QuoteSection() {
  return (
    <section className="section quote-section">
      <div className="container">
        <QuoteForm />
      </div>
    </section>
  );
}
