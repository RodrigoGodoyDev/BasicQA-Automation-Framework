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

        // --- TUS CAMBIOS AQUÍ ---

        // 1. VALIDACIÓN PRINCIPAL (User Name):
        // Usamos el ID '#userName-value' que descubriste en el HTML.
        // AÑADIMOS EL TIMEOUT: Le damos 15 segundos para que desaparezca el "Loading..."
        // Validamos que el texto coincida con tu usuario real.
        cy.get('#userName-value', { timeout: 15000 })
          .should('have.text', Cypress.env('test_user'));

        // 2. VALIDACIÓN SECUNDARIA (Botón Logout):
        // Ya no necesitamos timeout aquí porque si pasó la línea de arriba, esto ya cargó.
        LoginPage.logoutBtn.should('be.visible').and('contain.text', 'Log out');
        
        // 3. VALIDACIÓN DE URL (Opcional pero buena práctica):
        // Verificamos que ya no estemos en '/login'
        cy.url().should('not.include', '/login');
        
        // Validate cookie generation
        cy.getCookie('token').should('exist');
    });
});