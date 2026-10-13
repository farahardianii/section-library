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
    { key: "hero", name: "Hero", icon: "sparkles", count: 11 },
    { key: "features", name: "Features", icon: "layers", count: 3 },
    { key: "about", name: "About", icon: "compass", count: 2 },
    { key: "cta", name: "CTA", icon: "zap", count: 1 },
    { key: "faq", name: "FAQ", icon: "help-circle", count: 1 },
    { key: "team", name: "Team", icon: "users", count: 1 },
    { key: "blog", name: "Blog", icon: "book-open", count: 2 },
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
    {
      id: "asme-ideas-hero",
      key: "hero",
      name: "Asme — Ideas, without limits",
      description: "Clean fullscreen image hero with bottom-center serif headline, magnetic glass CTA, pointer parallax, and glow follower.",
      category: "hero",
      preview: "https://picsum.photos/seed/ideas-orange/640/400.jpg",
      file: "sections/hero/asme-dark-hero/index.html",
      link: "sections/hero/asme-dark-hero/index.html",
      tags: ["Editorial", "Image", "Interactive", "Premium"]
    },
    {
      id: "asme-liquid-glass",
      key: "hero",
      name: "Asme — Liquid Glass Video Hero",
      description: "Fullscreen local video hero with bottom-left serif headline, staggered mask reveal, pointer parallax, and magnetic glass CTA.",
      category: "hero",
      preview: "https://picsum.photos/seed/asme-gold/640/400.jpg",
      file: "sections/hero/asme-liquid-glass/index.html",
      link: "sections/hero/asme-liquid-glass/index.html",
      tags: ["Video", "Glassmorphism", "Interactive", "Dark"]
    },
    {
      id: "ideas-in-motion",
      key: "hero",
      name: "Ideas in Motion",
      description: "Fullscreen overlap-typography hero with expanding image reveal, pointer parallax + 3D tilt, magnetic pill CTA, and detail modal.",
      category: "hero",
      preview: "assets/Futuristic%20VR.png",
      file: "Hero Section/Hero Section Aries.html",
      link: "Hero Section/Hero Section Aries.html",
      tags: ["Typography", "Interactive", "Modal", "Image"]
    },
    {
      id: "neon-eyewear",
      key: "hero",
      name: "Neon Eyewear — That Stands Out",
      description: "Dark fan-cards eyewear hero with local eyewear imagery, click-to-focus glow, pointer parallax, and magnetic Enter Store drawer.",
      category: "hero",
      preview: "assets/eyewear%203.png",
      file: "sections/hero/neon-eyewear/index.html",
      link: "sections/hero/neon-eyewear/index.html",
      tags: ["Eyewear", "Dark", "Interactive", "Fan Cards"]
    },
    {
      id: "potret-lab-film",
      key: "hero",
      name: "Potret Lab — Film Strip Portraits",
      description: "Wavy 35mm film-strip portrait hero with draggable reels, active-frame color, EXIF footer metadata, and film-frame lightbox.",
      category: "hero",
      preview: "assets/golden%20hour.jpg",
      file: "sections/hero/potret-lab-film/index.html",
      link: "sections/hero/potret-lab-film/index.html",
      tags: ["Photography", "Film", "Interactive", "Lightbox"]
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
    {
      id: "atelier-narrative-cards",
      key: "about",
      name: "Atelier — Narrative Cards About",
      description: "Dark studio about section with split headline and four photographic portrait cards, each copy matched to its imagery.",
      category: "about",
      preview: "assets/about%201.png",
      file: "sections/about/studio-services-dark/index.html",
      link: "sections/about/studio-services-dark/index.html",
      tags: ["Dark", "Studio", "Photography", "Cards"]
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
    {
      id: "campus-life-strip",
      key: "features",
      name: "Campus Life — Studio Strip",
      description: "Split-headline studio strip with five local campus-life portraits, hover-expand cards, parallax, and autoplay spotlight.",
      category: "features",
      preview: "assets/pic%201.png",
      file: "Feature Section/feature-studio-strip.html",
      link: "Feature Section/feature-studio-strip.html",
      tags: ["Studio", "Gallery", "Interactive", "Photography"]
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
    {
      id: "whenevr-blog",
      key: "blog",
      name: "Whenevr — Practical Blog",
      description: "Centered blog header with featured road-trip story, three-card grid, pill tags and reading-time meta.",
      category: "blog",
      preview: "assets/blog%202.png",
      file: "Blog Section/Blog Section - Whenevr Travel.html",
      link: "Blog Section/Blog Section - Whenevr Travel.html",
      tags: ["Blog", "Featured", "Grid", "Minimal"]
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