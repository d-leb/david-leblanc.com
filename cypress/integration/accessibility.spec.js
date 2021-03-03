describe('Website', () => {
  it('/ is accessible', () => {
    cy.visit('/')
    cy.injectAxe()
    cy.checkA11y()
  })

  it('/example is accessible', () => {
    cy.visit('/example')
    cy.injectAxe()
    cy.checkA11y()
  })
})
