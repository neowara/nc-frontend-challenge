# nc-frontend-challenge

A modern Angular countdown app for the Natural Cycles Frontend Challenge.

## Features
- Responsive countdown timer for any event
- Editable event name and date
- Text auto-resizes to fit width (reusable FitText component)
- Data persists between reloads (localStorage)
- Modern Angular best practices (standalone components, strict TypeScript)

## Getting Started

### Install dependencies
```bash
npm install
```

### Start the development server
```bash
npm start
```
Visit http://localhost:4200

### Build for production
```bash
npm run build
```

### Format code
```bash
npm run format
```

## Project Structure
- `src/app/shared/fit-text` – Reusable FitText component
- `src/app/countdown-timer` – Countdown timer logic and display
- `src/app/event-form` – Event name and date form

## Deployment
Deploy the `dist/` folder to Netlify, GitHub Pages, or your preferred static host.

---

Challenge by Natural Cycles. Built with Angular 20 and TypeScript.
