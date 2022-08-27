describe('Metamask POC', () => {
    before(function () {
        cy.mailslurp()
            .then(mailslurp => mailslurp.createInbox())
            .then(inbox => {
                // save inbox id and email address to this (make sure you use function and not arrow syntax)
                cy.wrap(inbox.id).as('inboxId')
                cy.wrap(inbox.emailAddress).as('emailAddress')
            })
    });

    it.skip('Switching tabs between Cypress and Metamask', () => {
        // Switching to Metamask tab
        cy.switchToMetamaskWindow();

        // Validate MM window is active
        cy.isMetamaskWindowActive()
        .then(response => {
            expect(response).to.be.true;
        })

        // Validate Cypress window is not active
        cy.isCypressWindowActive()
        .then(response => {
            expect(response).to.be.false;
        })

       // Switching to Cypress tab
        cy.switchToCypressWindow();
 
        // Validate Cypress window is active
        cy.isCypressWindowActive()
        .then(response => {
            expect(response).to.be.true;
        })

        // Validate MM window is not active
        cy.isMetamaskWindowActive()
        .then(response => {
            expect(response).to.be.false;
        })
    })
    
    it('Connects with Metamask', function () {
        // Visit FrontRunner site
        cy.visit("/")

        expect(this.emailAddress).to.contain("@mailslurp");
        cy.log(this.emailAddress);
        // // Sign in
        // cy.get('.sign-in')
        // .invoke('removeAttr', 'target')
        // .click();
        // cy.contains('Sign In').click();
      
        // // Type mailinator email
        // cy.get('#email').type('arielo@mailinator.com');
        // cy.get('#btn-login').click();
        
        // // Connect wallet
        // cy.contains('Connect Wallet').click();
        // cy.contains('MetaMask').click();
       
        // // Connect to dApp
        // cy.acceptMetamaskAccess().should("be.true");
    })
  })