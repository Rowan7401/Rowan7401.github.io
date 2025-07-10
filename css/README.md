# ***Generated with Cursor***
# Modular CSS Structure

This directory contains the modularized CSS files for Rowan's website. The CSS has been split into logical modules to improve maintainability and organization.

## File Structure

### Global Styles
- **`global.css`** - Contains all shared styles used across all pages:
  - Base reset and typography
  - Navigation styles
  - Common components (buttons, images, tables, lists)
  - Layout components (glass container, main layout)
  - Animations and responsive design
  - Font imports

### Page-Specific Styles
- **`jobSearch.css`** - Styles specific to the job search page:
  - Chart dashboard layout
  - Month filter checkboxes and styling
  - Chart canvas styling
  - Responsive design for job search components

- **`projects.css`** - Styles for all project pages (projects.html, projects2.html, projects3.html, projects4.html):
  - Project box layouts
  - Slideshow components
  - Project links and buttons
  - Image styling for project screenshots

- **`photos.css`** - Styles for the photos page:
  - Photo stack layout
  - Polaroid image styling
  - Social media icon styling
  - Photo grid animations

- **`accomplishments.css`** - Styles for the accomplishments page:
  - Accomplishments layout
  - Responsive design adjustments

## Usage

Each HTML file now includes the appropriate CSS files:

```html
<!-- All pages include global styles -->
<link rel="stylesheet" href="./css/global.css" />

<!-- Page-specific styles -->
<link rel="stylesheet" href="./css/jobSearch.css" />
<link rel="stylesheet" href="./css/projects.css" />
<link rel="stylesheet" href="./css/photos.css" />
<link rel="stylesheet" href="./css/accomplishments.css" />
```

## Benefits of Modularization

1. **Maintainability** - Easier to find and modify specific styles
2. **Performance** - Pages only load the CSS they need
3. **Organization** - Clear separation of concerns
4. **Scalability** - Easy to add new page-specific styles
5. **Collaboration** - Multiple developers can work on different CSS files

## Migration Notes

- The original `wave.css` file has been split into these modular files
- All existing functionality has been preserved
- Navigation has been updated to include the Job Search page
- JavaScript has been updated to handle the new navigation structure

## Adding New Pages

To add a new page with specific styles:

1. Create a new CSS file in the `css/` directory
2. Include both `global.css` and your new CSS file in the HTML
3. Follow the naming convention: `pageName.css`
4. Add the page to the navigation in all HTML files
5. Update the JavaScript `loaded()` function to handle the new navigation item 