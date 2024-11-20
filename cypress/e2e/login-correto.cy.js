describe('Acessendo a pagina da adopet e realizando o login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });
    it('Preenchendo as informações do login', () => {        
        cy.login('sabrina.benedita@email.com', 'Alura@2020');
    });
});