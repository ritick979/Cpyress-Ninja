
describe('Login Test', () => { 
    
    it('Logs into the application', () => {
      // Visit the login page
      cy.visit('https://tutorialsninja.com/demo/');
  
      // Go to the My Account option
      cy.get('.dropdown > .dropdown-toggle > .fa').click();
      
      // Click on the Login link from the My Account dropdown option
      cy.get('.dropdown-menu > :nth-child(2) > a').click();
      
      // Fill in the username/email 
      cy.get('#input-email').type('sonam13@gmail.com') 
     
      // Fill in the username/email password
      cy.get('#input-password').type('sonam1516') 
      
      // Click on the login button
      cy.get('form > .btn').click();
  
      
    });
  });
  