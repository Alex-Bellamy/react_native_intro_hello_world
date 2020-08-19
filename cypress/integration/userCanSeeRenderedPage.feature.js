describe('User can see rendered page', () => {
  before(() => {
    cy.visit('/')
  })
  
  it('landing page should appear', () => {
    cy.contains('Hello World!').should('be.visible')
  })
})