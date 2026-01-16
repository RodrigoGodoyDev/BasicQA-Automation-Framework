class PracticeFormPage {

    visit() {
    cy.visit('https://demoqa.com/automation-practice-form');
}

    // Getters (Selectors)
    get firstNameInput() {return cy.get('#firstName'); }
    get lastNameInput() {return cy.get('#lastName'); }
    get emailInput() {return cy.get('#userEmail'); }

    // Complex Selector
    genderRadio(gender) {
    return cy.contains('label', gender);
    }

    get mobileInput() {return cy.get('#userNumber'); }

    // Date Picker Selectors
    get dateOfBirthInput() {return cy.get('#dateOfBirthInput'); }

    // Subjetcs React dropdown Selector
    get subjectsInput() {return cy.get('#subjectsInput'); }

    get uploadPictureInput() {return cy.get('#uploadPicture'); }

    get submitBtn() { return cy.get('#submit'); }

    get modalTitle() { return cy.get('#example-modal-sizes-title-lg'); }

    // Methods to interact with the page
    fillPersonalData(name, lastName, email, mobile) {
    this.firstNameInput.type(name);
    this.lastNameInput.type(lastName);
    this.emailInput.type(email);
    this.mobileInput.type(mobile);
    }

    selectGender(gender) {
    this.genderRadio(gender).click({ force: true });
    }

    setBirthDate(day, month, year) {
        this.dateOfBirthInput.click();
        // Select from calendar dropdowns
        cy.get('.react-datepicker__month-select').select(month);
        cy.get('.react-datepicker__year-select').select(year);
        // Select the day of the current selected month
        cy.get(`.react-datepicker__day--0${day}`).not('.react-datepicker__day--outside-month').click();
    }

    submit() {
        this.submitBtn.click({ force: true });
    }
}

export default new PracticeFormPage();