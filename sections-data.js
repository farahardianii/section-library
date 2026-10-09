// Section Library Data — Curated Reusable UI Sections
// All paths point to genuine standalone vanilla HTML files in the repository.
// Supports both browser global (window.sections) and ES modules if imported.

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    const data = factory();
    root.categories = data.categories;
    root.sections = data.sections;
    root.getSectionById = data.getSectionById;
  }
})(typeof self !== 'undefined' ? self : this, function () {

  const categories = [
    { key: "all", name: "All Sections", icon: "grid" },
    { key: "hero", name: "Hero", icon: "sparkles", count: 6 },
    { key: "features", name: "Features", icon: "layers", count: 2 },
    { key: "about", name: "About", icon: "compass", count: 1 },
    { key: "cta", name: "CTA", icon: "zap", count: 1 },
    { key: "faq", name: "FAQ", icon: "help-circle", count: 1 },
    { key: "team", name: "Team", icon: "users", count: 1 },
    { key: "blog", name: "Blog", icon: "book-open", count: 1 },
    { key: "testimonial", name: "Testimonial", icon: "message-square", count: 1 },
    // Planned / Roadmap
    { key: "pricing", name: "Pricing", comingSoon: true },
    { key: "contact", name: "Contact", comingSoon: true },
    { key: "footer", name: "Footer", comingSoon: true },
    { key: "navbar", name: "Navbar", comingSoon: true },
    { key: "stats", name: "Stats", comingSoon: true },
    { key: "gallery", name: "Gallery", comingSoon: true },
    { key: "newsletter", name: "Newsletter", comingSoon: true },
    { key: "process", name: "Process", comingSoon: true },
    { key: "comparison", name: "Comparison", comingSoon: true }
  ];

  const sections = [
    // ---------------- HERO ----------------
    {
      id: "meridian-hero",
      key: "hero",
      name: "Galerie Meridian",
      description: "Editorial hero gallery with monochromatic palette, rotating display, and asymmetric typographic layout.",
      category: "hero",
      preview: "https://picsum.photos/seed/meridian-ink/640/400.jpg",
      file: "Hero Section/Hero Section.html",
      link: "Hero Section/Hero Section.html",
      tags: ["Editorial", "Monochrome", "Asymmetric", "Gallery"]
    },
    {
      id: "sunup-joy-run",
      key: "hero",
      name: "SUNUP — Joy Run Club",
      description: "Vibrant community running event hero with live countdown, wave system, and dynamic city series badge.",
      category: "hero",
      preview: "https://picsum.photos/seed/sunup/640/400.jpg",
      file: "sections/hero/sunup-joy-run-club/index.html",
      link: "sections/hero/sunup-joy-run-club/index.html",
      tags: ["Community", "Event", "Countdown", "Bold"]
    },
    {
      id: "destinations-slider",
      key: "hero",
      name: "Destinations — Travel Slider",
      description: "Immersive carousel travel showcase with diagonal visual layout, responsive slider controls, and full imagery.",
      category: "hero",
      preview: "https://picsum.photos/seed/destinations/640/400.jpg",
      file: "sections/hero/destinations-v2/index.html",
      link: "sections/hero/destinations-v2/index.html",
      tags: ["Travel", "Carousel", "Slider", "Photography"]
    },
    {
      id: "nimbus-ai",
      key: "hero",
      name: "Nimbus — AI Workspace",
      description: "Modern SaaS AI workspace hero with glassmorphic cards, metrics counter, and floating capability badges.",
      category: "hero",
      preview: "https://picsum.photos/seed/nimbus/640/400.jpg",
      file: "Hero Section/Hero Section 2.html",
      link: "Hero Section/Hero Section 2.html",
      tags: ["SaaS", "AI", "Glassmorphic", "Product"]
    },
    {
      id: "trendzone-fashion",
      key: "hero",
      name: "TrendZone — Bold Fashion",
      description: "High-contrast editorial street fashion hero with bold headline typography and layered promotional badges.",
      category: "hero",
      preview: "https://picsum.photos/seed/fashion/640/400.jpg",
      file: "Hero Section/Hero Section 4.html",
      link: "Hero Section/Hero Section 4.html",
      tags: ["Fashion", "E-commerce", "Editorial", "Bold"]
    },
    {
      id: "axiom-neo-minimal",
      key: "hero",
      name: "AXIOM // ZERO — Cryptographic Compute",
      description: "Web3 verifiable compute hero with calibrated dark ground, monospace data stream, and electric blue accent.",
      category: "hero",
      preview: "https://picsum.photos/seed/crypto/640/400.jpg",
      file: "web3-neo-minimal/index.html",
      link: "web3-neo-minimal/index.html",
      tags: ["Web3", "Neo-minimal", "Dark", "Developer"]
    },

    // ---------------- ABOUT ----------------
    {
      id: "excellence-about",
      key: "about",
      name: "Excellence — About Section",
      description: "Luxury brand positioning section with architectural backdrop, mission narrative, and key metric counters.",
      category: "about",
      preview: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=640&q=80",
      file: "About Section/About Section.html",
      link: "About Section/About Section.html",
      tags: ["Luxury", "Story", "Architecture", "Metrics"]
    },

    // ---------------- FEATURES ----------------
    {
      id: "crafted-features",
      key: "features",
      name: "Crafted with Care",
      description: "Modern team workflow section with animated interactive capsules, particle burst effects, and clean card nodes.",
      category: "features",
      preview: "https://picsum.photos/seed/crafted/640/400.jpg",
      file: "Feature Section/feature section.html",
      link: "Feature Section/feature section.html",
      tags: ["Interactive", "Workflow", "Animation", "Cards"]
    },
    {
      id: "lumiere-features",
      key: "features",
      name: "Lumière — Features Grid",
      description: "Refined aesthetic feature grid with subtle hover glows, icon pill accents, and benefit bullet points.",
      category: "features",
      preview: "https://picsum.photos/seed/lumiere/640/400.jpg",
      file: "Feature Section/feature section 2.html",
      link: "Feature Section/feature section 2.html",
      tags: ["Grid", "Minimal", "Glow", "Bento"]
    },

    // ---------------- CTA ----------------
    {
      id: "rasa-nusantara-cta",
      key: "cta",
      name: "Join Our Kitchen — Rasa Nusantara",
      description: "Warm cultural culinary recruitment banner with radial decorative badges and conversion-driven cards.",
      category: "cta",
      preview: "https://picsum.photos/seed/kitchen/640/400.jpg",
      file: "CTA Section/CTA Section.html",
      link: "CTA Section/CTA Section.html",
      tags: ["Culinary", "Recruitment", "Warm", "Conversion"]
    },

    // ---------------- FAQ ----------------
    {
      id: "straight-answers-faq",
      key: "faq",
      name: "FAQ — Straight Answers",
      description: "Accessible, smooth accordion disclosure with category filtering and zero unnecessary fluff.",
      category: "faq",
      preview: "https://picsum.photos/seed/faq-clean/640/400.jpg",
      file: "FAQ Section/Faq Section.html",
      link: "FAQ Section/Faq Section.html",
      tags: ["Accordion", "Support", "Questions", "Clean"]
    },

    // ---------------- TEAM ----------------
    {
      id: "team-mission",
      key: "team",
      name: "The Faces Behind Our Mission",
      description: "Leadership & team roster grid with interactive department filter pills and modal biography triggers.",
      category: "team",
      preview: "https://picsum.photos/seed/team-clean/640/400.jpg",
      file: "Team Section/Team Section.html",
      link: "Team Section/Team Section.html",
      tags: ["Team", "Department Filter", "Profiles", "Avatars"]
    },

    // ---------------- BLOG ----------------
    {
      id: "quiet-hours-blog",
      key: "blog",
      name: "Quiet Hours Journal",
      description: "Editorial publication grid with featured lead story, reading time indicators, and tag filters.",
      category: "blog",
      preview: "https://picsum.photos/seed/journal/640/400.jpg",
      file: "Blog Section/Blog Section.html",
      link: "Blog Section/Blog Section.html",
      tags: ["Editorial", "Magazine", "Typography", "Grid"]
    },

    // ---------------- TESTIMONIAL ----------------
    {
      id: "creative-process-testimonial",
      key: "testimonial",
      name: "Creative Process & Proof",
      description: "Interactive customer journey showcase featuring a five-stage timeline, verified quote cards, and social proof.",
      category: "testimonial",
      preview: "https://picsum.photos/seed/proof/640/400.jpg",
      file: "Testimonial Section/testimonial section.html",
      link: "Testimonial Section/testimonial section.html",
      tags: ["Social Proof", "Timeline", "Reviews", "Journey"]
    }
  ];

  // Helper function
  function getSectionById(id) {
    return sections.find(s => s.id === id || s.key === id);
  }

  return {
    categories,
    sections,
    getSectionById
  };
});