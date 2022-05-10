/// <reference types="Cypress" />
/* eslint-disable no-undef */

describe('PQR testing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get('[data-cy="home-login"]').click();
    cy.get('[data-cy="login-name"]').type('nicholas.reinger@hotmail.com');
    cy.get('[data-cy="login-password"]').type('12345678');
    cy.get('[data-cy="login-button"]').click();
    cy.get('[data-cy="middle-button"]').click();
    cy.get('[data-cy="home-profile"]').click();
    cy.get('[data-cy="dashboard-pqr"]').click();
  });

  it('should create PQR', () => {
    cy.get('[data-cy="pqr-create"]').click();
    cy.get('[data-cy="pqr-subject"]').type('PQR subject test');
    cy.get('[data-cy="pqr-description"]').type('PQR description test');
    cy.get('[data-cy="pqr-input"]').click();
    cy.get('[data-cy="pqr-addFile"]').click();
    cy.get('[data-cy="pqr-submit"]').click();
    cy.contains('PQR creada con éxito');
    cy.get('[data-cy="middle-button"]').click();
    cy.contains('Asunto: PQR subject test');
  });

  it('should create PQR', () => {
    cy.get('[data-cy="pqr-create"]').click();
    cy.get('[data-cy="pqr-description"]').type('PQR description test');
    cy.get('[data-cy="pqr-input"]').click();
    cy.get('[data-cy="pqr-addFile"]').click();
    cy.get('[data-cy="pqr-submit"]').click();
    cy.contains('El asunto es requerido');
  });
});
