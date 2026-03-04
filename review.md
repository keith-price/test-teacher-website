# Code Review: Teacher Website

**Date:** March 4, 2026  
**Reviewer:** Automated Code Review  
**Scope:** Security, DRY Principles, Best Practices

---

## Security

### ✅ Strengths

- External links use `rel="noopener noreferrer"` (`Button.svelte:25`)
- No sensitive data or API keys hardcoded
- Static site with minimal attack surface

### ⚠️ Recommendations

1. **Image Security**: Add `loading="lazy"` to below-the-fold images and explicit `width`/`height` attributes to prevent layout shifts and potential image-based attacks (e.g., maliciously crafted images exploiting browser vulnerabilities).

2. **Content Security Policy**: Consider adding a CSP meta tag in `app.html` for production:

   ```html
   <meta
   	http-equiv="Content-Security-Policy"
   	content="default-src 'self'; img-src 'self' https:; style-src 'self' 'unsafe-inline'; script-src 'self'"
   />
   ```

3. **External Links**: The `bookingUrl` in `config.ts:16` links to an external site (Preply). Ensure users are aware they'll be navigating away.

---

## DRY Principles

### ✅ Strengths

- Good separation: data models in `$lib/data/`, components in `$lib/components/`
- Reusable `Button` and `Nav` components
- CSS custom properties in `global.css` avoid style duplication

### ⚠️ Issues & Recommendations

1. **Star Rating Logic Duplication** (`+page.ts:3-8`, `Reviews.svelte:27-35`)
   - The star calculation logic exists in both the load function and the Reviews component
   - **Fix**: Move `getStarDisplay()` to a shared utility:

   ```typescript
   // src/lib/utils/stars.ts
   export function getStarDisplay(score: number): { full: number; half: boolean; empty: number } {
   	const full = Math.floor(score);
   	const half = score % 1 >= 0.3 && score % 1 < 0.8;
   	const empty = 5 - full - (half ? 1 : 0);
   	return { full, half, empty };
   }
   ```

2. **Section Label/Title Pattern** (Duplicated in multiple components)
   - Every section uses `<span class="section-label">` and `<h2 class="section-title">`
   - **Fix**: Create a reusable `SectionHeader.svelte` component:

   ```svelte
   <script lang="ts">
   	let { label, title }: { label: string; title: string } = $props();
   </script>

   <span class="section-label">{label}</span><h2 class="section-title">{title}</h2>
   ```

3. **Career Milestone Display** (`Experience.svelte`): Not reviewed but likely has similar patterns

---

## Best Practices

### ✅ Already Implemented Well

- **Svelte 5**: Proper use of runes (`$state`, `$derived`, `$props`, `$effect`)
- **TypeScript**: Strong typing with interfaces in `teacher.ts`
- **Responsive Design**: CSS media queries and mobile-first approach
- **Accessibility**: `aria-expanded`, `aria-label`, keyboard handling in Nav
- **CSS Architecture**: CSS variables for theming, BEM-like naming convention

### ⚠️ Improvements Needed

1. **Missing Image Dimensions** (`About.svelte:12-16`)

   ```svelte
   <img
   	src="/images/keith-profile.jpg"
   	alt={teacher.name || 'Teacher profile photo'}
   	class="about__avatar-img"
   	width="200"
   	height="200"
   	loading="eager"
   />
   ```

2. **Missing Favicon**: Add a favicon to `app.html`:

   ```html
   <link rel="icon" href="/favicon.ico" />
   ```

3. **SEO Enhancements** (`+page.svelte:18-24`):
   - Add Open Graph tags for social sharing
   - Add `robots` meta tag for search engine control

   ```html
   <meta property="og:title" content="Keith Price | ESL Teacher" />
   <meta property="og:description" content="20 Years Teaching English Worldwide" />
   <meta property="og:image" content="/images/keith-profile.jpg" />
   ```

4. **Button Component Type Safety** (`Button.svelte:5-18`):

   ```typescript
   // Current: href defaults to undefined
   // Better: Explicit undefined check
   {#if href !== undefined}
   ```

5. **Prop Validation**: Add runtime validation for critical props using zod or similar if data comes from external sources.

6. **Error Boundaries**: Add error handling for image loading:

   ```svelte
   <img src="..." alt="..." onerror="this.style.display='none'" />
   ```

7. **Performance**:
   - Add `rel="preload"` for critical above-the-fold images
   - Consider adding `link rel="preconnect"` for external resources

---

## Testing

### Current State

- Unit tests exist in `teacher.test.ts` - good for data validation
- No component tests reviewed

### Recommendations

1. Add E2E tests for critical user flows (mobile menu toggle, CTA navigation)
2. Consider visual regression tests if the design becomes more complex

---

## TODO Tracking

The codebase has good TODO comments but they should be tracked in an issue tracker (GitHub Issues, Linear, etc.) rather than only in code comments:

- `[BOOKING]` - Booking system integration
- `[CHAT]` - Live chat widget
- `[AUTH]` - Authentication system
- `[DASHBOARD]` - Student dashboard
- `[REVIEWS]` - Dynamic reviews from database
- `[SCHEDULING]` - Scheduling system

---

## Summary

| Category       | Rating     |
| -------------- | ---------- |
| Security       | ⭐⭐⭐⭐⭐ |
| DRY            | ⭐⭐⭐⭐   |
| Best Practices | ⭐⭐⭐⭐   |
| Test Coverage  | ⭐⭐⭐     |

The project is in excellent shape for a static teacher profile website. The main opportunities are extracting duplicated logic (star display, section headers), adding more SEO/meta tags, and ensuring images have explicit dimensions.
