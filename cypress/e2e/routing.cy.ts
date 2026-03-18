/// <reference types="cypress" />

describe('routing', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('localServerURL'));
  });

  describe('the main nav bar', () => {
    it('routes appropriately', () => {
      cy.get('[data-test-id="main-nav-portfolio"]', { timeout: 15000 }).click();
      cy.url().should('include', '/projects');
      cy.contains('h2', 'Portfolio').should('be.visible');

      cy.get('[data-test-id="main-nav-blog"]').click();
      cy.url().should('include', '/posts');
      cy.contains('h2', 'Blog').should('be.visible');

      cy.get('[data-test-id="main-nav-about"]').click();
      cy.url().should('include', '/about');
      cy.contains('h2', 'About Me').should('be.visible');

      cy.get('[data-test-id="main-nav-home"]').click();
      cy.url().should('equal', Cypress.env('localServerURL'));
      cy.get('[data-testid="home-container"]').should('exist');
      cy.contains('h2', 'Portfolio').should('exist');
    });
  });

  describe('the side nav bar', () => {
    beforeEach(() => {
      cy.viewport(360, 640);
    });

    it('routes appropriately', () => {
      cy.get('[data-test-id="hamburger-menu"]').click();
      cy.get('[data-test-id="side-nav-portfolio"]').click();
      cy.url().should('include', '/projects');
      cy.contains('h2', 'Portfolio').should('be.visible');

      cy.get('[data-test-id="hamburger-menu"]').click();
      cy.get('[data-test-id="side-nav-blog"]').click();
      cy.url().should('include', '/posts');
      cy.contains('h2', 'Blog').should('be.visible');

      cy.get('[data-test-id="hamburger-menu"]').click();
      cy.get('[data-test-id="side-nav-about"]').click();
      cy.url().should('include', '/about');
      cy.contains('h2', 'About Me').should('be.visible');

      cy.get('[data-test-id="hamburger-menu"]').click();
      cy.get('[data-test-id="side-nav-home"]').click();
      cy.url().should('equal', Cypress.env('localServerURL'));
      cy.get('[data-testid="home-container"]').should('exist');
      cy.contains('h2', 'Portfolio').should('exist');
    });
  });

  describe('content routes', () => {
    it('opens the first project detail page and returns to the portfolio index', () => {
      cy.visit(`${Cypress.env('localServerURL')}projects`);

      cy.contains('h2', 'Portfolio').should('be.visible');
      cy.get('a[href^="/projects/"]').first().as('firstProjectLink');
      cy.get('@firstProjectLink').invoke('attr', 'href').should('match', /^\/projects\/.+/);
      cy.get('@firstProjectLink').click();

      cy.url().should('match', /\/projects\/[^/]+$/);
      cy.contains('button', '<< Go Back').click();
      cy.url().should('include', '/projects');
    });

    it('opens the first blog post detail page and returns to the blog index', () => {
      cy.visit(`${Cypress.env('localServerURL')}posts`);

      cy.contains('h2', 'Blog').should('be.visible');
      cy.get('a[href^="/posts/"]').first().as('firstPostLink');
      cy.get('@firstPostLink').invoke('attr', 'href').should('match', /^\/posts\/.+/);
      cy.get('@firstPostLink').click();

      cy.url().should('match', /\/posts\/[^/]+$/);
      cy.contains('button', '<< Go Back').click();
      cy.url().should('include', '/posts');
    });
  });
});

export {};
