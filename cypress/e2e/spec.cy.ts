
describe('empty spec', () => {
  it('visits the base url', () => {
    cy.visit('/')
    cy.get('h2')
      cy.contains('hello world')
    cy.get('input')
  })
})
