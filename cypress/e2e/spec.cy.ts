
describe('form with country list', () => {
  it('visits the base url', () => {
    cy.visit('/')

    cy.get('h2').contains('Country (no western) List')

    cy.get('label').contains('name')
    cy.get('input')

    cy.get('label').contains('address')
    cy.get('input')

    cy.get('label').contains('country')
    cy.get('select')
  })
})
