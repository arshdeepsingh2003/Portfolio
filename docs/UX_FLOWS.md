# UX Flows

## Flow 1 — First visit
1. Visitor opens the homepage.
2. Header presents the wordmark and primary navigation.
3. Hero communicates role and value proposition.
4. Visitor chooses Explore My Work or Contact.
**Success:** Visitor understands the site's focus and can continue without hunting for links.

## Flow 2 — About and skills
1. Visitor selects About.
2. Page scrolls to the About section.
3. Visitor continues to Skills.
4. Skills are grouped by category.
**Success:** Background and technical capabilities are easy to scan.

## Flow 3 — Browse web development projects
1. Visitor selects Projects.
2. Web development project cards appear.
3. Visitor reviews the problem, summary, stack, and contribution.
4. Visitor opens a verified repository, demo, or case study link.
**Success:** Visitor can evaluate real work.
**Failure:** If no public link exists, omit the link and present an honest project summary.

## Flow 4 — Browse data analytics projects
1. Visitor selects Data Analytics.
2. The dedicated analytics section appears.
3. Visitor selects a dashboard or case study.
4. Visitor reviews the business question, method, findings, and limitations.
**Success:** Analytics work is discoverable independently from web development projects.

## Flow 5 — Contact
1. Visitor selects Contact.
2. Visitor chooses email or a verified professional profile.
3. If a contact form exists, visitor enters details and submits.
4. Form validates input and provides a success or error state.
**Success:** The visitor has a working way to reach the owner.
**Failure:** If a form service fails, show a clear error and a direct email fallback.

## Flow 6 — Mobile navigation
1. Visitor opens the menu button.
2. Menu exposes section links.
3. Visitor selects a section.
4. Menu closes and focus/scroll behavior remains predictable.
**Success:** All main sections are reachable on a small screen.

## Interaction states
- **Loading:** Only for genuinely asynchronous actions.
- **Empty:** Do not display fake projects; hide an empty category or state that content is coming only if approved.
- **Error:** State what failed and provide a next step.
- **Success:** Confirm form submission only after the service confirms success.
