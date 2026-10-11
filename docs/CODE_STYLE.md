# Code Style & Conventions

## 1. General Principles
- Prefer readable, straightforward code.
- Keep functions and components focused.
- Avoid unnecessary abstractions and dependencies.
- Reuse existing components and utilities.
- Prefer consistency over novelty.

## 2. Naming
Follow the existing repository. If starting fresh:
- Components: PascalCase (`ProjectCard`).
- Functions and variables: camelCase.
- Constants: UPPER_SNAKE_CASE only for true constants.
- React component files: PascalCase or the established project convention.
- CSS classes: follow the existing utility/CSS convention.
- Data fields: consistent camelCase in frontend objects.

## 3. Folder Structure
Follow `ARCHITECTURE.md`, adapting it to the actual repository. Do not reorganize files without a clear reason.

## 4. Imports
- Keep imports explicit.
- Remove unused imports.
- Follow the existing alias and ordering convention.
- Avoid circular dependencies.

## 5. Components
- One clear responsibility per component.
- Reuse project cards, section headings, skill tags, and buttons.
- Keep content data separate from presentation when useful.
- Avoid deeply nested conditional markup.

## 6. Functions
- Use descriptive names.
- Keep one logical purpose per function.
- Handle edge cases deliberately.
- Avoid clever code when simple code is clearer.

## 7. Error Handling
- Provide a clear fallback for missing images or optional links.
- Do not silently swallow errors.
- Do not show internal stack traces to visitors.
- Do not add fake loading states to static content.

## 8. Comments
Explain why a non-obvious decision exists, not what an obvious line does.

## 9. Logging
Use the project's existing logging approach. Do not add production console noise or log personal data.

## 10. Formatting and Quality Tools
Use the formatter, linter, and type checker already configured in the repository. If none exist, choose them only after checking the current stack and obtaining agreement where needed.

## 11. Do
- Reuse established patterns.
- Keep changes focused.
- Remove dead code.
- Verify responsive behavior.

## 12. Don't
- Create duplicate utilities.
- Introduce dependencies for tiny effects.
- ignore architecture or accessibility.
- Change unrelated files.
- Claim validation was completed unless commands were actually run.
