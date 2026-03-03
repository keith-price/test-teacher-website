// TODO [BOOKING/PAYMENTS]: Remove or make this conditional when adding server-side routes.
// Dynamic routes like /book, /dashboard, /api/stripe/webhook cannot be prerendered.
// Consider moving prerender to individual +page.ts files for static pages only.
export const prerender = true;
