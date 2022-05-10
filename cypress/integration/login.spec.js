/* eslint-disable no-undef */
/// <reference types="Cypress"/>

describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should login', () => {
    cy.get('[data-cy="home-login"]').click();
    cy.get('[data-cy="login-name"]').type('nicholas.reinger@hotmail.com');
    cy.get('[data-cy="login-password"]').type('12345678');
    cy.get('[data-cy="login-button"]').click();
    cy.contains('Haz iniciado sesión con éxito');
    cy.get('[data-cy="middle-button"]').click();
  });

  it('should show email error', () => {
    cy.get('[data-cy="home-login"]').click();
    cy.get('[data-cy="login-name"]').type('nicholas.reinger@hotmailcom');
    cy.get('[data-cy="login-password"]').type('12345678');
    cy.get('[data-cy="login-button"]').click();
    cy.contains('Email no válido');
  });

  it('shouldn\'t login', () => {
    cy.get('[data-cy="home-login"]').click();
    cy.get('[data-cy="login-name"]').type('nicholas.reinger@hotmail.com');
    cy.get('[data-cy="login-password"]').type('1234567');
    cy.get('[data-cy="login-button"]').click();
    cy.contains('Correo o contraseña inválido, intente nuevamente');
  });
});
