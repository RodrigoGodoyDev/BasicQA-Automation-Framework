describe('Login Functionality', () => {

    // ANTES de todos los tests, crea el usuario
    before(() => {
        cy.createTestUserAPI(); 
    });

    it('Should login successfully', () => {
        // Usamos las variables que acabamos de inyectar en memoria
        const user = Cypress.env('test_user');
        const pass = Cypress.env('test_password');

        LoginPage.visit();
        LoginPage.login(user, pass);
        
        // ... validaciones ...
    });
});