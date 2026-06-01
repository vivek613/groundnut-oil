import PageHero from '../components/PageHero';
import { QuoteSection } from '../components/QuoteForm';
import { images } from '../data/images';

export default function Contact() {
  return (
    <div className="page">
      <PageHero
        eyebrow="Contact Us"
        title="Ready to Define your Specs?"
        subtitle="Connect with our export desk for quotes, samples, and global supply requirements."
        image={images.commitment}
      />
      <QuoteSection />
    </div>
  );
}
