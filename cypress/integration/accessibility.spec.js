describe('Website', () => {
  it('/contact/ is accessible', () => {
    cy.visit('/contact/')
    cy.injectAxe()
    cy.checkA11y()
  })
})
