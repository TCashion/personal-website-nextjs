# AGENTS.md

Instructions for Codex when working in this repository:

- Styling is done mainly with tailwind CSS. Use a strong, extensible design system when making any UI/UX or styling changes. 
- Use semantic HTML structure.
- Keep CSS organized and readable.
- Always maintain accessibility and good contrast.
- Prefer simple layout primitives: flex, grid, max-width containers, spacing utilities or existing classes.
- Validate any changes by running `npm run build`, `npm run dev`, and `npm run test`, and ensure the outputs are successful. You do not need to ask my permission to run these commands. 
- e2e tests (`npm run e2e`) do not currently work locally, but any changes to UI/UX should check the e2e test file to make sure no existing tests will be broken. 
- Where appropriate, add new unit and e2e tests.
- Never change the `next-env.d.ts` file.
- Never, ever change the blog contents because that is my personal writing and should never change. 
- For distinct feature requests, create a new branch before making commits. Branch names must use the format `tc/name-of-feature`, where `tc` is fixed and `name-of-feature` is a short kebab-case description of the feature.
- Never, ever commit directly to the `main` or `master` branch. If the current branch is `main` or `master`, create and switch to a valid feature branch before committing any feature work.
- You may use `git` commands such as `git add`, `git checkout -b`, `git switch -c`, `git commit`, and `git push` as part of feature delivery, but only when working from a non-`main` and non-`master` branch.
- For the normal pull request workflow, you do not need to ask permission before using routine branch/PR commands such as `git checkout -b`, `git switch -c`, `git add`, `git commit`, `git push`, and `gh pr create`, as long as you still follow the branch, validation, and non-`main`/non-`master` rules in this file.
- For new feature work, prefer a pull request workflow: create the feature branch, implement the change, validate locally, push the branch, and open a pull request.
- Do not open a pull request until both `npm run test` and `npm run build` have completed successfully locally. If either validation fails, fix the issue before creating the pull request.
- Pull requests should include a detailed description of the changes, including the purpose of the feature, the main implementation details, any tests or validation performed, and any follow-up notes that would help with review.
- If the user explicitly says not to create a pull request, or explicitly asks for changes without branch creation or PR creation, skip the PR workflow and follow the user's instruction instead. In that case, you may still make the code changes locally, but do not open a PR unless the user later asks for one.
