// Testing To Desktop
describe("mobile", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.viewport('samsung-s10');
  });

  describe("Navbar", () => {
    it("passes", () => {
      cy.wait(1000); // Wait for 1 second if necessary
      cy.get('.md\\:hidden > .p-2').click();
      cy.contains("About").click();
      cy.contains("Projects").click({ force: true });
      cy.contains("Contact").click();
      cy.contains("Home").click({ force: true });
    });
  });


  describe("project", () => {
    it("passes", () => {
      cy.get('#scroll-skill').click();
      cy.get('#button-to-project').click();
      cy.get("#link-project").click();
      cy.get("#code-github").click();
      cy.get("#img-project").click();
    });
  });



  describe('Form Test', () => {
    it("Form", () => {
      const inputValue = {
        name : 'bagus',
        email : 'bagus@example.com',
      }
      
      Object.entries(inputValue).forEach(([key, value])=>{
        cy.get(`input[id='${key}']`).type(value)
      })
      cy.get('textarea#message').type('Testing Contact Portfolio')
      cy.get('button#submit-button').click()
  })
})

  describe('Linksosmedfooter', () => {
    it('passes', () => {
      cy.get('#button-github').click()
      cy.get('#button-youtube').click()
      cy.get('#button-instagram').click()
      cy.get('#button-whastapp').click()
      
    })
  })
});
