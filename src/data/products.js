import { images } from './images';

export const products = {
  coldPress: {
    id: 'cold-press',
    slug: 'cold-press',
    name: 'Cold-Pressed Groundnut Oil',
    shortName: 'Cold-Pressed',
    badge: '100% Export Grade | Sourced from Gujarat',
    tagline: 'Naturally Extracted. Rich in Aroma. Crafted for Premium Applications.',
    description:
      'Cold-Pressed Groundnut Oil is valued in global markets for its natural extraction, rich aroma, and authentic taste. Produced using low-temperature methods, it preserves its inherent nutritional properties and characteristic flavor—making it ideal for buyers who prioritize purity and minimal processing.',
    extendedDescription:
      'Unlike highly processed oils, it maintains its original profile, offering a balanced combination of taste, color, and nutrition. Designed for markets that value authenticity, purity, and uncompromised quality.',
    image: images.coldPress,
    heroColor: '#3d5a2c',
    accentColor: '#8fbc6a',
    hsCode: '15081000',
    origin: 'India (Sourced from Gujarat)',
    extractionMethod: 'Cold-Pressed (Low Temperature)',
    specs: [
      { label: 'Product', value: 'Cold-Pressed Groundnut Oil' },
      { label: 'Variants', value: 'Filtered / Unfiltered' },
      { label: 'HS Code', value: '15081000' },
      { label: 'Origin', value: 'India (Sourced from Gujarat)' },
      { label: 'Extraction Method', value: 'Cold-Pressed (Low Temperature)' },
      { label: 'Color', value: 'Golden Yellow' },
      { label: 'Aroma', value: 'Natural, Rich & Nutty' },
      { label: 'Taste', value: 'Mild to Distinctive Groundnut Flavor' },
      { label: 'Shelf Life', value: '9 – 12 Months' },
      { label: 'Packaging', value: '250 ml / 500 ml / 1 L / 5 L PET, 15 L / 20 L Tins, 190 Kg Drums' },
    ],
    chemicalSpecs: [
      { label: 'Free Fatty Acid (FFA)', value: '≤ 2.0%' },
      { label: 'Peroxide Value', value: '≤ 10 meq O₂/kg oil' },
      { label: 'Moisture & Impurities', value: '≤ 0.25%' },
      { label: 'Iodine Value', value: '85 – 100' },
      { label: 'Saponification Value', value: '188 – 196' },
      { label: 'Unsaponifiable Matter', value: '≤ 1.0%' },
    ],
    nutrition: [
      { label: 'Energy', value: '884 kcal' },
      { label: 'Total Fat', value: '100 g' },
      { label: 'Saturated Fat', value: '16–18 g' },
      { label: 'MUFA', value: '45–50 g' },
      { label: 'PUFA', value: '30–35 g' },
      { label: 'Vitamin E', value: '15–20 mg' },
      { label: 'Cholesterol', value: '0 mg' },
      { label: 'Trans Fat', value: '0 g' },
    ],
    applications: [
      {
        title: 'Gourmet Cooking & Premium Kitchens',
        text: 'Enhances flavor with its natural aroma and rich taste, ideal for gourmet cooking, specialty cuisines, and premium culinary applications.',
        image: images.applications.gourmetCooking,
      },
      {
        title: 'Healthy & Clean-Label Foods',
        text: 'With minimal processing and natural composition, widely used in health-conscious food products that prioritize clean-label ingredients.',
        image: images.applications.healthyFood,
      },
      {
        title: 'Food Processing Industry',
        text: 'Consistent quality and stable performance make it suitable for food processing where reliability, flavor balance, and consistency are essential.',
        image: images.applications.foodProcessingCold,
      },
    ],
    benefits: [
      {
        title: 'Low-Temperature Extraction',
        text: 'Produced using controlled, low-heat methods that preserve the oil\'s natural structure, aroma, and nutritional integrity.',
      },
      {
        title: 'Rich, Natural Aroma & Taste',
        text: 'Retains its characteristic nutty flavor and aroma, enhancing the sensory appeal of food without artificial additives.',
      },
      {
        title: 'Naturally Nutritive Composition',
        text: 'Contains beneficial fats and Vitamin E, supporting balanced formulations and clean-label ingredients.',
      },
    ],
  },
  refined: {
    id: 'refined',
    slug: 'refined',
    name: 'Refined Groundnut Oil',
    shortName: 'Refined',
    badge: '100% Export Grade | Sourced from Gujarat',
    tagline: 'Consistent, high-performance oil crafted for global food applications.',
    description:
      'Refined Groundnut Oil is highly regarded in global markets for its purity, clarity, and dependable performance. Processed using advanced refining techniques, it delivers a clean, stable oil with extended shelf life—well suited for commercial and large-scale applications.',
    extendedDescription:
      'Designed for efficiency, it offers a neutral taste and high smoke point, ensuring seamless use across diverse cooking methods. Ideal for modern food industries supporting high-temperature cooking and continuous operations.',
    image: images.refined,
    heroColor: '#5c4a1f',
    accentColor: '#c9a227',
    hsCode: '15081000',
    origin: 'India (Sourced from Gujarat)',
    extractionMethod: 'Fully Refined (Neutralized, Bleached & Deodorized)',
    specs: [
      { label: 'Product', value: 'Refined Groundnut Oil' },
      { label: 'Variants', value: 'Filtered / Double Filtered' },
      { label: 'HS Code', value: '15081000' },
      { label: 'Origin', value: 'India (Sourced from Gujarat)' },
      { label: 'Processing Method', value: 'Fully Refined (Neutralized, Bleached & Deodorized)' },
      { label: 'Color', value: 'Clear, Light Golden' },
      { label: 'Aroma', value: 'Neutral' },
      { label: 'Taste', value: 'Clean & Mild (Non-Interfering)' },
      { label: 'Smoke Point', value: 'High (Suitable for Deep Frying)' },
      { label: 'Shelf Life', value: '12 – 18 Months' },
      { label: 'Packaging', value: '250 ml / 500 ml / 1 L / 5 L PET, 15 L / 20 L Tins, 190 Kg Drums' },
    ],
    chemicalSpecs: [
      { label: 'Free Fatty Acid (FFA)', value: '≤ 0.1%' },
      { label: 'Peroxide Value', value: '≤ 5 meq O₂/kg oil' },
      { label: 'Moisture & Impurities', value: '≤ 0.05%' },
      { label: 'Iodine Value', value: '85 – 100' },
      { label: 'Saponification Value', value: '188 – 196' },
      { label: 'Unsaponifiable Matter', value: '≤ 1.0%' },
    ],
    nutrition: [
      { label: 'Energy', value: '880 – 900 kcal' },
      { label: 'Total Fat', value: '90 – 100 g' },
      { label: 'Saturated Fat', value: '16–18 g' },
      { label: 'MUFA', value: '45–50 g' },
      { label: 'PUFA', value: '30–35 g' },
      { label: 'Vitamin E', value: '15–18 mg' },
      { label: 'Cholesterol', value: '0 mg' },
      { label: 'Trans Fat', value: '0 g' },
    ],
    applications: [
      {
        title: 'Commercial Frying',
        text: 'Ideal for deep frying snacks, chips, and fast food, delivering crispy texture and consistent results even at high temperatures.',
        image: images.applications.commercialFrying,
      },
      {
        title: 'Food Processing Industry',
        text: 'Widely used in large-scale manufacturing for snacks, ready-to-eat products, and packaged foods requiring stable cooking oil.',
        image: images.applications.foodProcessingRefined,
      },
      {
        title: 'HoReCa & Bulk Cooking',
        text: 'Preferred by hotels, restaurants, and catering services for its reliability, long usage cycles, and neutral flavor.',
        image: images.applications.horeca,
      },
    ],
    benefits: [
      {
        title: 'High Smoke Point Performance',
        text: 'Designed for high-temperature cooking and deep frying, ensuring stability without breaking down.',
      },
      {
        title: 'Neutral Taste & Clean Profile',
        text: 'Refined to remove strong flavors and odors, allowing food to retain its original taste across diverse cuisines.',
      },
      {
        title: 'Consistent & Scalable Quality',
        text: 'Produced through controlled refining processes to deliver uniform quality, longer shelf life, and dependable performance.',
      },
    ],
  },
};

