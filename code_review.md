# Code Review: ESL Teacher MVP

This code review focuses on improving DRY principles, aligning with Svelte 5 best practices, and preparing the architecture for the upcoming booking and payment system.

## 1. Architecture & Preparation for Booking System

### Adapter Changes
- **Current Issue**: The project uses `@sveltejs/adapter-static`.
- **Recommendation**: To support a calendar and payment backend (e.g., Stripe, database integration), you will need server-side endpoints (`+server.ts` or `+page.server.ts` actions) to securely process payments and manage booking state.
- **Action**: Switch to `adapter-node`, `@sveltejs/adapter-vercel`, or `@sveltejs/adapter-cloudflare` depending on your planned hosting provider, as purely static generation cannot handle secure payments.

### Modularity for Interactivity
- **Current Issue**: The `Hero.svelte` and `Cta.svelte` components both contain "Book a Trial Lesson" `<a>` tags pointing to external/internal links.
- **Recommendation**: As you move to an internal booking system, these calls-to-action will likely trigger a booking modal or navigate to a dedicated `/book` route.
- **Action**: Extract a reusable `<Button>` component that accepts `href` or `onclick` props. This prevents repeating identical CSS classes like `.hero__cta` and `.cta__button`.

### Data Centralization
- **Current Issue**: `Nav.svelte` hardcodes its navigation links (`navLinks` array).
- **Recommendation**: Site structure details should be centralized.
- **Action**: Move the navigation array to a central config (e.g., `src/lib/data/config.ts`) so both the Header and Footer can map over the exact same data source, keeping the site structure DRY.

## 2. Svelte 5 Best Practices

### Reactive State with Runes
- **Current Practice**: State like `let mobileMenuOpen = $state(false);` in `Nav.svelte` is implemented perfectly using Svelte 5 runes.
- **Improvement**: Make use of `$derived` for computed values. For example, in `Reviews.svelte`, the star rating calculation is evaluated once on initialization:
  ```ts
  const overallStars = getStarDisplay(teacher.overallRating);
  ```
  While the teacher data is currently static, adopting `$derived(getStarDisplay(teacher.overallRating))` prevents future bugs when the data becomes dynamic (e.g., fetched from a real-time reviews API).

### Inline Styles and CSP (Content Security Policy)
- **Current Practice**: `Reviews.svelte` uses inline string interpolation for styling: `style="width: {(rating.score / 5) * 100}%"`.
- **Improvement**: Direct inline style injection can violate strict Content Security Policies (CSP). It is cleaner to use CSS custom properties:
  ```html
  <div class="reviews__rating-fill" style="--progress: {(rating.score / 5) * 100}%"></div>
  ```
  ```css
  .reviews__rating-fill {
      width: var(--progress);
  }
  ```

## 3. SEO & HTML Headers

### Redundant Tags
- **Current Issue**: Global SEO tags (like `<title>` and `<meta name="description">`) are hardcoded directly into `src/app.html`.
- **Recommendation**: SvelteKit overrides these via `<svelte:head>` in `src/routes/+page.svelte`, meaning the initial tags in `app.html` are redundant and can cause brief flashes of incorrect metadata.
- **Action**: Remove the hardcoded `<title>` and `<meta>` tags from `app.html` and rely entirely on the `<svelte:head>` implementations within your specific routes or a global `+layout.svelte`.

## 4. Styling and DRY Principles

### CSS Duplication
- **Current Issue**: Reviewing `Hero.svelte` and `Cta.svelte`, the CSS for the buttons (`.hero__cta` and `.cta__button`) is 90% duplicated (background, shadow, transitions, border-radius).
- **Action**: Extracting a shared `.btn` utility class in `global.css` or using the aforementioned `<Button>` Svelte component will significantly reduce CSS bloat and guarantee design consistency when new buttons are added for the calendar interface.

---
**Summary for Junior Developer**: Great job on the basic structure and layout. The use of CSS variables in `global.css` is excellent. Focus your next steps on extracting UI elements (like Buttons) into reusable components, centralizing your configuration data, and migrating the adapter to support your future server-side booking requirements!
