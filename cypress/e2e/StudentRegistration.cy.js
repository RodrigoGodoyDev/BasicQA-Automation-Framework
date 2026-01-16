import PracticeFormPage from "../pages/PracticeFormPage";

// Bypass
Cypress.on('uncaught:exception', () => false);

describe('Student Registration Form', () => {

    // Test Data
    const userData = {
        name: 'Rodrigo',
        lastName: 'Godoy',
        email: 'Rodrigo@test.com',
        gender: 'Male',
        mobile: '1234567890',
        day: '20',
        month: 'April',
        year: '1993',
    };

    it('should fill and submit the student registration form', () => {
        // Visit the Practice Form Page
        PracticeFormPage.visit();

        // Fill Personal Data
        PracticeFormPage.fillPersonalData(
            userData.name,
            userData.lastName,
            userData.email,
            userData.mobile
        );

        // Select Gender
        PracticeFormPage.selectGender(userData.gender);

        // Set Birth Date
        PracticeFormPage.setBirthDate(userData.day, userData.month, userData.year);

        // Select maths subject
        PracticeFormPage.subjectsInput.type('Maths{enter}');

        // Upload Picture
        PracticeFormPage.uploadPictureInput.selectFile('cypress/fixtures/foto.png');

        cy.scrollTo('bottom');
        PracticeFormPage.submit();

        PracticeFormPage.modalTitle.should('have.text', 'Thanks for submitting the form');

        cy.get('.table-responsive').should('contain', userData.name).and('contain', userData.email);
    });
});