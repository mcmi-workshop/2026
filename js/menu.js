/*************************************************************************
 * For loading the menu and handling Dark Mode.
 *************************************************************************/

(function () {
  "use strict";

  // 1. Apply Dark Mode immediately to HTML tag to avoid FOUC
  function applySavedTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark-mode');
    }
  }
  applySavedTheme();

  $(function () {
    // 2. Load Menu
    $(".menu-container").load("menu.html", function() {
      // 3. Initialize Toggle Button
      const toggleBtn = document.getElementById('darkModeToggle');
      // Check current state from DOM class, which was set by applySavedTheme
      const isDark = document.documentElement.classList.contains('dark-mode');
      
      if (toggleBtn) {
        updateIcon(toggleBtn, isDark);
        
        toggleBtn.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          document.documentElement.classList.toggle('dark-mode');
          const isNowDark = document.documentElement.classList.contains('dark-mode');
          localStorage.setItem('theme', isNowDark ? 'dark' : 'light');
          updateIcon(this, isNowDark);
        });
      }

      // 4. Mobile menu enhancements
      initMobileMenu();
    });
  });

  function updateIcon(btn, isDark) {
    if (isDark) {
      btn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
      btn.innerHTML = '<i class="fas fa-moon"></i>';
    }
  }

  function initMobileMenu() {
    // Handle mobile dropdown clicks
    const dropdowns = document.querySelectorAll('.menu .dropdown');
    
    dropdowns.forEach(dropdown => {
      const dropbtn = dropdown.querySelector('.dropbtn');
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      
      if (dropbtn && dropdownContent) {
        // On mobile, allow clicking on dropdown to toggle submenu
        dropbtn.addEventListener('click', function(e) {
          // Only prevent default and toggle on mobile view
          if (window.innerWidth <= 1050) {
            // If clicking the caret icon area or there's no direct link destination
            const rect = this.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const isNearEnd = clickX > rect.width - 40;
            
            if (isNearEnd || e.target.tagName === 'I') {
              e.preventDefault();
              e.stopPropagation();
              
              // Toggle this dropdown
              const isOpen = dropdownContent.style.display === 'block';
              
              // Close all other dropdowns first
              document.querySelectorAll('.dropdown-content').forEach(dc => {
                dc.style.display = 'none';
              });
              
              // Toggle current dropdown
              dropdownContent.style.display = isOpen ? 'none' : 'block';
            }
          }
        });
      }
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-content').forEach(dc => {
          if (window.innerWidth <= 1050) {
            dc.style.display = 'none';
          }
        });
      }
    });

    // Reset dropdown display on resize
    window.addEventListener('resize', function() {
      document.querySelectorAll('.dropdown-content').forEach(dc => {
        dc.style.display = '';
      });
    });
  }
})();