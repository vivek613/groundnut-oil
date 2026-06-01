/**
 * All images from public/images — mapped to original filenames:
 *
 * logo.png              ← Indico Natru.png
 * hero-oil-pour.png     ← Oil pour and penuts.png
 * hero-oil.png          ← oil por.png (branded bottle)
 * cold-press.png        ← Cold Press.png
 * refined.png           ← Refined.png
 * commitment.png        ← Comitment.png
 * roots.png             ← Roots.png
 * expertise.png         ← Expertise.png
 * progress.png          ← Pogress.png
 * quality-process.png   ← 3 phase image.png
 * quality-check.png     ← Qulity check.png
 * gourmet-cooking.png   ← Gorment cooking.png
 * healthy-food.png      ← Healthy food.png
 * food-processing-cold.png ← Food Processing.png
 * commercial-frying.png ← Comrcial frying.png
 * food-processing-refined.png ← Food pro-refined.png
 * horeca.png            ← HoReCa.png
 */
export const images = {
  logo: '/images/logo.png',
  heroPour: '/images/hero-oil-pour.png',
  heroProduct: '/images/hero-oil.png',
  coldPress: '/images/cold-press.png',
  refined: '/images/refined.png',
  commitment: '/images/commitment.png',
  roots: '/images/roots.png',
  expertise: '/images/expertise.png',
  progress: '/images/progress.png',
  qualityProcess: '/images/quality-process.png',
  qualityCheck: '/images/quality-check.png',
  applications: {
    gourmetCooking: '/images/gourmet-cooking.png',
    healthyFood: '/images/healthy-food.png',
    foodProcessingCold: '/images/food-processing-cold.png',
    commercialFrying: '/images/commercial-frying.png',
    foodProcessingRefined: '/images/food-processing-refined.png',
    horeca: '/images/horeca.png',
  },
};

/** All image paths for gallery / verification */
export const allImages = Object.values({
  ...images,
  ...images.applications,
}).filter((v) => typeof v === 'string');
