# Banian Pottery Website

A handcrafted, multi-page static website for Banian Pottery, showcasing studio work, courses, workshops, custom orders, and contact information.

## Overview

This project is a clean front-end website built with HTML, CSS, and JavaScript. It is organized as a set of standalone pages with shared styling and script files.

> **Note:** The site currently has two navigation structures in use (see "Known Issues" below). This README documents all pages as they exist on disk.

## Pages

- `index.html` - Home page with highlights and featured pieces
- `courses.html` - Long pottery course and studio membership details
- `workshops.html` - Leisure workshops, pottery parties, and themed sessions
- `custom-orders.html` - Custom commissions and interior design collaborations
- `gallery.html` - Gallery of finished pottery pieces
- `the-space.html` - Studio story and background (current nav)
- `contact.html` - Contact form and studio details
- `about.html` - Studio story and background (legacy version, not in current nav)
- `articles.html` - Articles and editorial content (legacy, not in current nav)
- `exhibitions.html` - Exhibition information (legacy, not in current nav)
- `catalog.html` - Product gallery/catalog (legacy, appears superseded by `gallery.html`)

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## Project Structure

```text
banian-pottery-website/
|-- index.html
|-- courses.html
|-- workshops.html
|-- custom-orders.html
|-- gallery.html
|-- the-space.html
|-- contact.html
|-- about.html
|-- articles.html
|-- exhibitions.html
|-- catalog.html
|-- PROJECT_STRUCTURE.md
|-- assets/
|   |-- brand/
|   |-- pots/
|-- css/
|   |-- style.css
|   `-- pages.css
`-- js/
    `-- main.js
```

## Assets

- Brand assets are stored in `assets/brand/`
- Product images are stored in `assets/pots/`

## How To Run

Because this is a static website, no build step is required.

1. Open `index.html` directly in a browser, or
2. Serve the folder with a local server (recommended)

### Example: Run with VS Code Live Server

1. Install the Live Server extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## Known Issues / Open Items

- **Split navigation:** `index.html`, `contact.html`, `courses.html`, `custom-orders.html`, `the-space.html`, and `workshops.html` use an updated nav bar (Home, Courses, Workshops, Custom Orders, Gallery, The Space, Contact). Meanwhile `about.html`, `articles.html`, `exhibitions.html`, and `catalog.html` still use the older nav bar (Home, About, Workshops, Exhibitions, Catalog, Articles, Contact). Decide whether the legacy pages should be updated to the new nav, merged into their replacements, or removed.
- **Possible missing asset:** pages using the new nav reference `assets/brand/icon.png`, which isn't listed in `PROJECT_STRUCTURE.md` (only `logo.png` currently exists in `assets/brand/`). Confirm this file has been added, or the logo will not render on those pages.
- **`PROJECT_STRUCTURE.md` is out of date** relative to the current file set and should be regenerated to include `courses.html`, `custom-orders.html`, `gallery.html`, and `the-space.html`.

## Notes

- HTML files use relative paths for local CSS, JS, images, and page links.
- External links (for example Instagram or map links) are intentionally absolute URLs.
- Cache-busting query strings (e.g. `?v=1784197853`) are appended to CSS/JS references on the newer pages; update this value when deploying changes to avoid stale caches.

## License

This project is for portfolio/educational use unless otherwise specified by the owner.
