import LoginPage from '../pages/LoginPage';

// Bypass uncaught exceptions
Cypress.on('uncaught:exception', () => false);

describe('Login Functionality', () => {

    beforeEach(function () {
        // Test data
        cy.fixture('testData').then((data) => {
            this.data = data;
        });
    });

    it('Should login successfully and validate session', function () {
        // Navigation
        LoginPage.visit();

        // Login
        LoginPage.login(Cypress.env('test_user'), Cypress.env('test_password'));

        // Assertions
        LoginPage.logoutBtn.should('be.visible').and('contain.text', this.data.loginSuccessMsg);
        
        // Validate URL redirection
        cy.url().should('include', this.data.expectedUrlPart);
        
        // Validate cookie generation
        cy.getCookie('token').should('exist');
    });
});