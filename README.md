# Goa Pilates Studio — mobile-first concept

A responsive, single-page concept for Goa Pilates Studio, built with semantic HTML, plain CSS and lightweight JavaScript. There is no framework, package installation or build step.

## Run locally

From the repository root:

```bash
python3 -m http.server 4173 --bind 0.0.0.0
```

Then open `http://localhost:4173` in a browser. In Arena, a live preview is available when the static server is started as a background process.

## Files

- `index.html` — page content, metadata, location information and accessible form markup.
- `styles.css` — design tokens, mobile-first layout, responsive breakpoints and reduced-motion/focus states.
- `script.js` — mobile navigation, studio filters, interest preselection and WhatsApp form handoff.
- `assets/` — locally stored concept photography.
- `AUDIT.md` — the public-site audit and recommended redesign workflow.

## Prototype behavior

The contact form does not submit to a server or store visitor information. It builds a message for the selected studio and opens WhatsApp; the visitor reviews and sends it. The branch addresses, phone numbers and opening hours were transcribed from the public website and need owner verification before launch. The testimonial is excerpted from the current public site and should be reconfirmed for permission and wording.

The two studio photographs in `assets/` are AI-generated concept imagery, not photographs of Goa Pilates Studio or its members. Replace them with client-approved studio photography before production.

## Before production

- Confirm the branch list, exact NAP details, schedules, offers and available classes.
- Verify all external contact and map destinations.
- Reconfirm testimonial consent and approve all copy/fitness claims.
- Connect the preferred booking/form system and test lead delivery.
- Set final canonical/social URLs and validate structured data, redirects, analytics and search indexing.
- Run mobile/desktop Lighthouse, accessibility and real-device QA against the production environment.
