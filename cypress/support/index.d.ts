declare namespace Cypress {
  interface Chainable<Subject = any> {
    Form(data: {
      Name: string;
      Email: string;
      Message: string;
    }): Chainable<Subject>;
  }
}
