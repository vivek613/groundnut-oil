import PageHero from '../components/PageHero';
import FAQAccordion from '../components/FAQAccordion';
import { QuoteSection } from '../components/QuoteForm';
import { faqs } from '../data/products';

export default function FAQs() {
  return (
    <div className="page">
      <PageHero
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Common questions about our groundnut oil products, export process, and quality standards."
      />
      <section className="section section--cream">
        <div className="container container--narrow">
          <FAQAccordion items={faqs} />
        </div>
      </section>
      <QuoteSection />
    </div>
  );
}
