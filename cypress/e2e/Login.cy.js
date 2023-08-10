///<reference types="cypress"/>

describe('Login AU bank UAT', () => {

  it('tests AU bank UAT', () => {
    cy.visit('http://13.234.16.249:1005/sis/inputfg.aspx')
    
    console.log("new test passed")
})
  // before(function(){    
  
  //     cy.visit('/')
  //     cy.wait(5000)
  //     cy.get('#loginbtn').click();
  //     cy.wait(2000)
  // })

  // it('tests AU bank UAT', () => {
      
  //     cy.get('#username').click();
  //     cy.get('#username').type('insure');
  //     cy.get('#password').click().type('123456');

  // })
})