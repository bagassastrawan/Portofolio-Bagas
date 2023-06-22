describe("Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("FormContact", () => {
    cy.Form({
      Name: "aku",
      Email: "aku@gmail.com",
      Message: "test",
    });
  });

  describe("tstNavbar spec", () => {
    it("passes", () => {

      cy.contains("About").click();
      cy.contains("Project").click();
      cy.contains("Contact").click();
      cy.contains("Home").click();
    });
  });


});

// describe('Button', () => {
//   it('button', () => {
//     cy.visit('http://localhost:3000');
//     cy.get('#projects').click();
//     cy.get('#project-3').click({ force: true });
//   });
// });
