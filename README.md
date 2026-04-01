# DigiTools Platform

A modern React-based platform showcasing digital tools and products, built with Vite for fast development and Tailwind CSS for styling.

## Features

- **Responsive Design**: Optimized for desktop and mobile devices using Tailwind CSS.
- **Interactive Components**: Includes hero sections, navigation, product listings, digital tool cards, ratings, workflow steps, and footer.
- **Fast Development**: Powered by Vite with Hot Module Replacement (HMR) for instant updates.
- **Data-Driven**: Utilizes JSON data for dynamic content rendering.
- **Modern UI**: Clean and intuitive interface with Lucide React icons.

## Tech Stack

- **Frontend**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Linting**: ESLint

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd DigiTools-platform
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173/` (or the port shown in the terminal).

## Available Scripts

- `npm run dev` - Starts the development server with HMR.
- `npm run build` - Builds the project for production.
- `npm run preview` - Previews the production build locally.
- `npm run lint` - Runs ESLint to check for code issues.

## Project Structure

```
src/
├── components/
│   ├── digitalTools/
│   │   ├── DigitalToolCards.jsx
│   │   └── DigitalTools.jsx
│   ├── footer/
│   │   └── Footer.jsx
│   ├── hero/
│   │   └── Hero.jsx
│   ├── navbar/
│   │   └── Navbar.jsx
│   ├── products/
│   │   └── Products.jsx
│   ├── rating/
│   │   └── Rating.jsx
│   ├── steps/
│   │   └── Steps.jsx
│   └── workflow/
│       └── WorkFlow.jsx
├── assets/
├── App.jsx
├── main.jsx
└── index.css
public/
└── cardJsonData.json
```

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Make your changes and commit: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## License

This project is for educational purposes as part of Assignment 6.
