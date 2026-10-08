// Section library data - extracted from existing section files
// Keeps references intact without rewriting implementations
// Uses global window variables for vanilla JS compatibility

window.categories = [
  { key: "hero", name: "Hero", count: 8 },
  { key: "about", name: "About", count: 1 },
  { key: "features", name: "Features", count: 2 },
  { key: "cta", name: "CTA", count: 1 },
  { key: "faq", name: "FAQ", count: 1 },
  { key: "team", name: "Team", count: 1 },
  { key: "blog", name: "Blog", count: 1 },
  { key: "testimonial", name: "Testimonial", count: 1 },
];

window.sections = [
  // Hero sections (from Hero Section folder + sections/hero subfolder)
  {
    id: "hero-1",
    key: "hero",
    name: "Galerie Meridian",
    description: "Editorial hero gallery with monochromatic palette and asymmetric layout",
    category: "hero",
    preview: "https://picsum.photos/seed/meridian-ink/400/600.jpg",
    file: "Hero Section.html",
    link: "Hero Section.html"
  },
  {
    id: "hero-2",
    key: "hero",
    name: "SUNUP — Joy Run Club",
    description: "Running event website with countdown, wave system, and city series",
    category: "hero",
    preview: "https://picsum.photos/seed/sunup/400/600.jpg",
    file: "sections/hero/sunup-joy-run-club/index.html",
    link: "sections/hero/sunup-joy-run-club/index.html"
  },
  {
    id: "hero-3",
    key: "hero",
    name: "Destinations",
    description: "Carousel-style travel destination showcase with diagonal imagery",
    category: "hero",
    preview: "https://picsum.photos/seed/destinations/400/600.jpg",
    file: "sections/hero/destinations-v2/index.html",
    link: "sections/hero/destinations-v2/index.html"
  },
  {
    id: "hero-4",
    key: "hero",
    name: "Hero Section 4",
    description: "Hero exploration with Galerie Meridian design reference",
    category: "hero",
    preview: "https://picsum.photos/seed/hero4/400/600.jpg",
    file: "Hero Section 4.html",
    link: "Hero Section 4.html"
  },
  {
    id: "hero-5",
    key: "hero",
    name: "Hero Section 5",
    description: "Hero exploration variant",
    category: "hero",
    preview: "https://picsum.photos/seed/hero5/400/600.jpg",
    file: "Hero Section 5.html",
    link: "Hero Section 5.html"
  },
  {
    id: "hero-6",
    key: "hero",
    name: "Hero Section 6",
    description: "Hero exploration variant",
    category: "hero",
    preview: "https://picsum.photos/seed/hero6/400/600.jpg",
    file: "Hero Section 6.html",
    link: "Hero Section 6.html"
  },

  // About section
  {
    id: "about-1",
    key: "about",
    name: "Excellence Section",
    description: "Premium brand positioning section with high-end visual design",
    category: "about",
    preview: "https://picsum.photos/seed/about/400/600.jpg",
    file: "About Section.html",
    link: "About Section.html"
  },

  // Feature sections
  {
    id: "feature-1",
    key: "features",
    name: "Crafted with Care",
    description: "Modern team workflow section with animated capsules and particles",
    category: "features",
    preview: "https://picsum.photos/seed/feature1/400/600.jpg",
    file: "feature section.html",
    link: "feature section.html"
  },
  {
    id: "feature-2",
    key: "features",
    name: "Feature Section 2",
    description: "Second feature section variant",
    category: "features",
    preview: "https://picsum.photos/seed/feature2/400/600.jpg",
    file: "feature section 2.html",
    link: "feature section 2.html"
  },

  // CTA section
  {
    id: "cta-1",
    key: "cta",
    name: "CTA Section",
    description: "Indonesian food-themed hiring section with radial tile layout",
    category: "cta",
    preview: "https://picsum.photos/seed/cta/400/600.jpg",
    file: "CTA Section.html",
    link: "CTA Section.html"
  },

  // FAQ section
  {
    id: "faq-1",
    key: "faq",
    name: "FAQ Section",
    description: "Straight answers FAQ with accordion-style disclosure",
    category: "faq",
    preview: "https://picsum.photos/seed/faq/400/600.jpg",
    file: "Faq Section.html",
    link: "Faq Section.html"
  },

  // Team section
  {
    id: "team-1",
    key: "team",
    name: "Team Section",
    description: "Profile grid with department filtering and radial card layout",
    category: "team",
    preview: "https://picsum.photos/seed/team/400/600.jpg",
    file: "Team Section.html",
    link: "Team Section.html"
  },

  // Blog section
  {
    id: "blog-1",
    key: "blog",
    name: "Blog Section",
    description: "Writing archive with category filtering and article grid",
    category: "blog",
    preview: "https://picsum.photos/seed/blog/400/600.jpg",
    file: "Blog Section.html",
    link: "Blog Section.html"
  },

  // Testimonial section
  {
    id: "testimonial-1",
    key: "testimonial",
    name: "Testimonial Section",
    description: "Creative process showcase with five-stage journey visualization",
    category: "testimonial",
    preview: "https://picsum.photos/seed/testimonial/400/600.jpg",
    file: "testimonial section.html",
    link: "testimonial section.html"
  },
];