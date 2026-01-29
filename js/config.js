/*************************************************************************
 * Site Configuration
 * Edit this file to easily update site-wide settings
 *************************************************************************/

const SITE_CONFIG = {
  // General Settings
  title: "MCMI 2026",
  fullTitle: "Multi- and Cross-Modal Information for Enhanced Pattern Recognition",
  location: "Lyon, France",
  conference: "ICPR 2026",
  email: "mcmi@unikore.it",
  
  // Banner Settings
  banner: {
    image: "img/lyon.webp",
    gradient: "linear-gradient(to right, rgba(217, 108, 117, 0.8), rgba(255, 140, 148, 0.8))",
    height: "500px"
  },
  
  // Important Dates (update these easily)
  dates: {
    submission: "Coming Soon",
    notification: "Coming Soon",
    cameraReady: "Coming Soon",
    workshop: "Coming Soon"
  },
  
  // Links
  links: {
    lncs: "https://www.springer.com/gp/computer-science/lncs",
    submission: "#", // Update when submission site is ready
    latex_template: "https://icpr2024.org/pdf/ICPR_2024_LaTeX_Templates.zip",
    word_template: "https://icpr2024.org/pdf/ICPR_2024_DOC_Templates.zip",
    springer_guidelines: "https://www.springer.com/gp/computer-science/lncs/conference-proceedings-guidelines"
  },
  
  // Logos and Images
  logos: {
    main: "img/MCMI-logo.png",
    iapr: "img/IAPR-logo.png",
    kore: "img/kore-logo-full.png",
    favicon: "/img/logo.ico"
  }
};

// Make config globally available
window.SITE_CONFIG = SITE_CONFIG;
