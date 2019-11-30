context('Bug test case', () => {
    beforeEach(() => {
        cy.visit('cypress/pages/index.html')
    })

    it('clear value of hidden input', () => {
        cy.get('input').clear({ force: true }).should('have.value', '')
    })
})
