import BookStorePage from '../pages/BookStorePage';

// Bypass uncaught exceptions
Cypress.on('uncaught:exception', () => false);

describe('Search Functionality', () => {

    beforeEach(function () {
        // Load data
        cy.fixture('testData').then((data) => {
            this.data = data;
        });
    });

    it('Should search for a book successfully without login', function () {
        // Book Store
        BookStorePage.visit();

        // Search
        BookStorePage.searchBook(this.data.searchQuery);

        // Assertion
        BookStorePage.searchResult.should('contain.text', this.data.searchQuery);
    });
});