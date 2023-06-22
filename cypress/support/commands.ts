/// <reference types="cypress" />

import cypress from "cypress";

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// commands.ts
Cypress.Commands.add("Form", ({ Name, Email, Message }) => {
  cy.get("#name").type(Name);
  cy.get("#email").type(Email);
  cy.get("#message").type(Message);
  cy.get("#submit-button").click();
  cy.get("#button").click();
});

// Cypress.Commands.add("submitForm", ({name,email,message}) => {
//     cy.get("#name-input").type(name);
//     cy.get("#email-input").type(email);
//     cy.get("#message-input").type(message);
//     cy.get("#submit-button").click();
// });

export {};
