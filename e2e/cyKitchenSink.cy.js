describe('home page', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io')
  })

  it('the h1 contains the correct text', () => {
    cy.get('h1').contains("Kitchen Sink")
  })
  it('the header description container has the correct text ', () => {
    cy.get('.container > p').contains("This is an example app used to showcase Cypress.io testing. For a full reference of our documentation, go to docs.cypress.io")
  })
  it('the sub-header contains has the correct text ', () => {
    cy.get(':nth-child(3) > .container > .row > #utilities > h2').contains("Commands")
  })
  it('confirm Querying link', () => {
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > :nth-child(1)').click()
    cy.location("pathname").should('equal', '/commands/querying')    
  })
  it('confirm Traversal link', () => {
    cy.get('.home-list > :nth-child(2) > :nth-child(1)').click()
    cy.location("pathname").should('equal', '/commands/traversal')
  })
  it('confirm Actions link and form fields are editable', () => {
    cy.get('.home-list > :nth-child(3) > :nth-child(1)').click()
    cy.location("pathname").should('equal', '/commands/actions')
    cy.wait(500)
    cy.get('#email1').clear().type('test@example.com')
    cy.wait(500)
    cy.get('#password1').clear().type('password1234!')
    cy.wait(500)
    cy.get('#fullName1').clear().type('Tester Testing')
    cy.wait(500)
    cy.get('#description').clear().type("be testing field length in this field here w/ 0123 & <%>")
    cy.wait(500)
    cy.get('#couponCode1').clear().type('SPESH')
    cy.wait(500)
    cy.get('.action-form > .btn').click()
    cy.wait(500)
    cy.get('.well > p').should('exist').contains('Your form has been submitted!')

  
  })

})