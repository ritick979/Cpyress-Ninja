describe('Search Test', () => {
    it('search product & add to cart', () => {
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
 
     // Type product name in search box
      cy.get('.form-control').type('Monitor')
     
     // Click on search button 
      cy.get('.input-group-btn > .btn').click(); 
      
     // Click on product descriptions
      cy.get('#description').click();
     
     // Click on search button
      cy.get('#button-search').click(); 
     
     // Click on any product from search result 
      cy.get(':nth-child(2) > .product-thumb > .image > a > .img-responsive').click(); 
     
     // Click on add to cart button 
      cy.get('#button-cart').click(); 

     // Click on shopping cart link in displayed sucessful message. 
      cy.get('.alert > [href="https://tutorialsninja.com/demo/index.php?route=checkout/cart"]').click(); 

    // Click on Checkout button
      cy.get('.pull-right > .btn').click(); 

     // Click on Continue button of billing details
      cy.get('#button-payment-address').click();
          
     // Click on continue button of delivery details
     cy.get('#button-shipping-address').click(); 

     // Click on continue button of delivery method
     cy.get('#button-shipping-method').click(); 

     // Click on payment method 
     cy.get('#collapse-payment-method > .panel-body > .radio > label > input').click

     // Click on checkbox of payment method 
     cy.get('[type="checkbox"]').click() 

     // Click on continue button of payment method 
     cy.get('#button-payment-method').click(); 

     // Click on confirm order 
     cy.get('#button-confirm').click();


    });
  });
  