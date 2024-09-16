describe('Automation Test Store', () => {
    it('Navigate tests', () => {

        // To Navigate the website
        cy.visit('https://automationteststore.com/index.php?rt=product/category&path=68_70');

        // To modify product
    
        cy.get('[name="option[350]"]').click().should('be checked');
    });
});