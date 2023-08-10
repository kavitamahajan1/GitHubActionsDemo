///<reference types="cypress"/>

describe('Login AU bank UAT', () => {

  before(function(){    
  
      cy.visit('/')
      cy.wait(5000)
      cy.get('#loginbtn').click();
      cy.wait(2000)
  })

  it('tests AU bank UAT', () => {
      
      cy.get('#username').click();
      cy.get('#username').type('insure');
      cy.get('#password').click().type('123456');

  })
})