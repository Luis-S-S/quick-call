/// <reference types="cypress" />
/* eslint-disable no-undef */

const localUrl = 'http://localhost:3000/';
// const quickCallUrl = 'https://quickcall.netlify.app/';

describe('Login Client', () => {
  beforeEach(() => {
    cy.visit(localUrl);
  });

  it('Login Client', () => {
    cy.contains('Iniciar Sesión').click();
  });
});
