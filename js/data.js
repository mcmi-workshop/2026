/**
 * DATA CONFIGURATION
 * 
 * This file contains structured data that can be easily updated
 * for organizers, program committee, keynotes, etc.
 * 
 * You can edit this file to update the website content without
 * touching the HTML files directly.
 */

const SITE_DATA = {
  
  // ============================================
  // ORGANIZERS
  // ============================================
  organizers: {
    chairs: [
      {
        name: "Moreno La Quatra",
        affiliation: "Kore University of Enna, Italy",
        image: "img/organizers/profile-placeholder.png",
        website: "https://mlaquatra.me"
      },
      {
        name: "Nicole Dalia Cilia",
        affiliation: "Kore University of Enna, Italy",
        image: "img/organizers/profile-placeholder.png",
        website: null
      },
      {
        name: "Vincenzo Conti",
        affiliation: "Kore University of Enna, Italy",
        image: "img/organizers/profile-placeholder.png",
        website: null
      },
      {
        name: "Salvatore Sorce",
        affiliation: "Kore University of Enna, Italy",
        image: "img/organizers/profile-placeholder.png",
        website: null
      },
      {
        name: "Giuseppe Pappalardo",
        affiliation: "Kore University of Enna, Italy",
        image: "img/organizers/profile-placeholder.png",
        website: null
      },
      {
        name: "Valerio Mario Salerno",
        affiliation: "Kore University of Enna, Italy",
        image: "img/organizers/profile-placeholder.png",
        website: null
      }
    ]
  },

  // ============================================
  // PROGRAM COMMITTEE
  // ============================================
  programCommittee: [
    // Add members here as the committee is formed
    // { name: "Name", affiliation: "Institution, Country" },
  ],

  // ============================================
  // KEYNOTES
  // ============================================
  keynotes: [
    // Add keynote speakers here
    // {
    //   title: "Keynote Title",
    //   speaker: "Speaker Name",
    //   affiliation: "Institution",
    //   abstract: "Abstract text...",
    //   bio: "Speaker bio...",
    //   image: "img/keynotes/speaker.jpg"
    // }
  ],

  // ============================================
  // ACCEPTED PAPERS
  // ============================================
  acceptedPapers: [
    // Add accepted papers here after notification
    // {
    //   id: 1,
    //   title: "Paper Title",
    //   authors: "Author1, Author2, Author3",
    //   type: "regular" // or "short", "poster", etc.
    // }
  ],

  // ============================================
  // WORKSHOP PROGRAM
  // ============================================
  program: {
    date: "TBA",
    location: "TBA",
    sessions: [
      // Add program sessions here
      // {
      //   time: "09:00 - 10:00",
      //   title: "Opening Session",
      //   type: "plenary",
      //   chair: "Chair Name",
      //   talks: []
      // }
    ]
  },

  // ============================================
  // NEWS ITEMS
  // ============================================
  news: [
    {
      date: "February 1st, 2026",
      title: "Website is live!",
      content: "The official website for MCMI 2026 workshop is now live."
    }
    // Add more news items here
  ],

  // ============================================
  // TOPICS OF INTEREST
  // ============================================
  topics: [
    "Multimodal fusion techniques and architectures",
    "Cross-modal learning and representation",
    "Audio-visual processing and understanding",
    "Vision-language models and applications",
    "Multimodal transformers and attention mechanisms",
    "Self-supervised and unsupervised multimodal learning",
    "Few-shot and zero-shot multimodal learning",
    "Multimodal generative models",
    "Applications in healthcare and medical imaging",
    "Applications in human-computer interaction",
    "Applications in robotics and autonomous systems",
    "Multimodal sentiment analysis and emotion recognition",
    "Multimodal information retrieval",
    "Datasets and benchmarks for multimodal learning",
    "Ethical considerations in multimodal AI"
  ]
};

// Make data globally available
window.SITE_DATA = SITE_DATA;

// ============================================
// HELPER FUNCTIONS TO USE THIS DATA
// ============================================

/**
 * Example: Dynamically generate organizer cards
 * Call this from a page that needs organizers
 */
window.renderOrganizers = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  let html = '<div class="organizer-grid">';
  SITE_DATA.organizers.chairs.forEach(org => {
    const link = org.website ? `<a href="${org.website}" target="_blank">${org.name}</a>` : org.name;
    html += `
      <div class="organizer-card">
        <img class="organizer-img" src="${org.image}" alt="${org.name}">
        <div class="organizer-name">${link}</div>
        <div class="organizer-affil">${org.affiliation}</div>
      </div>
    `;
  });
  html += '</div>';
  container.innerHTML = html;
};

/**
 * Example: Render news items
 */
window.renderNews = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  let html = '<ul>';
  SITE_DATA.news.forEach(item => {
    html += `
      <li>
        <p class="text">
          <b>${item.date} - ${item.title}</b><br>
          ${item.content}
        </p>
      </li>
    `;
  });
  html += '</ul>';
  container.innerHTML = html;
};

/**
 * Example: Render topics of interest
 */
window.renderTopics = function(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  
  let html = '<ul>';
  SITE_DATA.topics.forEach(topic => {
    html += `<li>${topic}</li>`;
  });
  html += '</ul>';
  container.innerHTML = html;
};
