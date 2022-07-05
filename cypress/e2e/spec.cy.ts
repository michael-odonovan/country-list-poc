describe('empty spec', () => {
  it('visits the base url', () => {
    cy.visit('/')
    cy.contains('h2', 'hello world')
  })
})
