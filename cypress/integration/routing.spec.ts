/// <reference types="cypress" />

describe('routing', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('localServerURL'));
  })

  describe('the main nav bar', () => {
    it('routes appropriately', () => {
      cy.get('[data-test-id="main-nav-portfolio"]').click();
      cy.url().should('include', '/projects');

      cy.get('[data-test-id="main-nav-blog"]').click();
      cy.url().should('include', '/posts');

      cy.get('[data-test-id="main-nav-about"]').click();
      cy.url().should('include', '/about');

      cy.get('[data-test-id="main-nav-home"]').click();
      cy.url().should('equal', Cypress.env('localServerURL'));
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
      
      cy.get('[data-test-id="hamburger-menu"]').click();
      cy.get('[data-test-id="side-nav-blog"]').click();
      cy.url().should('include', '/posts');
      
      cy.get('[data-test-id="hamburger-menu"]').click();
      cy.get('[data-test-id="side-nav-about"]').click();
      cy.url().should('include', '/about');
      
      cy.get('[data-test-id="hamburger-menu"]').click();
      cy.get('[data-test-id="side-nav-home"]').click();
      cy.url().should('equal', Cypress.env('localServerURL'));
    });
  });
});

export {};
