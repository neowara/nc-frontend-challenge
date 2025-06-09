# Natural Cycles Frontend Challenge - Angular Countdown Timer

A clean Angular countdown timer app built for the Natural Cycles frontend challenge. Check out the live demo or run it locally to see what I built!

## 🌐 Live Demo

**Try it out: [https://neowara.github.io/nc-frontend-challenge/](https://neowara.github.io/nc-frontend-challenge/)**

The app is deployed on GitHub Pages so you can test it right away. Try setting different event dates and see how the countdown updates in real-time.

## What I Built

I created a countdown timer that's actually nice to use. Here's what makes it special:

### The Good Stuff
- **Real-time countdown** that updates every second
- **Responsive design** that looks good on phones and desktops  
- **Animated background** with floating dots (inspired by NC's style)
- **Glass effect form** because modern UI should feel modern
- **Custom date picker** that works great on all devices
- **Stable text** that doesn't jump around when numbers change
- **Natural Cycles branding** with the right colors and feel

### Why These Choices?

**Angular Signals**: I used Angular's newer signals instead of traditional observables. They're cleaner and make the reactive updates more predictable.

**CSS Grid + Flexbox**: No more fighting with floats or weird positioning. The layout just works.

**Josh Comeau's CSS Reset**: Started with a solid foundation instead of fighting browser defaults.

**Glass Morphism**: Because it looks professional and fits the modern aesthetic NC is going for.

**Custom Date Picker**: Instead of fighting with browser inconsistencies, I built a custom date picker using the technique from [this dev.to article](https://dev.to/codeclown/styling-a-native-date-input-into-a-custom-no-library-datepicker-2in). It gives us a consistent, beautiful interface while still using the native date picker functionality under the hood.

## 🚀 Quick Start

Want to run it locally? Here's how:

```bash
# Get the code and install stuff
npm install

# Start the dev server 
npm start
# Opens at http://localhost:4201

# Build for production
npm run build:prod

# Deploy to GitHub Pages
npm run deploy

# Format the code nicely
npm run format
```

## How I Built It

### The Architecture
```
src/
├── app/
│   ├── countdown-timer/     # The main timer component
│   ├── event-form/         # Form to set event details  
│   └── app.ts              # Root component
├── styles.scss             # Global styles + CSS reset
└── index.html              # The main page
```

### What's Under the Hood

**TypeScript + Angular 18**: Using the latest Angular with standalone components (no more NgModules mess).

**Signals for State**: Angular's new reactive primitives make the countdown updates super smooth.

**Modern CSS**: 
- CSS Grid for layout (so much cleaner than the old days)
- Custom properties for theming
- `clamp()` for fluid typography that scales perfectly
- Backdrop filters for that glass effect

**Custom Date Picker**: I went with a hybrid approach that gives us the best of both worlds - a beautiful, consistent UI that still leverages the native date picker functionality. The technique involves layering a styled display input over a hidden native date input, so users get the native date picker experience when they click, but see our custom styling.

**Mobile-First**: Built responsive from the ground up, not as an afterthought.

## The Technical Stuff (If You're Into That)

### CSS Architecture
I started with Josh Comeau's modern CSS reset because browser defaults are chaos. Then built up:
- Design tokens for consistent colors and spacing
- Fluid typography that works on any screen size  
- Stable layout that doesn't jump when numbers change
- Glass morphism effects (because why not look fancy?)

### Angular Patterns
- **Signals over RxJS**: Simpler reactive state management
- **Standalone components**: Cleaner imports, less boilerplate
- **TypeScript strict mode**: Catch bugs before they happen
- **Computed properties**: Efficient updates when data changes

### Performance Considerations
- Hardware-accelerated animations
- Efficient DOM updates with signals
- Optimized build with tree-shaking
- Ready for code splitting if needed

## Deployment

The app auto-deploys to GitHub Pages when you run `npm run deploy`. It builds the production version and pushes it to the `gh-pages` branch.

### For Other Hosting
The built files in `dist/temp-app/` work anywhere:
- Netlify: Just drag and drop
- Vercel: Connect the repo  
- Any static host: Upload the dist folder

## My Approach

I wanted to build something that felt professional but not over-engineered. The code is clean, the design is modern, and everything actually works. 

I focused on:
- **User experience first** - smooth animations, responsive design
- **Clean code** - readable, maintainable, well-documented
- **Modern practices** - latest Angular features, current CSS standards
- **Real-world ready** - proper error handling, accessibility, performance

## Extra Documentation

- **[Production Improvements](./PRODUCTION_IMPROVEMENTS.md)**: What I'd add for a real production app
- **[Technical Details](./SOLUTION.md)**: Deep dive into the implementation choices

---

Built with Angular 18, TypeScript, and way too much attention to CSS details.  
*For the Natural Cycles frontend challenge*
