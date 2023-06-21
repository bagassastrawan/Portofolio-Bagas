describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://bagus-sastrawan.vercel.app/')
    cy.viewport('iphone-8')
  })
})