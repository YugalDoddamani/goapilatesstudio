# Goa Pilates Studio — Website Audit & Redesign Plan

**Prepared:** 16 October 2026
**Site reviewed:** [goapilatesstudio.com](https://goapilatesstudio.com/)
**Purpose:** First-pass public-site audit and a practical, mobile-first redesign workflow. This is a conversion, content, SEO and risk review—not a claim that a new design or performance score has already been delivered.

## Executive summary

There is useful material to build on: the site lists five studio locations, several services, instructor credentials, client reviews, and direct contact details. The clearest opportunity is to turn that information into a trustworthy, simple mobile journey: **choose a location → understand which class is right → book a trial or contact that branch**.

The most actionable issues found in the public crawl are:

1. **A broken internal destination:** `/rehab/` returns a WordPress not-found page, although the route is linked from site footers and service pages.
2. **Stale and placeholder content:** the Training page advertises 2024 courses; copyright dates differ by page; the Franchise page displays figures such as `0` branches and `1%` results.
3. **Trust and claim risk:** the site makes strong outcome/health claims—including a 1,200-calorie loss in a 20-minute EMS session and “100%”/money-back assurances—without the evidence or terms visible in the reviewed copy.
4. **A weak booking path:** the home-page features include “Read More” links back to the home page; the main contact form requests first name, last name, email, subject and a free-text message, but does not ask which branch or service the person wants. The phone and WhatsApp path should be branch-aware and one tap away on mobile.
5. **Search and content quality issues:** several page titles are generic or awkward, copy has proofreading errors, review content is repeated, and local branch information is not consistently represented across the pages.
6. **Performance and responsiveness need measured verification:** repeated carousel imagery, a large gallery and testimonial repetition are risks worth investigating, but I do **not** have a valid current Lighthouse score or a device-by-device visual result to quote.

## Scope, evidence and limitations

### Pages reviewed

Public, text-level page crawls were completed for the home page, About, Pilates, EMS, Training, Weight Loss, Gallery, Franchise and Contact pages. The `/rehab/` route was also followed from internal links and returned a not-found page. Search-indexed snippets were used as a secondary check of the visible page titles and indexed copy.

### What could not be verified in this pass

- **No numeric Lighthouse/PageSpeed baseline:** a mobile PageSpeed Insights API request returned HTTP 429 because the available API quota was zero; the public report page remained in a “Running analysis / data loading” state. I will not invent a score or repeat the site’s claimed “horrible” score as a measured result.
- **No visual responsive verdict:** the available crawl exposes text and links, not a real browser viewport. CSS breakpoints, menu behavior, horizontal overflow, image cropping, tap target sizes and form usability must be tested in a browser at mobile, tablet and desktop sizes.
- **No back-end or analytics inspection:** there was no access to WordPress admin, source/theme code, form delivery, Search Console, Analytics, booking software, consent setup or server logs.
- **Sitemap check inconclusive:** requests to `/sitemap_index.xml` and `/wp-sitemap.xml` produced fetch errors (HTTP 500) in this audit path. Re-test directly before treating either endpoint as a confirmed production failure.
- **Repository note:** the current checkout contains only a README, not the live WordPress theme or a design system. This document therefore audits the public site, not its implementation. We should inspect the design repository and existing CMS before choosing a stack or starting a build.

## Findings and priorities

Severity reflects the likely effect on trust, discovery or lead completion. “Confirmed” means visible in the retrieved page content; “verify” means browser/server testing is still required.

| Priority | Finding and evidence | Why it matters | Recommended action |
|---|---|---|---|
| **P1 — fix first** | **Broken Rehab page.** The linked `/rehab/` route shows “Page not found”; it is linked from footers and other pages. | A visitor seeking help with rehabilitation reaches a dead end; it also wastes internal links and creates a poor search landing page. | Confirm whether Rehab is an active service. Restore a useful page if it is; otherwise redirect the old URL to the closest relevant live page and remove/update every stale link. Make the 404 branded and helpful. |
| **P1 — fix first** | **Out-of-date or placeholder content.** Training says “Upcoming Courses For 2024” and lists January/February 2024 dates. Copyright shows 2021 on some pages and 2025 on others. Franchise counters show `0` branches, `1+` clients and `1%` results. | Old dates and placeholder-looking figures can undermine the credibility of the whole business, especially on a sales lead page. | Confirm current course dates, operating branches and any franchise metrics with the owner. Update or remove anything that cannot be verified; use a current enquiry CTA when dates are not yet set. |
| **P1 — legal/trust review** | **Strong fitness and health outcome claims.** Examples include 1,200 calories in a 20-minute EMS session, “15 times more efficient,” “300 sets,” “100% results,” guaranteed/money-back outcomes, and statements about back pain, post-pregnancy, post-Covid recovery and injury rehabilitation. | Potential customers may read these as guaranteed medical or physiological outcomes. Unsupported claims risk trust and may create compliance exposure. | Have the business and an appropriate qualified reviewer substantiate each claim and approve its wording. Publish precise money-back terms if the offer still exists. Prefer careful, qualified descriptions; do not promise individual results or medical treatment. |
| **P1 — conversion** | **Home-page feature links return to `/`.** The “Read More” links under Holistic Studio, Assured Results and Certified Experts lead to the home page in the crawl. The main contact flow is generic. | A click does not answer the visitor’s next question or move them closer to booking. | Link each feature to a useful destination or remove the link. Make the primary action “Book a trial / request a consultation,” then let the visitor select a branch and service. Track call, WhatsApp and form actions. |
| **P1 — mobile conversion** | **The contact form asks for five required fields** (first name, last name, email, subject, comments/questions), but the public form copy does not ask for branch or service. Branch phone/WhatsApp details appear separately. | A mobile visitor with high intent has to write an open-ended message and may still not reach the right team. | Test form delivery, then reduce friction: name, mobile, preferred branch, service and preferred contact time are a better starting point. Offer tap-to-call and a correctly routed WhatsApp link. Keep consent/privacy wording clear. |
| **P2 — local SEO/trust** | **Five locations are listed, but their presentation varies.** The Contact page has five branch addresses and two phone numbers; some page footers list only Goa locations, while others include Bengaluru. The home page’s location labels and the Contact-page addresses are not worded identically. | Conflicting/incomplete location data makes it harder for a visitor to choose a studio and weakens local search consistency. | Confirm exact public name, address, phone, hours, services and booking path for each branch. Use the same approved NAP (name/address/phone) everywhere. Add map/directions links and a useful branch page for each active location. |
| **P2 — content quality** | **Proofreading and terminology issues** appear in service copy, e.g. “Pilate”/“Pilates,” “equipments,” and “must faster.” Titles vary from keyword-like phrases to awkward fragments. | Errors make a premium, instructor-led service feel less polished and can reduce confidence before a first session. | Edit all copy for grammar, consistent service names and plain-language explanations. Use one clear, unique page title and meta description per page, written for a real customer rather than keyword repetition. |
| **P2 — content architecture** | **Repeated content and unclear hierarchy.** The home page and service pages expose the same testimonial set in repeated sequences. Extracted home-page headings appear irregular (a section-level heading precedes a later H1); validate the rendered DOM. | Long, repetitive pages bury the choices a new visitor needs. Poor heading semantics hurt scanning, assistive technology and search understanding. | Curate a small set of approved, attributable reviews; avoid repeating the same carousel across every page. Give each page one descriptive H1 and a logical H2/H3 outline. |
| **P2 — imagery/accessibility** | **Image descriptions are generic or empty in parts of the Gallery** (for example, repeated “Reformer Pilates Studio” descriptions and an empty image description). The home-page hero appears as a repeated series of banner images in the crawl, without a text headline/CTA exposed as HTML. | A person using a screen reader/search engine may not get the image’s meaning; text baked into a banner may not resize, translate or remain readable on a narrow screen. | Use meaningful alt text for informative images and empty alt for truly decorative ones. Put the core value proposition and CTA in HTML. Review whether a multi-slide hero is needed at all. |
| **P2 — performance hypothesis; measure** | **Potentially heavy/repeated media.** The home page exposes repeated banner and testimonial content. The Gallery contains 25+ image links to image files. Image URLs pass through NitroPack’s CDN; that alone does not demonstrate that the page is fast or slow. | Large images, multiple carousel slides, cloned slides and third-party scripts can affect mobile LCP, bytes and interaction responsiveness. The actual contribution is unknown without a waterfall. | Measure mobile and desktop first. Inspect image dimensions/format, `srcset`, lazy-loading, carousel behavior, JS/CSS and third-party requests. Keep one appropriately sized hero, defer below-the-fold media and remove unnecessary scripts. Preserve and test the existing optimizer rather than disabling it blindly. |
| **P2 — search hygiene** | **Page titles are inconsistent and sometimes overstate or underspecify the page.** Examples are listed in the inventory below. “No.1” and guaranteed-result language needs substantiation. | A result title should identify the actual service/location and set an accurate expectation. | Write unique titles/descriptions, confirm indexability and canonicals, maintain a clean XML sitemap, validate structured data and map old URLs to new ones before launch. Do not promise rankings or rich results. |
| **P3 — verify** | **Responsive behavior and accessibility are unverified.** The text crawl cannot show breakpoints, contrast, focus order, menu interaction, layout shift, keyboard access or actual tap size. | A redesign can look fine on a desktop screenshot yet fail on a phone or with assistive technology. | Perform manual device/browser QA plus an automated accessibility scan, keyboard-only navigation and form testing before launch. |

## Public page inventory

These are the titles exposed by the crawl; titles should be reviewed, not copied as final recommendations.

| Page | Title seen in crawl | Specific note |
|---|---|---|
| [Home](https://goapilatesstudio.com/) | “No.1 Pilates Studio \| Assured Results \| Goa Pilates Studio” | Hero is presented as banner imagery before a clear HTML proposition/CTA is visible in the extracted content. The home page lists Panjim, Parra, Old Goa and two Bengaluru areas. |
| [About](https://goapilatesstudio.com/about-us/) | “Modern Equipment-Customized Programs- Goa Pilates Studio” | Useful founder/instructor story and qualifications, but needs proofreading and a current/consistent proof section. |
| [Pilates](https://goapilatesstudio.com/pilates/) | “Key component to Improve Overall Fitness- Goa Pilates Studio” | Useful list of class formats; copy uses “Pilate” in places. Repeated testimonials follow. |
| [EMS](https://goapilatesstudio.com/ems/) | “EMS- Future of Fitness-Goa Pilates Studio” | Strong claims should be evidence-checked; make safety, suitability and a first-session explanation clear. |
| [Training](https://goapilatesstudio.com/training/) | “No.1 Pilates Studio \| Pilates Training \| Goa Pilates Studio” | Course dates are explicitly from 2024. Replace with current dates or a waitlist/enquiry. |
| [Weight Loss](https://goapilatesstudio.com/weight-loss/) | “Pilates For Weight Loss \| 20 Minutes \| Goa Pilates Studio” | Reframe around approved, supportable outcomes; avoid implied guaranteed calorie/fat-loss results. |
| [Gallery](https://goapilatesstudio.com/gallery/) | “Reformer Pilate Studio Gallery \| Goa Pilates Studio” | Many images; descriptions are repetitive or absent. Check file sizes and mobile loading. |
| [Franchise](https://goapilatesstudio.com/franchise/) | “Franchise - Goa Pilates Studio” | The counters currently show `0`, `1+`, `1+` and `1%`; validate/remove before presenting this page to prospects. |
| [Contact](https://goapilatesstudio.com/contact-us/) | “Contact us - Goa Pilates Studio” | Five branches are described. Add a simple branch-choice flow and verify each phone/WhatsApp, hours and map destination. |
| [Rehab](https://goapilatesstudio.com/rehab/) | Not found | An internal destination returns a generic WordPress not-found page. Restore or redirect it. |

## Mobile-first experience to aim for

Design the page around the questions a first-time visitor is likely to have—not around the order the old site happens to expose sections:

1. **What is offered, and is it for me?** One honest, readable headline, one short explanation, and a primary “Book a trial / consultation” action. Keep the promise in HTML, not only in a hero image.
2. **Where can I go?** A quick Goa/Bengaluru and branch selector, with hours, directions and the correct phone/WhatsApp action for that branch.
3. **Which service should I choose?** Short, distinct Pilates/Reformer, EMS, training and other confirmed service cards. Explain who each is for, how a first visit works and any important suitability notes.
4. **Can I trust the people and the process?** Current instructor credentials, real studio photos, a concise safety/consultation explanation and a few genuine reviews with permission.
5. **What happens next?** A low-friction form or direct contact action, with an expected response time and a clear success state.

On phones, keep navigation simple, use generous tap targets, avoid tiny text and hover-only controls, and consider a restrained bottom action bar for **Call / WhatsApp / Book**. Test it for keyboard and screen-reader access and ensure it never covers content or a form button. Do not invent prices, offers, instructor credentials or branch availability; confirm them first.

## Recommended workflow

### Phase 1 — Discovery and measured baseline

- Confirm the current CMS, hosting, theme/plugins, booking/form routing, analytics and the design-system repository before selecting a technical approach.
- Ask the owner to verify active branches, exact contact details/hours, service availability by branch, current course calendar, trainer credentials, offers/prices and which health/outcome claims are approved.
- Crawl every live URL and important variants. Record status codes, redirects, canonical URLs, internal links, page titles/descriptions, indexability and the existing URL set. Check Search Console, analytics and business-profile data if the client grants access.
- Run Lighthouse/PageSpeed on the home page and each page template on mobile and desktop, ideally three comparable runs and use the median. Save a report and waterfall; separate lab diagnostics from real-user CrUX/Core Web Vitals.
- Capture screenshots at 320/360/390/414 px, tablet and desktop widths. Test Android Chrome and iOS Safari where practical.

**Output:** a verified baseline, route/content inventory and issue list with impact, evidence and owner decisions.

### Phase 2 — Content, trust and local-search plan

- Confirm which current URLs should remain. Keep useful URLs where possible; write a 301 redirect map for any URL that must change, including the broken Rehab destination.
- Approve one accurate title, H1, description and target intent per page. Avoid duplicate/recycled blocks and unsupported superlatives.
- Create a consistent location data sheet for all five listed locations. Build useful, distinct local pages only where there is real branch-specific information; do not generate five near-identical doorway pages.
- Review EMS, weight-loss, rehabilitation, pregnancy and money-back wording with the business and suitable qualified reviewer. Add terms/disclaimers only where they are genuinely appropriate and approved.
- Check robots, sitemap, canonicals, metadata, internal links, image alt text and structured data (organization plus accurate location details) with search tools/validators.

**Output:** approved site map, copy brief, redirect map and local SEO content checklist.

### Phase 3 — Mobile UX and design system

- Start with phone wireframes for Home, a service page, a location page and Contact—the highest-value templates.
- Design a direct journey from branch choice to trial/consultation. Put one dominant CTA on each screen and keep secondary actions visually quieter.
- Define reusable tokens/components in the supplied design system: typography, color, spacing, buttons, form controls, cards, navigation, branch cards, reviews and FAQ.
- Review real photography and image rights. Prefer a single strong, responsive hero over a large auto-rotating carousel unless testing shows a clear reason to retain it.
- Validate the wireframes with a few representative users or staff before polishing every page.

**Output:** mobile and desktop wireframes, component rules and approved high-fidelity page designs.

### Phase 4 — Build and optimize

- Implement in the existing platform/repository unless discovery demonstrates a good reason to migrate. Preserve established URLs and business workflows.
- Use responsive image sizes and modern formats where supported; reserve image dimensions to reduce layout shift; prioritize the actual LCP image; lazy-load below-the-fold media; minimize unnecessary animation, carousels, plugins and third-party scripts.
- Build accessible semantic headings, keyboard-operable navigation, visible focus, sufficient contrast, meaningful alt text and correctly labeled forms.
- Add branch selection and clearly measured actions for phone, WhatsApp, form submission and trial booking. Ensure lead notifications arrive at the right team.

**Output:** working staged site with tested content and the existing business’s operational integrations intact.

### Phase 5 — QA, launch and iteration

- Check all routes and redirects, forms and notifications, branch contacts, image loading, no horizontal overflow, browser/device layout, keyboard navigation, contrast and accessibility errors.
- Re-run comparable Lighthouse/PSI tests against the same pages and settings. Fix regressions rather than optimizing only a single score.
- Set up/verify Search Console, sitemap submission, analytics events and the business’s approved consent/privacy behavior. Monitor indexing, 404s and lead delivery after launch.
- Review performance and conversion after real traffic accumulates; use field Core Web Vitals where data exists.

**Output:** launch checklist, verified redirects, before/after scorecard and a short maintenance guide.

## Suggested acceptance targets (goals, not current results)

- No broken internal links; every public page has a useful title, one descriptive H1 and a deliberate next action.
- No outdated schedule, placeholder counter or unapproved medical/outcome claim remains.
- No horizontal scrolling at 320–430 px; navigation, galleries, forms and sticky actions work by touch and keyboard.
- Form and contact actions are tested end-to-end and measured. Visitors can identify a branch before contacting the studio.
- Aim for Lighthouse **90+ Performance** on mobile for key templates and strong Accessibility/SEO/Best Practices scores, but use repeatable runs and real-user data rather than treating one lab number as a guarantee.
- Where sufficient real-user data is available, target “good” Core Web Vitals at the 75th percentile: LCP ≤2.5 s, INP ≤200 ms and CLS ≤0.1.

## Cold-call positioning

Lead with specific, fixable observations and a business outcome—do not insult the existing site or quote an unmeasured Lighthouse score.

> “Hi, I’m [name]. I was reviewing Goa Pilates Studio’s public website and noticed a couple of easy-to-miss issues: the instructor-training page still lists 2024 course dates, the Rehab link opens a not-found page, and the contact form doesn’t help a visitor choose one of the listed branches. I’ve mapped a mobile-first path that lets someone choose a studio, understand the right class and contact that branch quickly. Would a 10-minute walkthrough be useful? If you’re not the right person, who looks after the website or marketing?”

A good first sample would be a short audit plus one mobile home-page and branch-selection concept—not a promise of rankings, leads or a particular speed score before measurement.

## Inputs needed before design starts

1. The design-system/GitHub repository and any brand assets or usage rules.
2. Which lead matters most: studio bookings in Goa, Bengaluru, instructor training, franchise enquiries—or an agreed priority order.
3. Verified branch details, current offers/prices (if public), service availability, schedules and booking/contact ownership.
4. Approval to retain/rewrite testimonials, studio images, trainer credentials and all performance/health claims.
5. Current CMS/theme access or a technical contact, plus any Search Console/Analytics or booking-form information the client is willing to share.

**Recommended next step:** share the design repository when ready. We can first map its components and conventions against the mobile-first page flow above, then agree on one homepage/location prototype before building the complete site.
