describe('Pagina de cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Lika Maria');
    cy.get('[data-test="input-email"]').type('lika.maria@globe.com');
    cy.get('[data-test="input-password"]').type('Alura@12234');
    cy.get('[data-test="input-confirm-password"]').type('Alura@12234');
    cy.get('[data-test="submit-button"]').click();
  })
})

