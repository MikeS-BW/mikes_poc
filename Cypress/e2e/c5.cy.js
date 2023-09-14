describe('bw home page', () => {
    beforeEach(() => {
      cy.visit('https://go.businesswire.com')
    })

    it('hero text says Business Wire Login', () => {
      cy.get('.bw-font-light-variant > :nth-child(1)').contains("Business Wire")
      cy.get('.bold').contains("Log In")
    })    
    it("BW logo is present", () => {
      cy.get('.logged-out-logo-small').should('exist')
    })
    it("email field is editable and can submit", () => {
      cy.get('.css-3e3czp > #username').type("tester@tested.test")
      cy.get('#submitLogin').click()
      cy.location("pathname").should("equal", "/login/password")
      
    })  
    

})    