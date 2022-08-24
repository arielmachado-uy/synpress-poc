describe('Test User Login', () => {
    it('Connects with Metamask', () => {
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
        
        // Visit trade site
        cy.visit('https://flooz.trade/')
        // Accept cookies
        cy.get('span').contains('Accept cookies').click();

        // Connect wallet
        cy.contains('Wallet').click();
        cy.get('button[class*="profile-page-connect__connect-btn"]').should('be.visible').click();
        cy.get('button').contains('MetaMask').should('be.visible').click();

	    // Connect to dapp
        // cy.switchToMetamaskWindow();
        cy.acceptMetamaskAccess().should("be.true");
        // cy.confirmMetamaskSignatureRequest(); <= Need to learn more about it, failing right now
	    // switch back to cypress window (your dApp)
        // cy.switchToCypressWindow();
    })
  })