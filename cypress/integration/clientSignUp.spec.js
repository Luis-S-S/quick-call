/* eslint-disable no-undef */
/// <reference types="Cypress"/>

describe('Client Sign Up', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should sign up', () => {
    cy.get('[data-cy="home-signup"]').click();
    cy.get('[data-cy="signup-client"]').click();
    cy.get('[data-cy="clientSignup-name"]').type('Luis Salcedo');
    cy.get('[data-cy="clientSignup-email"]').type('rideluis@hotmail.com');
    cy.get('[data-cy="clientSignup-password"]').type('12345678');
    cy.get('[data-cy="clientSignup-confirm"]').type('12345678');
    cy.get('[data-cy="clientSignup-button"]').click();
    cy.get('[data-cy="middle-button"]').click();
  });

  it('should show name error', () => {
    cy.get('[data-cy="home-signup"]').click();
    cy.get('[data-cy="signup-client"]').click();
    cy.get('[data-cy="clientSignup-email"]').type('random_email@hotmail.com');
    cy.get('[data-cy="clientSignup-password"]').type('12345678');
    cy.get('[data-cy="clientSignup-confirm"]').type('12345678');
    cy.get('[data-cy="clientSignup-button"]').click();
    cy.contains('El nombre es requerido');
  });

  it('should show email error', () => {
    cy.get('[data-cy="home-signup"]').click();
    cy.get('[data-cy="signup-client"]').click();
    cy.get('[data-cy="clientSignup-name"]').type('Random Name');
    cy.get('[data-cy="clientSignup-password"]').type('12345678');
    cy.get('[data-cy="clientSignup-confirm"]').type('12345678');
    cy.get('[data-cy="clientSignup-button"]').click();
    cy.contains('El email es requerido');
  });

  it('should show password error', () => {
    cy.get('[data-cy="home-signup"]').click();
    cy.get('[data-cy="signup-client"]').click();
    cy.get('[data-cy="clientSignup-name"]').type('Random Name');
    cy.get('[data-cy="clientSignup-email"]').type('random_email@hotmail.com');
    cy.get('[data-cy="clientSignup-confirm"]').type('12345678');
    cy.get('[data-cy="clientSignup-button"]').click();
    cy.contains('Por favor, corriga los campos marcados en rojo');
  });

  it('should show confirm password error', () => {
    cy.get('[data-cy="home-signup"]').click();
    cy.get('[data-cy="signup-client"]').click();
    cy.get('[data-cy="clientSignup-name"]').type('Random Name');
    cy.get('[data-cy="clientSignup-email"]').type('random_email@hotmail.com');
    cy.get('[data-cy="clientSignup-password"]').type('12345678');
    cy.get('[data-cy="clientSignup-button"]').click();
    cy.contains('Debe confirmar la contraseña');
  });
});
