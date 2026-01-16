class LoginPage {

    // Locators
    get userInput() { return cy.get("#userName"); }
    get passInput() { return cy.get("#password"); }
    get loginBtn() { return cy.get("#login"); }
    get logoutBtn() { return cy.get("#submit"); }
    get userDisplay() { return cy.get("#userName-value"); }

    // Methods
    visit() {
        cy.visit("https://demoqa.com/login");
    }

    login(username, password) {
        this.userInput.type(username);
        this.passInput.type(password);
        this.loginBtn.click();
    }
}

export default new LoginPage();