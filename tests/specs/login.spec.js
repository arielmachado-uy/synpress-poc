describe('Test User Login', () => {

    it('Connects with Metamask', () => {
        cy.visit('https://www.getfrontrunner.com/')
        cy.get('h1')
        .contains('With frontrunner, any payout can be a homerun.')
        .should('be.visible');
        // cy.contains('Sign').click(); 
        // cy.contains('Confirm').click();
        // cy.contains('Connect Wallet').click();
        // cy.contains('Metamask').click();
        // cy.switchToMetamaskWindow();
        // cy.acceptMetamaskAccess().should("be.true");
        // cy.confirmMetamaskSignatureRequest();
        // cy.switchToCypressWindow();
        // cy.contains('Add Project').should('be.visible');

    })
  })