export const homeFeatures = [
  {
    icon: '🛡️',
    title: 'Purity Assured & Globally Compliant',
    text: 'Every batch is processed under strict quality controls and tested to meet international safety and compliance standards.',
  },
  {
    icon: '⚖️',
    title: 'Consistent Quality, Every Shipment',
    text: 'Our controlled production processes ensure that every batch matches approved specifications—delivering uniform color, aroma, and quality.',
  },
  {
    icon: '🔄',
    title: 'Reliable Supply, Seamless Reordering',
    text: 'With efficient processing and dependable logistics, we ensure timely delivery and consistent supply for repeat orders.',
  },
  {
    icon: '📊',
    title: 'Quality You Can Measure',
    text: 'We maintain precise quality parameters, including optimal FFA levels, low moisture content, and high purity.',
  },
];

export const faqs = [
  {
    q: 'What products does IndiCo Naturals offer?',
    a: 'We offer Cold-Pressed Groundnut Oil and Refined Groundnut Oil, both sourced from Gujarat, India and available for domestic and export markets.',
  },
  {
    q: 'What is the difference between cold-pressed and refined groundnut oil?',
    a: 'Cold-pressed oil is extracted at low temperature, preserving natural aroma and nutrients. Refined oil undergoes advanced processing for clarity, neutral taste, and high smoke point—ideal for commercial cooking.',
  },
  {
    q: 'What is the minimum order quantity for export?',
    a: 'MOQ depends on packaging and destination. Contact our export desk with your requirements for a formal quotation.',
  },
  {
    q: 'Do you provide lab certificates?',
    a: 'Yes. Every batch includes quality certificates. Third-party testing from SGS or equivalent is available on request.',
  },
  {
    q: 'Which oil is better for deep frying?',
    a: 'Refined Groundnut Oil is preferred for deep frying due to its high smoke point, neutral taste, and extended shelf stability.',
  },
];
