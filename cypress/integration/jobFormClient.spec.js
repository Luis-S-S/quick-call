/// <reference types="Cypress" />
/* eslint-disable no-undef */

describe('Job Form client testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="home-login"]').click();
    cy.get('[data-cy="login-name"]').type('nicholas.reinger@hotmail.com');
    cy.get('[data-cy="login-password"]').type('12345678');
    cy.get('[data-cy="login-button"]').click();
    cy.contains('Haz iniciado sesión con éxito');
    cy.get('[data-cy="middle-button"]').click();
    cy.visit('http://localhost:3000/ProfilePro/625e21d964b874d78ccee8df');
    cy.saveLocalStorage();
  });

  it('should create job', () => {
    cy.getLocalStorage();
    cy.get('[data-cy="pro-form"]').click();
    cy.get('[data-cy="jobForm-title"]').type('Job title testing');
    cy.get('[data-cy="jobForm-objective"]').type('Job objective testing');
    cy.get('[data-cy="jobForm-conditions"]').select(1);
    cy.get('[data-cy="jobForm-addConditions"]').click();
    cy.get('[data-cy="jobForm-evidence"]').selectFile('./public/images/img/evidence.png');
    cy.get('[data-cy="jobForm-submit"]').click();
  });
});
