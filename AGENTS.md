# AGENTS.md

Instructions for Codex when working in this repository:

- Styling is done mainly with tailwind CSS. Use a strong, extensible design system when making any UI/UX or styling changes. 
- Use semantic HTML structure.
- Keep CSS organized and readable.
- Always maintain accessibility and good contrast.
- Prefer simple layout primitives: flex, grid, max-width containers, spacing utilities or existing classes.
- Validate any changes by running `npm run build`, `npm run dev`, and `npm run test`, and ensure the outputs are successful.
- e2e tests (`npm run e2e`) do not currently work locally, but any changes to UI/UX should check the e2e test file to make sure no existing tests will be broken. 
- Where appropriate, add new unit and e2e tests.
- Never change the `next-env.d.ts` file.
- Never, ever change the blog contents because that is my personal writing and should never change. 
