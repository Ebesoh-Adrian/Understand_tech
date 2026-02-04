# Frontend - Vanilla HTML/CSS/JavaScript

A lightweight, dependency-free frontend using plain HTML, CSS, and JavaScript.

## Features
- No build tools required
- Zero dependencies
- Fast loading
- Excellent browser compatibility
- Small footprint
- Perfect for learning

## Project Structure
```
├── index.html       # Main page
├── css/
│   ├── style.css    # Main styles
│   └── responsive.css
├── js/
│   ├── app.js       # Main application logic
│   ├── api.js       # API calls
│   ├── search.js    # Search functionality
│   └── ui.js        # UI interactions
├── assets/          # Images, icons
└── pages/           # Additional HTML pages
```

## Usage

Simply open `index.html` in a browser or serve with:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server
```

Then navigate to `http://localhost:8000`

## Features Included
- Search and filter terms
- Display term definitions with examples
- Category navigation
- Responsive design
- Keyboard navigation support

## API Integration
Update the API base URL in `js/api.js` to connect to your backend.
