/// <reference types="cypress" />

describe('routing', () => {
  context('the main nav bar', () => {
    it('routes appropriately', () => {
      cy.visit(Cypress.env('localServerURL'));

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
});

export {};