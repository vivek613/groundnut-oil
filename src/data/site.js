export const site = {
  name: 'IndiCo Naturals',
  parentBrand: 'IndiCo Global',
  tagline: 'Connecting India to the World',
  subTagline: 'Pure & Wholesome',
  heroTitle: 'From farm to bottle – quality at every step',
  heroSubtitle: 'Pure groundnut oil you can rely on',
  email: 'info@indicoglobal.com',
  phone: '+91 6351011956',
  address: 'Surat, Gujarat, India',
  origin: 'Sourced from Gujarat, India',
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
  },
};

export const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'Products',
    path: '/products',
    children: [
      { label: 'Cold-Pressed Oil', path: '/products/cold-press' },
      { label: 'Refined Oil', path: '/products/refined' },
    ],
  },
  { label: 'Certification', path: '/quality' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const certifications = [
  {
    title: 'Government of India Compliance',
    text: 'Adherence to domestic food safety and manufacturing standards',
  },
  {
    title: 'FSSAI Certified',
    text: 'Ensuring safe processing and regulatory compliance',
  },
  {
    title: 'APEDA Registered Exporter',
    text: 'Authorized for global agricultural exports',
  },
  {
    title: 'International Food Safety Standards',
    text: 'Aligned with global quality and hygiene protocols',
  },
];

export const advantages = [
  {
    icon: '🌱',
    title: 'Precision Sourcing',
    text: 'We ensure careful sourcing of high-quality groundnuts through reliable networks, maintaining consistency, traceability, and superior raw material standards from the very beginning.',
  },
  {
    icon: '⚙️',
    title: 'Controlled Processing',
    text: 'Utilizing advanced extraction and filtration methods, we preserve the natural characteristics of groundnut oil while ensuring clarity, safety, and long shelf life.',
  },
  {
    icon: '🛡️',
    title: 'Quality Assurance',
    text: 'Our oils are processed under strict quality controls, maintaining optimal parameters for purity, aroma, and stability. Each batch is tested to meet international standards.',
  },
  {
    icon: '🧪',
    title: 'Batch Consistency',
    text: 'Every order is fulfilled using controlled production processes, ensuring that approved samples accurately represent the final shipment.',
  },
  {
    icon: '🚢',
    title: 'Reliable Logistics',
    text: 'We offer secure and export-grade packaging solutions, supported by efficient logistics to ensure safe transit and timely delivery.',
  },
];

export const qualitySteps = [
  {
    step: '01',
    title: 'Raw Material Selection',
    text: 'Carefully sourced groundnuts are evaluated for quality before processing begins.',
  },
  {
    step: '02',
    title: 'Controlled Processing',
    text: 'Advanced extraction and refining methods ensure consistency, clarity, and stability.',
  },
  {
    step: '03',
    title: 'Final Testing & Dispatch',
    text: 'Each batch is tested and verified before shipment to maintain product integrity during transit.',
  },
];

export const labValidation = [
  'Controlled Refining & Processing under strict parameters',
  'Chemical Parameter Monitoring — FFA, peroxide value, and moisture',
  'Contaminant-Free Assurance in hygienic environments',
  'Third-Party Testing available through SGS or equivalent labs',
];

export const aboutPillars = [
  {
    title: 'Our Foundation',
    text: 'Rooted in India\'s rich agricultural legacy, we work closely with trusted sourcing networks to ensure the highest quality raw materials. Our strong foundation enables us to deliver authentic, consistent groundnut oil to global markets.',
    imageKey: 'roots',
  },
  {
    title: 'Our Expertise',
    text: 'With deep industry knowledge and refined processes, we specialize in producing groundnut oil that retains its natural aroma, purity, and stability—meeting diverse international requirements with precision.',
    imageKey: 'expertise',
  },
  {
    title: 'Our Evolution',
    text: 'Evolving with global standards, we integrate advanced processing techniques and efficient export practices. Our continuous focus on improvement allows us to meet the growing demands of international markets.',
    imageKey: 'progress',
  },
];
