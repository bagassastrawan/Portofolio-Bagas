import { values } from "cypress/types/lodash";

// Testing To Desktop
describe("Form", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
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
      cy.get('textarea#message').type('test')
      cy.get('button#submit-button').click()
  })
})

  describe("project", () => {
    it("passes", () => {
      cy.get('#scroll-skill').click();
      cy.get('#button-to-project').click();
      cy.get("#link-project").click();
      cy.get("#code-github").click();
    });
  });


  describe("Navbar", () => {
    it("passes", () => {
      cy.contains("About").click();
      cy.contains("Project").click();
      cy.contains("Contact").click();
      cy.contains("Home").click();
    });
  });

  describe('Linksosmedfooter', () => {
    it('passes', () => {
      cy.get('#button-github').click()
      cy.get('#button-youtube').click()
      cy.get('#button-instagram').click()
      cy.get('#button-whastapp').click()
      
    })
  })

  

});


