/*************************************************************************
 * Utility Functions for Loading Components and Managing Site
 *************************************************************************/

(function () {
  "use strict";

  // Load HTML component into element
  window.loadComponent = function(element, componentPath, callback) {
    $(element).load(componentPath, function(response, status, xhr) {
      if (status === "error") {
        console.error("Error loading component:", componentPath, xhr.status, xhr.statusText);
      }
      if (callback) callback();
    });
  };

  // Set page title dynamically
  window.setPageTitle = function(pageTitle) {
    document.title = pageTitle || SITE_CONFIG.title;
  };

  // Configure banner with title and optional subtitle
  window.configureBanner = function(title, subtitle, customStyle) {
    const banner = document.getElementById('page-banner');
    if (!banner) return;
    
    // Apply custom background and style
    const defaultStyle = `
      background: url('${SITE_CONFIG.banner.image}') no-repeat center;
      background-size: cover;
      height: ${SITE_CONFIG.banner.height};
    `;
    banner.setAttribute('style', customStyle || defaultStyle);
    
    // Apply gradient overlay
    const bannerTable = banner.querySelector('.banner-table');
    if (bannerTable) {
      bannerTable.style.background = SITE_CONFIG.banner.gradient;
    }
    
    // Set title and subtitle
    const titleElement = document.getElementById('banner-title');
    const subtitleElement = document.getElementById('banner-subtitle');
    
    if (titleElement) titleElement.innerHTML = title;
    if (subtitleElement && subtitle) {
      subtitleElement.innerHTML = subtitle;
      subtitleElement.style.display = 'block';
    } else if (subtitleElement) {
      subtitleElement.style.display = 'none';
    }
  };

  // Initialize page components
  window.initializePage = function(config) {
    // Load head component
    loadComponent('head', 'includes/head.html', function() {
      setPageTitle(config.pageTitle);
    });
    
    // Load banner if specified
    if (config.banner) {
      loadComponent('.banner-container', 'includes/banner.html', function() {
        configureBanner(config.banner.title, config.banner.subtitle, config.banner.style);
      });
    }
  };

  // Format dates from config
  window.formatDate = function(dateKey) {
    return SITE_CONFIG.dates[dateKey] || "TBA";
  };

})();
