describe('API Testing - BookStore Endpoint', () => {

    it('GET /Books - Validate dataset structure and content', () => {
        cy.request('GET', 'https://demoqa.com/BookStore/v1/Books').then((response) => {
            
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('books');
            const books = response.body.books;

            // Requirement A: Dataset size
            expect(books).to.have.length(8);

            // Requirement B: Validate fields for Frontend filtering
            books.forEach((book) => {
                expect(book).to.have.property('title').that.is.a('string').and.not.empty;
                expect(book).to.have.property('author').that.is.a('string').and.not.empty;
            });
        });
    });
});