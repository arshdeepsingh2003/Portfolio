# Testing Strategy

## 1. Testing Goals
Verify that:
- Navigation reaches every required section.
- Project and contact links work.
- Content renders correctly at supported viewport sizes.
- Keyboard and screen-reader basics remain usable.
- Images and assets load without breaking layout.
- Production build succeeds.

## 2. Test Types
### Unit tests
Test data helpers, category filtering, and components with meaningful logic.

### Integration tests
Test navigation/menu interactions and any contact-form integration.

### End-to-end tests
Critical journeys:
- Open homepage and navigate to About.
- Navigate to Web Projects and open a project link.
- Navigate to Data Analytics and open a case study.
- Open résumé and contact links.
- Open mobile navigation and follow a section link.
- Submit the contact form if one exists.

## 3. Testing Tools
Use tools already installed in the repository. If none are present, decide on a suitable unit/E2E tool after confirming the framework. Do not add a test stack without checking first.

## 4. Test File Structure
Follow the repository's current test convention. A possible structure is:

```text
tests/
  unit/
  integration/
  e2e/
```

## 5. Critical User Flows
### Browse projects
1. Visitor opens the portfolio.
2. Visitor selects Projects in navigation.
3. Project cards are visible with title, summary, stack, and valid links.
**Expected:** Section is reachable, content is readable, and links open correctly.

### Browse data analytics
1. Visitor selects Data Analytics.
2. Analytics case-study cards appear separately from web projects.
3. Visitor opens an available case study.
**Expected:** Correct section and working links.

### Contact
1. Visitor selects Contact.
2. Visitor uses email/social link or submits the form if implemented.
**Expected:** The selected contact method works; errors are clear if a form provider fails.

## 6. Coverage
Prioritize user-visible critical journeys, link/data validation, and any form logic. Avoid chasing a percentage at the expense of meaningful tests.

## 7. Commands
Document the actual commands after inspecting `package.json` or equivalent. Do not assume `npm test`, `npm run lint`, or `npm run build` exists without checking.

## 8. Definition of Done
- [ ] Relevant tests pass.
- [ ] Production build passes.
- [ ] Lint/type checks pass if configured.
- [ ] Critical flows verified manually or by E2E tests.
- [ ] Mobile and desktop layouts checked.
- [ ] No blocking console/network errors.
