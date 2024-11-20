describe('Visite a página de principal do AdoPet', () => {
    it('teste os botões header', () => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('.header__message').click();
        cy.get('.header__home').click();
    });
});