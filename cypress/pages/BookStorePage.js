class BookStorePage {

    // Locators
    get searchBox() { return cy.get("#searchBox"); }
    get searchResult() { return cy.get(".mr-2 > a"); }

    // Methods
    visit() {
        cy.visit("https://demoqa.com/books");
    }

    searchBook(bookName) {
        this.searchBox.type(bookName);
    }
}

export default new BookStorePage();