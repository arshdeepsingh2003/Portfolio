# Security Guidelines

## 1. Authentication
No visitor authentication is needed for a public portfolio MVP.

## 2. Authorization
No private application roles are needed for the MVP. If an admin/CMS is introduced later, enforce authorization server-side.

## 3. Secrets
- Never hard-code credentials.
- Never commit production secrets.
- Never expose private keys or tokens in frontend bundles.
- Use environment variables and hosting secret management for any private server-side configuration.
- Rotate credentials if they are exposed.

## 4. Environment Variables
No private environment variables are expected for a static MVP. Any public build-time variables must be safe for public exposure. A `VITE_*` variable must be treated as public.

## 5. API Security
No custom API is required by default. If a contact form endpoint is introduced:
- Validate inputs server-side.
- Use rate limiting and spam protection.
- Configure CORS narrowly where applicable.
- Avoid returning internal errors or stack traces.
- Validate destination URLs and do not create open redirects.

## 6. Data Protection
- Publish only contact information the owner has chosen to share.
- Do not expose confidential employer data, customer records, API keys, or internal screenshots.
- If submissions are collected, define access, retention, and deletion behavior.

## 7. Logging
Never log secrets, tokens, or sensitive personal information. Log only the operational details needed to diagnose a real backend/form integration.

## 8. File Uploads
No uploads are required for the MVP. If added later, restrict file types and size, validate content server-side, and store uploads outside executable paths.

## 9. Security Checklist
- [ ] No secrets committed or exposed in client bundles.
- [ ] External links use appropriate safe link attributes where relevant.
- [ ] Dependencies reviewed.
- [ ] Contact form (if present) validates and rate-limits requests.
- [ ] No private company/customer data published.
- [ ] Error messages reveal no sensitive implementation details.
