# Shubham Kamdar — Portfolio Website

A clean, minimal portfolio website built with vanilla HTML, CSS, and JavaScript. Designed for speed, simplicity, and easy hosting on GitHub Pages.

## Features

- **Dark/Light Mode** — Defaults to system preference, toggle with the sun/moon button. Persisted in localStorage.
- **Three Pages** — Home (hero + experience + interests), Projects (grid of project cards), About (personal bio).
- **Responsive** — Works on mobile, tablet, and desktop. Includes a mobile hamburger menu.
- **Fast** — No framework, no build step, no dependencies. Pure HTML/CSS/JS served as static files.
- **Scroll Animations** — Subtle fade-in animations triggered by IntersectionObserver.
- **Accessible** — Semantic HTML, ARIA labels, keyboard-friendly navigation.

## Project Structure

```
portfolio/
├── index.html          # Home page
├── projects.html       # Projects page
├── about.html          # About page
├── css/
│   └── style.css       # All styles (theming, layout, components)
├── js/
│   └── main.js         # Theme toggle, mobile menu, scroll animations
├── images/
│   └── headshot.jpg    # Profile photo
├── public/
│   └── Shubham Headshot.jpg  # Original headshot (source)
├── progress.md         # Development progress and TODOs
└── README.md           # This file
```

## Running Locally

No build step required. Just open the files in a browser:

### Option 1: Direct file open
Double-click `index.html` to open it in your browser.

### Option 2: Local server (recommended for best experience)
Using Python:
```bash
cd portfolio
python3 -m http.server 8000
```
Then visit [http://localhost:8000](http://localhost:8000).

Using Node.js:
```bash
npx serve .
```

Using VS Code: Install the "Live Server" extension and click "Go Live".

## Deploying to GitHub Pages

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under "Source", select **Deploy from a branch**.
4. Choose the `main` branch and `/ (root)` folder.
5. Click **Save**. Your site will be live at `https://<username>.github.io/<repo-name>/`.

### Custom Domain (Optional)
To use a custom domain, add a `CNAME` file to the root of the repo with your domain name, and configure DNS settings with your domain provider.

## Customization

### Changing Colors
Edit the CSS variables in `css/style.css` under `[data-theme="light"]` and `[data-theme="dark"]` selectors.

### Adding Projects
Add a new `.project-card` div inside the `.projects-grid` in `projects.html`. Follow the existing card structure.

### Adding Images to Projects
Replace the `.project-image-placeholder` divs with actual `<img>` tags. Place images in the `images/` folder.

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Flexbox, Grid, animations
- **JavaScript** — Vanilla ES5+ (no dependencies)
- **Fonts** — Inter + JetBrains Mono via Google Fonts
- **Icons** — Inline SVGs (Lucide-style)
