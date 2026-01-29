# MCMI 2026 Workshop Website

Official website for the 2nd International Workshop on Multi- and Cross-Modal Information for Enhanced Pattern Recognition (MCMI 2026), co-located with ICPR 2026 in Lyon, France.

## � Quick Start

1. **View the website**: Use a local server:
   ```bash
   cd /Users/mlaquatra/repo/websites/MCMI2026
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

2. **Track TODOs**: Check [TODOs.md](TODOs.md) for all pending content updates

3. **Edit site configuration**: Open `js/config.js` to modify dates, links, colors, etc.

## 📝 Most Important Files

- **[TODOs.md](TODOs.md)** - Track all pending content updates
- **js/config.js** - Site-wide configuration (dates, links, logos)
- **js/data.js** - Structured data (organizers, topics, news)
- **css/custom.css** - Custom styling and theme

## 🎨 Modern Design Features

- Clean, minimal aesthetic with no shadows
- Smooth dark mode toggle
- Responsive grid layout
- Modern typography with Inter font
- Subtle hover effects on cards
- Clean link underlines on hover
- Custom bullet points

## ✏️ Common Updates

| What | Where |
|------|-------|
| Important dates | `js/config.js` lines 15-20 |
| Submission link | `js/config.js` line 25 |
| Add news | `js/data.js` news array |
| Add organizers | `js/data.js` organizers section |
| Update program | `workshop.html` |
| Change colors | `css/custom.css` :root variables |

---

**Contact**: [mcmi@unikore.it](mailto:mcmi@unikore.it)