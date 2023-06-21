import AboutSection from "@/components/AboutSection"

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://bagus-sastrawan.vercel.app/')
    cy.contains('About').click
    cy.go('back')
  })
})